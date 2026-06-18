"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Gallery() {
  const placeholders = Array.from({ length: 6 }, (_, i) => i);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(225,105,50,0.02)_0%,_transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent font-accent text-xl">En imágenes</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mt-2 tracking-tight">
              Galería
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mt-4">
          Pronto: fotos reales de nuestras pizzas, el local y el proceso artesanal.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((i) => (
            <AnimateOnScroll key={i}>
              <div className="glass-card-warm aspect-square flex items-center justify-center group cursor-pointer hover:shadow-[0_0_20px_rgba(225,105,50,0.1)] transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/5 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-accent/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-text-muted/40 text-xs">Foto próximamente</span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
