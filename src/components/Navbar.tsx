"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#menu", label: "Carta" },
  { href: "#about", label: "Nosotros" },
  { href: "#gallery", label: "Galería" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass-warm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2">
            <img src="/sabios/logo-icon.svg" alt="" className="h-8 w-auto" />
            <span className="font-heading text-lg font-bold text-accent tracking-wider">SABIO</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-text hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2 rounded-lg bg-accent text-bg text-sm font-semibold hover:brightness-110 transition-all"
            >
              Pedir
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-text-muted hover:text-text hover:bg-white/5 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-warm border-t border-border animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-text-muted hover:text-text hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-semibold bg-accent text-bg text-center"
            >
              Pedir
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
