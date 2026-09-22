"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Sparkle } from "@/components/ui/Sparkle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"ES" | "IN" | "IT">("ES");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "ESTUDIO", href: "/#estudio" },
    { label: "PROYECTOS", href: "/#proyectos" },
    { label: "¿CÒMO TRABAJAMOS?", href: "/#como-trabajamos" },
    { label: "CONTACTANOS", href: "/#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f5f2ed]/95 backdrop-blur-md shadow-sm border-b border-[#b49775]/20 py-3.5"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-28 sm:w-36 h-10 sm:h-12 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/media/images/brand/logo.png"
              alt="SENSE by Stefania Del Papa"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-widest font-serif">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1.5 transition-colors py-1 relative group ${
                scrolled
                  ? "text-[#5c5550] hover:text-[#b49775]"
                  : "text-[#f5f2ed] hover:text-[#b49775]"
              }`}
            >
              <Sparkle size={12} className="opacity-80 group-hover:rotate-45 transition-transform duration-300" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Language Selector in Top Right */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-serif tracking-wider">
          {(["ES", "IN", "IT"] as const).map((lang, idx) => (
            <React.Fragment key={lang}>
              {idx > 0 && (
                <span className={`text-[10px] ${scrolled ? "text-[#b49775]/50" : "text-[#f5f2ed]/40"}`}>
                  |
                </span>
              )}
              <button
                onClick={() => setCurrentLang(lang)}
                className={`transition-colors uppercase text-[11px] ${
                  currentLang === lang
                    ? "font-semibold text-[#b49775]"
                    : scrolled
                    ? "text-[#7a6e67] hover:text-[#b49775]"
                    : "text-[#f5f2ed]/70 hover:text-[#f5f2ed]"
                }`}
              >
                {lang}
              </button>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-[#5c5550] hover:text-[#b49775]" : "text-[#f5f2ed]"
          }`}
          aria-label="Abrir Menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[#f5f2ed]/98 backdrop-blur-xl z-40 p-8 flex flex-col justify-between border-t border-[#b49775]/20 animate-fadeIn">
          <nav className="flex flex-col gap-6 pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#5c5550] hover:text-[#b49775] flex items-center gap-3 transition-colors"
              >
                <Sparkle size={16} />
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#b49775]/20 flex items-center justify-between text-xs text-[#9e918a]">
            <span>SENSE by Stefania Del Papa</span>
            <div className="flex gap-2">
              {(["ES", "IN", "IT"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-2 py-1 rounded text-xs ${
                    currentLang === lang ? "bg-[#b49775] text-white" : "text-[#7a6e67]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
