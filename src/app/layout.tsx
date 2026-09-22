import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f5f2ed",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sense.iatomica.com"),
  title: "SENSE by Stefania Del Papa | Estudio de Diseño Interior",
  description:
    "Filosofía proyectual: Transformamos el espacio en una experiencia sensorial a medida. Interiorismo residencial de alto nivel, reformas complejas y proyectos de hospitality.",
  keywords: [
    "SENSE",
    "Stefania Del Papa",
    "Diseño Interior",
    "Interiorismo",
    "Estudio de diseño interior",
    "Residencia Privada",
    "Hospitality & Resort",
    "Valencia",
    "Brindisi",
    "Buenos Aires"
  ],
  authors: [{ name: "Stefania Del Papa" }],
  creator: "Stefania Del Papa",
  openGraph: {
    title: "SENSE by Stefania Del Papa | Estudio de Diseño Interior",
    description: "Transformamos el espacio en una experiencia sensorial a medida.",
    url: "https://sense.iatomica.com",
    siteName: "SENSE by Stefania Del Papa",
    images: [
      {
        url: "/media/images/projects/residencia-hero.webp",
        width: 1920,
        height: 1081,
        alt: "SENSE by Stefania Del Papa"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SENSE by Stefania Del Papa",
    description: "Transformamos el espacio en una experiencia sensorial a medida.",
    images: ["/media/images/projects/residencia-hero.webp"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#f5f2ed] text-[#9e918a] selection:bg-[#b49775]/25 selection:text-[#b49775] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
