import io
import os
import pypdf
from PIL import Image

pdf_path = r"public/media/source/portfolio-source.pdf"
reader = pypdf.PdfReader(pdf_path)

# Map page index (0-based) and image index to destination filename and category
TARGET_MAPPINGS = {
    # Masseria Contemporanea
    (6, 0): ("projects/masseria-hero.webp", 1920),      # Page 7
    (5, 0): ("projects/masseria-terrace.webp", 1600),   # Page 6
    (8, 0): ("projects/masseria-pool.webp", 1920),      # Page 9
    (7, 0): ("moodboards/masseria-materials.webp", 1200),# Page 8
    (9, 0): ("plans/masseria-siteplan.webp", 1400),     # Page 10
    
    # Residencia Privada
    (11, 0): ("projects/residencia-hero.webp", 1920),   # Page 12
    (12, 0): ("projects/residencia-kitchen.webp", 1920),# Page 13
    (14, 0): ("projects/residencia-bedroom.webp", 1400),# Page 15
    (14, 1): ("projects/residencia-closet.webp", 1400), # Page 15
    (15, 0): ("moodboards/residencia-materials.webp", 1400), # Page 16
    (16, 0): ("projects/residencia-bath.webp", 1400),   # Page 17
    (16, 1): ("projects/residencia-living-2.webp", 1400),# Page 17

    # Boutique Hotel Aurea
    (20, 0): ("projects/aurea-hero.webp", 1920),        # Page 21
    (21, 0): ("moodboards/aurea-terracotta.webp", 1920),# Page 22
    (22, 0): ("projects/aurea-suite.webp", 1920),       # Page 23
    (23, 0): ("projects/aurea-terrace.webp", 1280),     # Page 24
    (25, 0): ("projects/aurea-bath.webp", 1280),        # Page 26
    (19, 0): ("plans/aurea-floorplan-1.webp", 1000),    # Page 20
    (19, 1): ("plans/aurea-floorplan-2.webp", 1000),    # Page 20
    (19, 3): ("plans/aurea-floorplan-3.webp", 1000),    # Page 20
    (26, 0): ("plans/aurea-detail-plan.webp", 1000),    # Page 27
    (26, 1): ("plans/aurea-technical-section.webp", 1000), # Page 27

    # Showroom Corporativo
    (29, 0): ("projects/showroom-hero.webp", 1920),     # Page 30
    (30, 0): ("projects/showroom-facade.webp", 1920),   # Page 31
    (31, 0): ("projects/showroom-meeting.webp", 1920),  # Page 32
    (32, 2): ("moodboards/showroom-materials.webp", 1920), # Page 33
    (33, 0): ("projects/showroom-lounge.webp", 1920),   # Page 34
    (34, 0): ("projects/showroom-workspace.webp", 1920),# Page 35

    # Stefania profile & Cover
    (0, 0): ("stefania/cover-art.webp", 1000),          # Page 1
    (2, 0): ("stefania/portrait.webp", 800),            # Page 3
}

out_base = "public/media/images"

print(f"Total pages in PDF: {len(reader.pages)}")
count = 0
for (page_idx, img_idx), (rel_path, max_dim) in TARGET_MAPPINGS.items():
    if page_idx < len(reader.pages):
        page = reader.pages[page_idx]
        if img_idx < len(page.images):
            img_file = page.images[img_idx]
            try:
                im = Image.open(io.BytesIO(img_file.data))
                # Convert to RGB if RGBA or P
                if im.mode in ("RGBA", "P"):
                    bg = Image.new("RGB", im.size, (255, 255, 255))
                    if im.mode == "RGBA":
                        bg.paste(im, mask=im.split()[3])
                    else:
                        bg.paste(im)
                    im = bg
                elif im.mode != "RGB":
                    im = im.convert("RGB")

                # Resize if exceeding max_dim
                if im.width > max_dim or im.height > max_dim:
                    im.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)

                dest_full = os.path.join(out_base, rel_path)
                os.makedirs(os.path.dirname(dest_full), exist_ok=True)
                im.save(dest_full, "WEBP", quality=86, method=6)
                print(f"Saved: {rel_path} ({im.width}x{im.height}, {os.path.getsize(dest_full)//1024} KB)")
                count += 1
            except Exception as e:
                print(f"Error extracting P{page_idx+1}_img{img_idx}: {e}")
        else:
            print(f"Image index {img_idx} not found on page {page_idx+1}")

print(f"\nSuccessfully extracted {count} high-resolution assets into {out_base}")
