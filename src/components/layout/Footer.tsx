"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkle } from "@/components/ui/Sparkle";

export function Footer() {
  const [currentLang, setCurrentLang] = useState<"ES" | "IN" | "IT">("ES");

  const footerLinks = [
    { label: "ESTUDIO", href: "/#estudio" },
    { label: "¿CÒMO TRABAJAMOS?", href: "/#como-trabajamos" },
    { label: "PROYECTOS", href: "/#proyectos" },
    { label: "CONTACTANOS", href: "/#contacto" },
  ];

  return (
    <footer className="w-full bg-[#ded6cb] text-[#5c5550] py-14 border-t border-[#b49775]/20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left: Brand Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="relative w-36 h-14 block">
              <Image
                src="/media/images/brand/logo.png"
                alt="SENSE by Stefania Del Papa"
                fill
                className="object-contain filter contrast-105"
              />
            </Link>
          </div>

          {/* Center: Navigation Links in Grid + Language Selector */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-serif text-xs tracking-wider">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-center gap-1.5 hover:text-[#b49775] transition-colors"
                >
                  <Sparkle size={10} />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Language Switcher at bottom of footer links */}
            <div className="flex items-center gap-3 text-[11px] font-serif tracking-widest pt-2">
              {(["ES", "IN", "IT"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`transition-colors uppercase ${
                    currentLang === lang
                      ? "text-[#b49775] font-bold"
                      : "text-[#7a6e67] hover:text-[#b49775]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-5 text-[#5c5550]">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/stefania-del-papa-interior-designer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#b49775] transition-transform hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Facebook / Behance */}
            <a
              href="https://www.behance.net/stefaniadelpapa-sens"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="hover:text-[#b49775] transition-transform hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.84 3.44 8.87 8 9.8v-6.93h-2.54v-2.87h2.54v-2.19c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.87h-2.33v6.93c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="hover:text-[#b49775] transition-transform hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#b49775] transition-transform hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-[#b49775]/20 text-center text-[11px] font-sans font-light text-[#7a6e67]">
          © {new Date().getFullYear()} SENSE by Stefania Del Papa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
