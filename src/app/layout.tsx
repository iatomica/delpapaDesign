import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap"
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#0D0C0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sense.iatomica.com"),
  title: "SENSE | Stefania Del Papa — Architecture & High-End Interior Design",
  description:
    "Transformamos el espacio en una experiencia sensorial a medida. Portafolio de arquitectura interior de lujo, hospitalidad y mobiliario bespoke en Valencia, Buenos Aires y el sur de Italia.",
  keywords: [
    "Interior Design",
    "Stefania Del Papa",
    "SENSE Studio",
    "Quiet Luxury",
    "Architecture Portfolio",
    "Hospitality Design",
    "Boutique Hotel Aurea",
    "Masseria Contemporánea",
    "Matera",
    "Brindisi",
    "Valencia"
  ],
  authors: [{ name: "Stefania Del Papa" }],
  creator: "Stefania Del Papa",
  openGraph: {
    title: "SENSE | Stefania Del Papa — Architecture & Interior Design",
    description: "Transformamos el espacio en una experiencia sensorial a medida.",
    url: "https://sense.iatomica.com",
    siteName: "SENSE By Stefania Del Papa",
    images: [
      {
        url: "/media/images/projects/aurea-hero.webp",
        width: 1920,
        height: 1081,
        alt: "SENSE - Interior Design & Architecture Portfolio"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SENSE | Stefania Del Papa",
    description: "Transformamos el espacio en una experiencia sensorial a medida.",
    images: ["/media/images/projects/aurea-hero.webp"]
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
    <html lang="es" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="bg-[#0D0C0B] text-[#EDEAE4] selection:bg-[#C2A77A]/30 selection:text-[#EDEAE4] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
