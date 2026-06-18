"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(225,105,50,0.03)_0%,_transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <div>
              <span className="text-brand-orange font-accent text-xl">Nuestra historia</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-2 tracking-tight">
                Conoce SABIOS
              </h2>
              <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                <p>
                  SABIOS nace en Talca como una pizzería artesanal que busca rescatar el sabor
                  de la buena masa, los ingredientes frescos y el oficio bien hecho. Sin
                  pretensiones, pero con mucha dedicación.
                </p>
                <p>
                  Nuestra inspiración viene de{" "}
                  <a
                    href="https://www.instagram.com/eruditos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-orange hover:underline"
                  >
                    @eruditos
                  </a>
                  , un espacio que demuestra que en Talca se puede hacer gastronomía de calidad
                  con personalidad. Desde el primer día supimos que queríamos ser parte de ese
                  mismo movimiento: el de hacer las cosas bien, con cariño y con sello local.
                </p>
                <p>
                  Pizza por pedazos, completos para retiro, y un compromiso: que cada bocado
                  sepa a hogar.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="glass-card p-6">
              <h3 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                Hecho en Talca
              </h3>
              <div className="space-y-4 text-text-muted text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-orange text-sm font-bold">01</span>
                  </div>
                  <div>
                    <span className="text-text-primary font-medium">Masa artesanal</span>
                    <p className="mt-1">Fermentación lenta y preparación diaria.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-orange text-sm font-bold">02</span>
                  </div>
                  <div>
                    <span className="text-text-primary font-medium">Ingredientes frescos</span>
                    <p className="mt-1">Seleccionados con cuidado, sin atajos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-orange text-sm font-bold">03</span>
                  </div>
                  <div>
                    <span className="text-text-primary font-medium">Retiro en local</span>
                    <p className="mt-1">Listo cuando tú quieras, siempre recién hecho.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
