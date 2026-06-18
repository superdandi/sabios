"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(225,105,50,0.08)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(28,17,13,0.95)_0%,_transparent_50%)]" />

      <AnimateOnScroll>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/sabios/logo-sabios.svg"
            alt="SABIOS"
            className="h-36 md:h-44 mx-auto mb-6"
          />
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-accent tracking-[0.15em] mb-2">
            SABIOS
          </h1>
          <p className="text-text-muted text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Pizzería
          </p>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-4 font-sans">
            Pizza artesanal por pedazos · Completos para retiro
          </p>
          <p className="font-accent text-accent text-xl md:text-2xl mb-8">
            Hecho en Talca, con cariño y buena masa
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="px-8 py-3 rounded-lg bg-accent text-bg font-heading font-semibold text-lg tracking-wider hover:brightness-110 transition-all shadow-lg shadow-accent/20"
            >
              Ver Carta
            </a>
            <a
              href="https://wa.me/56982864145?text=Hola%20SABIOS%2C%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border border-white/10 text-text hover:bg-white/5 font-heading font-semibold text-lg tracking-wider transition-all"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
