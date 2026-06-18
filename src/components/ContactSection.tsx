"use client";

import { MapPin, Clock, MessageCircle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(225,105,50,0.05)_0%,_transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-brand-orange font-accent text-xl">Hablemos</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-2 tracking-tight">
              Contacto
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mt-4">
              Haz tu pedido por WhatsApp o visítanos. Siempre con una sonrisa y masa fresca.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="glass-card-solid p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-orange shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold text-text-primary text-lg">Dirección</h3>
                  <p className="text-text-muted mt-1">21 Oriente s/n, Talca</p>
                  <p className="text-text-muted text-sm">Sector nuevos departamentos</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={20} className="text-brand-orange shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold text-text-primary text-lg">Horarios</h3>
                  <div className="text-text-muted text-sm mt-1 space-y-1">
                    <p><span className="text-brand-orange/70">Lunes</span> — Cerrado</p>
                    <p><span className="text-brand-orange/70">Mar–Jue</span> — 12:00–15:00 / 19:00–22:30</p>
                    <p><span className="text-brand-orange/70">Vie–Sáb</span> — 12:00–15:00 / 19:00–23:00</p>
                    <p><span className="text-brand-orange/70">Domingo</span> — 12:00–16:00 (solo pizza)</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="glass-card-solid p-8 flex flex-col items-center justify-center text-center gap-6">
              <div className="w-16 h-16 rounded-full bg-whatsapp-green/10 flex items-center justify-center">
                <MessageCircle size={32} className="text-whatsapp-green" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-text-primary text-lg mb-2">
                  Pedidos por WhatsApp
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  Escríbenos directo y te confirmamos al tiro.
                </p>
                <a
                  href="https://wa.me/56982864145?text=Hola%20SABIOS%2C%20quiero%20hacer%20un%20pedido"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 h-12 rounded-sm bg-whatsapp-green text-white font-heading text-base font-semibold tracking-wider hover:brightness-110 transition-all shadow-lg shadow-whatsapp-shadow"
                >
                  <MessageCircle size={20} />
                  Pedir Aquí
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
