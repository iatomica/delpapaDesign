"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Manifiesto", href: "#manifiesto" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Materialidad", href: "#materialidad" },
    { label: "Rigor Técnico", href: "#planos" },
    { label: "Estudio", href: "#estudio" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D0C0B]/85 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-gradient-to-b from-[#0D0C0B]/90 via-[#0D0C0B]/30 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-2xl md:text-3xl tracking-widest text-[#EDEAE4] group-hover:text-[#C2A77A] transition-colors">
            SENSE
          </span>
          <span className="editorial-mono text-[9px] tracking-[0.25em] text-[#A6A095]">
            By Stefania Del Papa
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-widest uppercase font-sans text-[#EDEAE4]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#C2A77A] transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C2A77A] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contacto"
            className="btn-editorial btn-editorial-outline text-[11px] py-2.5 px-5"
          >
            <span>Consultoría</span>
            <ArrowUpRight className="w-3 h-3 text-[#C2A77A]" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#EDEAE4] hover:text-[#C2A77A] transition-colors"
          aria-label="Abrir Menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-[#0D0C0B]/98 backdrop-blur-xl z-40 p-8 flex flex-col justify-between border-t border-white/5 animate-fadeIn">
          <nav className="flex flex-col gap-6 pt-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl text-[#EDEAE4] hover:text-[#C2A77A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4 text-xs text-[#A6A095]">
            <p>Valencia · Buenos Aires · Matera</p>
            <p className="text-[#EDEAE4]">sense.studiodesign@gmail.com</p>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-editorial btn-editorial-primary text-center justify-center mt-2"
            >
              Iniciar Proyecto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
