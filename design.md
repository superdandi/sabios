# SABIOS — Pizzería Talca

## Brand

| Propiedad | Valor |
|---|---|
| Nombre | SABIOS |
| Tipo | Pizza por pedazos · Completos para retiro |
| Inspiración | ERUDITOS (Talca) |
| Fundador | Daniel Cobos |
| Ubicación | 21 Oriente s/n, Talca (sector nuevos departamentos) |
| Contacto | Pedidos por WhatsApp → mensaje directo al dueño |

## Paleta de Colores

| Token | Rol | Hex | RGB |
|---|---|---|---|
| `--color-bg` | Fondo principal | `#1c110d` | rgb(28,17,13) |
| `--color-bg-secondary` | Fondo secundario | `#2a1a14` | rgb(42,26,20) |
| `--color-accent` | Acento principal (naranjo) | `#e16932` | rgb(225,105,50) |
| `--color-accent-hover` | Acento hover | `#d4551e` | rgb(212,85,30) |
| `--color-text` | Texto principal | `#ffffff` | rgb(255,255,255) |
| `--color-text-muted` | Texto secundario | `#d4c5b8` | rgb(212,197,184) |
| `--color-card` | Glass card | `rgba(42,26,20,0.7)` | con backdrop-blur |
| `--color-border` | Bordes glass | `rgba(255,255,255,0.06)` | — |
| `--color-success` | Éxito/WhatsApp | `#25D366` | rgb(37,211,102) |

## Tipografía

| Rol | Fuente | Peso | Uso |
|---|---|---|---|
| Títulos grandes | Oswald | 500–700 | Hero, secciones headings |
| Cuerpo | Inter | 300–700 | Texto general, descripciones |
| Acentos | Dancing Script | 400–700 | Descripciones de pizza, toques decorativos |

## Horarios

| Día | Horario | Modalidad |
|---|---|---|
| Lunes | Cerrado | — |
| Martes–Jueves | 12:00–15:00 / 19:00–22:30 | Pizza por pedazos (12–15) · Completos (19–22:30) |
| Viernes–Sábado | 12:00–15:00 / 19:00–23:00 | Pizza por pedazos (12–15) · Completos (19–23) |
| Domingo | 12:00–16:00 | Solo pizza por pedazos |

## Logo

- Texto "SABIOS" en Oswald bold, color naranjo #e16932
- Subtítulo "PIZZERÍA" en Inter, blanco, tracking amplio
- Fondo transparente sobre fondo oscuro cálido

## Glassmorphism

```css
.glass-warm {
  background: rgba(42, 26, 20, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
}

.glass-card-warm {
  background: rgba(42, 26, 20, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
}
```

## Efectos

1. **Fondo granulado/oscuridad**: Textura tenue radial con gradiente cálido
2. **Borde glow naranjo**: Hover en cards de pizza con `box-shadow: 0 0 20px rgba(225,105,50,0.15)`
3. **Transiciones suaves**: `all 300ms ease-out` en cards y botones
4. **Scroll animations**: fade-up en secciones al hacer scroll (IntersectionObserver)

## Arquitectura

Landing one-page con secciones:

| Sección | Componente | Contenido |
|---|---|---|
| Hero | `Hero.tsx` | Logo SABIOS, tagline, CTA pedido |
| Carta | `Menu.tsx` | Grid 10 pizzas con nombre, ingredientes, precio |
| Nosotros | `About.tsx` | Tributo a ERUDITOS, historia |
| Galería | `Gallery.tsx` | Placeholder fotos |
| Contacto | `ContactSection.tsx` | Dirección, horarios, WhatsApp, mapa |

## Stack Tecnológico

| Tecnología | Versión |
|---|---|
| Next.js | 16 (SSG) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| shadcn/ui | — |
| lucide-react | — |
| GitHub Pages | Hosting |
| GitHub Actions | CI/CD |
