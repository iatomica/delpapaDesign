import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { Sparkle } from "@/components/ui/Sparkle";
import { SectionAnimator } from "@/components/ui/EntranceAnimation";
import { MapPin } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "residencia-privada" },
    { slug: "masseria-contemporanea" },
    { slug: "hospitality-resort" },
    { slug: "boutique-hotel-aurea" },
  ];
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  // Residencia Privada matching Residencia privada.png
  if (slug === "residencia-privada") {
    return (
      <main className="relative w-full min-h-screen bg-[#f5f2ed] text-[#9e918a]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="/media/images/sections/residencia-wide-living.png"
            alt="Residencia Privada en Brindisi"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f5f2ed] font-normal leading-tight drop-shadow-md">
              La serenidad del estilo mediterráneo en su máxima expresión
            </h1>
          </div>
        </section>

        {/* Section 1: Intro Text Left, Vertical Image Right */}
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6 space-y-6">
              <div>
                <span className="font-serif text-xs sm:text-sm tracking-[0.25em] text-[#b49775] uppercase block mb-1">
                  RESIDENCIA PRIVADA
                </span>
                <h2 className="font-serif text-lg sm:text-xl text-[#b49775] tracking-wider uppercase font-normal">
                  INTERIORISMO Y MOBILIARIO A MEDIDA
                </h2>
              </div>
              <p className="text-xs sm:text-[14px] font-sans font-light leading-relaxed text-[#7a6e67]">
                Este proyecto residencial equilibra la elegancia atemporal con la funcionalidad contemporánea para crear un refugio de calma y sofisticación. A través de una paleta neutra enriquecida con acentos cálidos y texturas nobles, los espacios fluyen de manera continua bajo un solado unificador de madera clara. Cerramientos de vidrio estriado articulan la transición entre la cocina con isla de mármol y el comedor, preservando la luminosidad natural. En el estar y la suite principal, molduras contemporáneas tipo boiserie, mobiliario a medida y un cuidado esquema de iluminación indirecta conviven con detalles de lujo sutil —como el vestidor retroiluminado— para configurar una atmósfera íntima, equilibrada y serena.
              </p>
            </div>

            <div className="md:col-span-6 relative h-[440px] sm:h-[540px] rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/media/images/sections/residencia-hallway.png"
                alt="Recibidor con espejo estriado y carpintería a medida"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Full-Width Living Room + Centered Editorial Text */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="relative w-full h-[400px] sm:h-[580px] rounded-xl overflow-hidden shadow-sm mb-10">
            <Image
              src="/media/images/sections/residencia-wide-living.png"
              alt="Salón con sofá curvo de terciopelo y chimenea integrada"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-5 text-xs sm:text-[14px] font-sans font-light leading-relaxed text-[#7a6e67] text-left">
            <p>
              Este concepto explora el lujo silencioso contemporáneo a través de un diálogo entre arquitectura clásica, líneas depuradas y una atmósfera de calma envolvente.
            </p>
            <p>
              El espacio se organiza a partir de divisorias acristaladas con arcos sutiles que conectan visualmente las áreas sociales, permitiendo un paso fluido de la luz natural. El equilibrio material se construye combinando la calidez del suelo de roble con la presencia táctil de un sofá curvo en terciopelo verde bosque, acentos en hierro negro, detalles en latón dorado y la sutileza del vidrio acanalado.
            </p>
            <p>
              Apoyada en una chimenea integrada y una iluminación tenue y escultórica, la propuesta transmite una sensación de refugio íntimo, serenidad y elegancia atemporal, donde cada textura busca el confort sensorial del hogar.
            </p>
          </div>
        </section>

        {/* Section 3: Two Images Side by Side (Dining & Kitchen) */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative h-[380px] sm:h-[500px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/media/images/projects/residencia-kitchen.webp"
                alt="Comedor y cerramiento con visillo etéreo"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[380px] sm:h-[500px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/media/images/projects/residencia-bath.webp"
                alt="Cocina con isla de mármol y arco de vidrio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Full-Width Bedroom */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="relative w-full h-[400px] sm:h-[580px] rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/media/images/projects/residencia-bedroom.webp"
              alt="Dormitorio principal con cabecero tapizado y boiserie"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Section 5: Two Images Side by Side (Closet & TV Wall) + Location Tag */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6">
            <div className="relative h-[380px] sm:h-[500px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/media/images/projects/residencia-closet.webp"
                alt="Vestidor retroiluminado con puertas de cristal y tocador"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[380px] sm:h-[500px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/media/images/projects/residencia-living-2.webp"
                alt="Suite principal con mueble de televisión a medida"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex justify-end items-center gap-1.5 text-xs font-serif text-[#b49775]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Brindisi, Italia</span>
          </div>
        </section>

        {/* Section 6: Otros Proyectos Carousel */}
        <ProjectsCarousel title="OTROS PROYECTOS." id="otros-proyectos" />

        <Footer />
        <SectionAnimator />
      </main>
    );
  }

  // Hospitality & Resort matching Hospitality & resort.png
  if (slug === "masseria-contemporanea" || slug === "hospitality-resort") {
    return (
      <main className="relative w-full min-h-screen bg-[#f5f2ed] text-[#9e918a]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="/media/images/sections/hospitality-wide-terrace.png"
            alt="Hospitality & Resort en Brindisi"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f5f2ed] font-normal leading-tight drop-shadow-md">
              La serenidad del estilo mediterráneo en su máxima expresión
            </h1>
          </div>
        </section>

        {/* Section 1: Intro Text Left, Vertical Indoor Dining Right */}
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6 space-y-6">
              <div>
                <span className="font-serif text-xs sm:text-sm tracking-[0.25em] text-[#b49775] uppercase block mb-1">
                  HOSPITALITY & RESORT
                </span>
                <h2 className="font-serif text-lg sm:text-xl text-[#b49775] tracking-wider uppercase font-normal">
                  MASSERIA CONTEMPORÁNEA
                </h2>
              </div>
              <div className="space-y-4 text-xs sm:text-[14px] font-sans font-light leading-relaxed text-[#7a6e67]">
                <p>
                  Proyecto integral de arquitectura interior, paisajismo y hospitalidad concebido como una relectura contemporánea de la masseria tradicional pugliese, articulando dos programas funcionales independientes para equilibrar la actividad pública con el reposo privado.
                </p>
                <p>
                  Al frente se implanta el sector gastronómico, un espacio biofílico resuelto con pérgolas suspendidas de vegetación natural, iluminación rasante cálida, pavimentos continuos en piedra clara y carpintería técnica a medida (bespoke millwork). Hacia la parte posterior, desacoplado para asegurar privacidad acústica, se desarrolla el sector residencial boutique (Airbnb), configurado por suites de descanso con panelados alistonados, celosías de esterilla y baños con bañeras exentas.
                </p>
                <p>
                  El conjunto converge en un patio exterior que integra solárium en piedra abujardada, piscina de líneas puras, spa privado y un área de parrilla al aire libre, unificados bajo una paleta noble de estucos de cal, roble natural y piedra seca local.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 relative h-[440px] sm:h-[540px] rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/media/images/sections/hospitality-indoor-dining.png"
                alt="Espacio gastronómico con vegetación suspendida e iluminación rasante"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Full-Width Terrace Image + Descriptive Paragraph */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="relative w-full h-[400px] sm:h-[580px] rounded-xl overflow-hidden shadow-sm mb-10">
            <Image
              src="/media/images/sections/hospitality-wide-terrace.png"
              alt="Terraza exterior con pérgola de madera y cortinados etéreos"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto text-xs sm:text-[14px] font-sans font-light leading-relaxed text-[#7a6e67]">
            <p>
              Diseño de terraza gastronómica exterior concebido como un oasis mediterráneo al aire libre. El espacio se estructura a través de una amplia pérgola perimetral de madera con cañizo y cortinados etéreos en tonos neutros, ofreciendo sombra y privacidad sin perder fluidez visual. La disposición privilegia mesas circulares con tapas pétreas y bases cilíndricas, acompañadas de sillas de fibras tejidas y tapicería clara sobre un solado continuo de travertino. Un paisajismo integrado en jardineras perimetrales y olivos en macetas de terracota completa la propuesta, creando una atmósfera relajada, elegante y conectada con la naturaleza.
            </p>
          </div>
        </section>

        {/* Section 3: Full-Width Suite Room with Slatted Screen & Tub */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="relative w-full h-[400px] sm:h-[580px] rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/media/images/sections/hospitality-suite.png"
              alt="Suite boutique con panelados alistonados y bañera exenta"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Section 4: Full-Width Swimming Pool & Arched Cabanas */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="relative w-full h-[400px] sm:h-[580px] rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/media/images/sections/hospitality-pool-arches.png"
              alt="Piscina exterior de líneas puras con arcadas encaladas"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Section 5: Masterplan Diagram with Callout Pins */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="relative w-full h-[520px] sm:h-[700px] rounded-xl overflow-hidden shadow-sm mb-4">
            <Image
              src="/media/images/sections/hospitality-masterplan.png"
              alt="Masterplan de zonificación: Área Social, Piscina, Spa, Suites y Restaurante"
              fill
              className="object-contain bg-[#f5f2ed]"
            />
          </div>

          <div className="flex justify-end items-center gap-1.5 text-xs font-serif text-[#b49775]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Brindisi, Italia</span>
          </div>
        </section>

        {/* Section 6: Otros Proyectos Carousel */}
        <ProjectsCarousel title="OTROS PROYECTOS." id="otros-proyectos" />

        <Footer />
        <SectionAnimator />
      </main>
    );
  }

  // Boutique Hotel Aurea
  if (slug === "boutique-hotel-aurea") {
    return (
      <main className="relative w-full min-h-screen bg-[#f5f2ed] text-[#9e918a]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="/media/images/projects/aurea-hero.webp"
            alt="Boutique Hotel Aurea en Matera"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f5f2ed] font-normal leading-tight drop-shadow-md">
              Hospitalidad de lujo & identidad vernácula
            </h1>
          </div>
        </section>

        {/* Section 1 */}
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6 space-y-6">
              <div>
                <span className="font-serif text-xs sm:text-sm tracking-[0.25em] text-[#b49775] uppercase block mb-1">
                  BOUTIQUE HOTEL & SPA
                </span>
                <h2 className="font-serif text-lg sm:text-xl text-[#b49775] tracking-wider uppercase font-normal">
                  HOTEL AUREA · MATERA
                </h2>
              </div>
              <p className="text-xs sm:text-[14px] font-sans font-light leading-relaxed text-[#7a6e67]">
                Emplazado en una ubicación privilegiada con vistas panorámicas a las colinas del norte de Matera, este proyecto de interiorismo de lujo reinterpreta la identidad vernácula y la arquitectura excavada en roca de la región en clave contemporánea. El edificio, estructurado en tres niveles escalonados, maximiza la privacidad con suites provistas de piscinas privadas en roca en planta baja, y apartamentos con cocina y jacuzzi en los niveles superiores.
              </p>
            </div>

            <div className="md:col-span-6 relative h-[440px] sm:h-[540px] rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/media/images/projects/aurea-bath.webp"
                alt="Baño de inspiración rupestre en Hotel Aurea"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Full-Width Suite */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="relative w-full h-[400px] sm:h-[580px] rounded-xl overflow-hidden shadow-sm mb-10">
            <Image
              src="/media/images/projects/aurea-suite.webp"
              alt="Suite panorámica en tonos terracota y cal"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto text-xs sm:text-[14px] font-sans font-light leading-relaxed text-[#7a6e67]">
            <p>
              La paleta cromática se nutre directamente de la tierra: el terracota abraza los espacios en diálogo con estucos minerales, mármol claro, roble y acero negro, preservando el frescor bioclimático de la piedra toba.
            </p>
          </div>
        </section>

        {/* Section 3: Two Images Side by Side */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6">
            <div className="relative h-[380px] sm:h-[500px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/media/images/projects/aurea-terrace.webp"
                alt="Terraza privada con solárium"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[380px] sm:h-[500px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/media/images/moodboards/aurea-terracotta.webp"
                alt="Moodboard matérico de terracota y toba calcárea"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex justify-end items-center gap-1.5 text-xs font-serif text-[#b49775]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Matera, Italia</span>
          </div>
        </section>

        {/* Section 4: Otros Proyectos */}
        <ProjectsCarousel title="OTROS PROYECTOS." id="otros-proyectos" />

        <Footer />
        <SectionAnimator />
      </main>
    );
  }

  return notFound();
}
