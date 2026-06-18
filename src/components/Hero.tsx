"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-canvas">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(225,105,50,0.08)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(28,17,13,0.95)_0%,_transparent_50%)]" />

      <AnimateOnScroll>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/sabios/logo-sabios.svg"
            alt="SABIO"
            className="h-48 md:h-60 mx-auto mb-8"
          />
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Pizza artesanal por pedazos · Completos para retiro
          </p>
          <p className="font-accent text-brand-orange text-xl md:text-2xl mb-8">
            Hecho en Talca, con cariño y buena masa
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="px-10 py-4 h-14 rounded-sm bg-brand-orange text-canvas font-heading text-xl font-semibold tracking-wider hover:brightness-110 transition-all"
            >
              Ver Carta
            </a>
            <a
              href="https://wa.me/56982864145?text=Hola%20SABIOS%2C%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 h-12 rounded-sm border border-white/10 text-text-primary hover:bg-white/5 font-heading text-base font-semibold tracking-wider transition-all"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
