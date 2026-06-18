# SABIOS — Pizzería Talca

## Project

- **Repo**: `superdandi/sabios` → https://superdandi.github.io/sabios/
- **Stack**: Next.js 16 (output: export) · Tailwind CSS v4 · TypeScript · shadcn/ui · lucide-react
- **Hosting**: GitHub Pages + GitHub Actions (deploy on push to main)
- **BasePath**: `/sabios`

## Brand

- Pizza por pedazos · Completos para retiro
- Inspirado en ERUDITOS (@eruditos en Instagram)
- Talca, 21 Oriente s/n (misma dirección que VIZCOSO)

## Design

- **Palette**: bg #1c110d, accent #e16932, text white, muted #d4c5b8
- **Fonts**: Oswald (headings), Inter (body), Dancing Script (accent)
- **Glassmorphism**: bg rgba(42,26,20,0.7) + backdrop-blur(12px)
- **Effects**: glow hover on cards (box-shadow naranjo), fade-up scroll animations

## Build

```bash
npm run build    # exports static to ./out
npm run dev      # dev server
```

## Sections (one-page)

| Section | Component | File |
|---|---|---|
| Hero | `Hero` | `src/components/Hero.tsx` |
| Carta | `Menu` | `src/components/Menu.tsx` |
| Nosotros | `About` | `src/components/About.tsx` |
| Galería | `Gallery` | `src/components/Gallery.tsx` |
| Contacto | `ContactSection` | `src/components/ContactSection.tsx` |

## Menu

10 pizzas definidas en `src/data/menu.ts`. Para agregar/modificar una pizza, editar ese archivo.

## WhatsApp

Número oculto: 56982864145. Botones apuntan a:
`https://wa.me/56982864145?text=Hola%20SABIOS%2C%20quiero%20hacer%20un%20pedido`
