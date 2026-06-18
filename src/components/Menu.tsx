"use client";

import { pizzas } from "@/data/menu";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Menu() {
  return (
    <section id="menu" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(225,105,50,0.04)_0%,_transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-brand-orange font-accent text-xl">Sabores que inspiran</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-2 tracking-tight">
              Nuestra Carta
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mt-4">
              Cada pizza es una creación pensada para compartir. Masa artesanal, ingredientes
              frescos y mucho oficio.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pizzas.map((pizza) => (
            <AnimateOnScroll key={pizza.id}>
              <div className="glass-card-solid p-6 orange-glow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-heading text-xl font-medium text-text-primary group-hover:text-brand-orange transition-colors">
                      {pizza.name}
                    </h3>
                    <span className="text-xs text-text-muted-soft font-mono">#{String(pizza.id).padStart(2, '0')}</span>
                  </div>
                  <span className="text-brand-orange font-heading font-bold text-lg whitespace-nowrap">
                    {pizza.price}
                  </span>
                </div>
                <p className="text-text-muted text-xs font-medium mb-2 tracking-wide">
                  {pizza.ingredients}
                </p>
                <p className="font-accent text-text-muted text-sm leading-relaxed">
                  {pizza.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
