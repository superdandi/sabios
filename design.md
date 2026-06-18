---
version: alpha
name: SABIOS
website: "https://superdandi.github.io/sabios"
description: >-
  A warm, dark-cocoa ordering surface for a Talca pizza-by-the-slice and completos takeaway concept, anchored on a near-black cocoa ink (#1c110d) that serves as the entire canvas background, with a single orange brand voltage (#e16932) reserved for the pizza-slice logomark, all headings, and the primary CTA fill. The brand trusts photographic food tiles and uppercase Oswald block lettering over typographic weight escalation, and every interactive surface carries a 12px glass-morphism radius rather than a pill — the warm-dark glass card is the system's universal container token.
seo:
  title: "SABIOS Design System — #1c110d cocoa ink, Oswald uppercase, 5 one-page components"
  metaDescription: "SABIOS design system as a DESIGN.md file. Cocoa ink #1c110d, Oswald headings, glass-warm cards, 10-pizza menu grid. For Next.js, Tailwind CSS v4, AI tools."
  highlights:
    - "Cocoa-ink monochrome chrome — #1c110d carries the entire page canvas, with secondary #2a1a14 as the glass-card fill and rgba(42,26,20,0.5) as the translucent container"
    - "Orange scarcity voltage — #e16932 appears only on the pizza-slice logomark, all headings (Oswald uppercase), primary CTAs, accent borders, and the WhatsApp success green #25D366 is the only external color"
    - "Photographic menu tiles — every menu entry is a glass-card-warm container with die-cut food photography placeholder above a 24px uppercase Oswald label"
    - "Glass-morphism geometry — every card carries backdrop-blur(16px) with a 16px radius, every CTA a 12px radius; no pill buttons anywhere"
    - "Three-typeface split discipline — Oswald uppercase for headings and brand text, Inter for body and descriptions, Dancing Script for pizza description accents — never blended inside the same surface"
  tags:
    - "Food & Delivery"
  lastUpdated: "2026-06-18"
  author:
    name: "Daniel Cobos"
    url: "https://superdandi.github.io/infocob"
  opening: |
    SABIOS's ordering surface reads like a warm-lit pizzeria counter on a Talca evening. The dominant chrome color is not black and not gray — it is a deep cocoa ink (`#1c110d`) that saturates the entire page background. That single token does the work most retail systems split between a canvas, a footer, and a surface color. Orange (`#e16932`) shows up on the pizza-slice logomark, every Oswald heading, the primary CTA fill, accent borders and hover glows — approximately 12 token occurrences across the captured page. Where most fast-casual brands ship a flat tomato red or a leaf green as their voltage, SABIOS reserves orange for the moments the photograph and the glass card cannot carry on their own: the brand mark, the headline hierarchy, and the call to order.

    This page packages SABIOS's one-page marketing surface into one DESIGN.md file built on the Google Labs spec. Inside: 6 color tokens grouped into cocoa-ink chrome (background, secondary, card), text-safe neutrals (text, muted, border), the single orange brand voltage, and a WhatsApp success green. 11 typography tokens run on an Oswald uppercase / Inter body / Dancing Script accent split — display sits at 48px in weight 600 uppercase rather than the 700+ weight that fintech brands lean on. The spec also captures 12px and 16px corner radii, a 6-step spacing scale from 8px to 40px anchored at 16px and 20px, and 7 components — the glass-warm card, the orange filled CTA, the pizza menu tile, the WhatsApp float, the contact card, the hero section, and the gallery placeholder.

    Feed the file to Claude, Cursor, or GitHub Copilot and the agent will reproduce SABIOS's restraint — die-cut food photography on warm-dark glass cards, orange-branded Oswald uppercase headlines, WhatsApp-success-green reserved for the order float — rather than a generic pizzeria theme. Or read the file as a discipline study: the system's strength is that almost every container reuses the same glass-warm backdrop plus white text plus orange accent vocabulary, which is why SABIOS never needs a secondary accent to ship a new menu category.
colors:
  canvas: "#1c110d"
  canvas-secondary: "#2a1a14"
  card-fill: "rgba(42, 26, 20, 0.5)"
  glass-fill: "rgba(42, 26, 20, 0.7)"
  border-light: "rgba(255, 255, 255, 0.06)"
  border-glass: "rgba(255, 255, 255, 0.05)"
  brand-orange: "#e16932"
  brand-orange-hover: "#d4551e"
  brand-orange-glow: "rgba(225, 105, 50, 0.15)"
  text-primary: "#ffffff"
  text-muted: "#d4c5b8"
  text-muted-soft: "rgba(212, 197, 184, 0.4)"
  whatsapp-green: "#25D366"
  whatsapp-shadow: "rgba(37, 211, 102, 0.25)"

typography:
  display-hero:
    fontFamily: "\"Oswald\", system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.15em"
  display-lg:
    fontFamily: "\"Oswald\", system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.05em"
  display-md:
    fontFamily: "\"Oswald\", system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.04em"
  heading-lg:
    fontFamily: "\"Oswald\", system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.03em"
  heading-md:
    fontFamily: "\"Oswald\", system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.02em"
  body-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  accent:
    fontFamily: "\"Dancing Script\", cursive"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button-label:
    fontFamily: "\"Oswald\", system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
  button-label-lg:
    fontFamily: "\"Oswald\", system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
  caption-xs:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.02em"

rounded:
  sm: "12px"
  md: "16px"
  full: "9999px"

blur:
  card: "16px"
  nav: "12px"

spacing:
  xxs: "8px"
  xs: "12px"
  sm: "16px"
  md: "20px"
  lg: "24px"
  xl: "32px"
  xxl: "40px"

components:
  glass-card:
    backgroundColor: "{colors.card-fill}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    backdropFilter: "{blur.card}"
    border: "1px solid {colors.border-glass}"
  button-primary:
    backgroundColor: "{colors.brand-orange}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-label}"
    rounded: "{rounded.sm}"
    padding: "12px 32px"
    height: "48px"
    border: "0"
  button-primary-lg:
    backgroundColor: "{colors.brand-orange}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-label-lg}"
    rounded: "{rounded.sm}"
    padding: "16px 40px"
    height: "56px"
    border: "0"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    typography: "{typography.button-label}"
    rounded: "{rounded.sm}"
    padding: "12px 32px"
    height: "48px"
    border: "1px solid rgba(255,255,255,0.1)"
  whatsapp-float:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    width: "56px"
    height: "56px"
    border: "0"
  pizza-menu-card:
    backgroundColor: "{colors.glass-fill}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.border-glass}"
  contact-card:
    backgroundColor: "{colors.glass-fill}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.border-glass}"
  nav-sticky-bar:
    backgroundColor: "{colors.glass-fill}"
    textColor: "{colors.text-muted}"
    typography: "{typography.body-sm}"
    rounded: "0px"
    padding: "0 16px"
    height: "64px"
    border: "0 0 1px 0 {colors.border-light}"
  footer-section:
    backgroundColor: "{colors.canvas-secondary}"
    textColor: "{colors.text-muted}"
    typography: "{typography.body-sm}"
    rounded: "0px"
    padding: "{spacing.xl} 0"
    border: "1px solid {colors.border-light}"
  hero-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-primary}"
    typography: "{typography.display-hero}"
    rounded: "0px"
    minHeight: "90vh"
    border: "0"
  gallery-placeholder:
    backgroundColor: "{colors.glass-fill}"
    textColor: "{colors.text-muted-soft}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.border-glass}"
---

## Overview

SABIOS's ordering surface is a warm-dark glass-and-orange catalog rendered in cocoa ink on glass — a system where one canvas color (`{colors.canvas}` — #1c110d) saturates the full background, and orange appears only where the brand decides to call action. There is no separate heading color, no separate canvas gray, no secondary surface tone — cocoa ink is the entire environment.

**Cocoa-ink as ambient chrome**: where most pizzerias ship a flat white or a red-and-green canvas, SABIOS ships one near-black warm brown as the full-page backdrop. Orange (`{colors.brand-orange}` — #e16932) appears on the pizza-slice logomark (SVG), every Oswald heading in the hero and section titles, the primary CTA fill, and the accent border hover glow — approximately 12 occurrences. Unlike the convention of a pizzeria site leading with a fully saturated brand-color hero band, SABIOS's hero is contrast-driven: the orange logomark at center, Oswald uppercase title in orange, and white text on the dark warm canvas. WhatsApp green (`{colors.whatsapp-green}` — #25D366) is the single external color, scoped to the fixed-position order float in the bottom-right corner.

The typographic discipline carries the rest of the voice. Oswald covers every uppercase heading and brand text across the page (64/700 hero, 48/600 section titles, 24/500 menu names), while Inter carries every mixed-case description, ingredient list, and footer link. Dancing Script appears only as an accent voice on pizza ingredient descriptions and the hero tagline — a cursive warmth that signals artisanal quality. The three typefaces never blend inside the same surface. Cards are universally glass-morphism at 16px radius with backdrop-blur(16px); CTAs carry a 12px radius. The page rhythm is a 24px constant — gap between menu cards, padding inside the glass section, vertical breath between schedule rows.

**Key Characteristics:**
- Single cocoa-ink canvas token (`{colors.canvas}` — #1c110d) saturates the full page background, with secondary `{colors.canvas-secondary}` (#2a1a14) as the glass-card base in rgba overlay form.
- Orange brand voltage (`{colors.brand-orange}` — #e16932) reserved for the pizza-slice logomark, all headings, and primary CTAs — approximately 12 occurrences across the page.
- WhatsApp green (`{colors.whatsapp-green}` — #25D366) scoped exclusively to the floating order button and footer link — the single external brand.
- Three-typeface split: Oswald uppercase for headings and brand text, Inter for descriptions and body, Dancing Script for pizza accent lines — never blended inside a single surface.
- Glass-morphism geometry: every card carries a 16px radius (`{rounded.md}`) with `backdrop-filter: blur(16px)`; CTAs carry 12px (`{rounded.sm}`); no pill buttons except the WhatsApp float.
- 24px universal rhythm constant — the most frequent spacing value, used as card gap, section padding, and glass-card inner padding.
- Photographic die-cut menu tiles inside glass-warm cards — every menu entry is a food placeholder card with Oswald 24/500 uppercase label and Dancing Script ingredient line.
- Orange hover glow: pizza menu cards get `{colors.brand-orange-glow}` — `0 0 20px rgba(225,105,50,0.15)` — on hover, the single interactive depth signal.
- Cocoa-ink canvas as a fixed `#1c110d` backdrop with radial orange gradient overlays (`ellipse_at_center / rgba(225,105,50,0.08)`) at hero and section anchor points.
- Footer link tokens run Inter 14/400 — the system's smallest text tier, used for schedule rows and address lines.

## Colors

### Cocoa-Ink Chrome (Structural)

- **Canvas** (`{colors.canvas}` — #1c110d) — The full-page background. Every section, every gap between components, every glass-card's underlying backdrop resolves to this one near-black warm brown. There is no white canvas on the captured page — only the cocoa-ink envelope.
- **Canvas Secondary** (`{colors.canvas-secondary}` — #2a1a14) — Lighter warm-brown used as the footer background and the glass-card fill base. Adds a single step of depth behind the glass-frost layer without introducing a new hue.
- **Glass Fill** (`{colors.glass-fill}` — rgba(42,26,20,0.7)) — The translucent card background for the sticky nav and pizza-menu cards. 70% opacity against canvas creates the frosted-warm effect.
- **Card Fill** (`{colors.card-fill}` — rgba(42,26,20,0.5)) — The lighter translucent background for section-level glass cards (about and contact panels). 50% opacity for more transparency.
- **Border Light** (`{colors.border-light}` — rgba(255,255,255,0.06)) — The hairline border for glass cards. Nearly invisible alone, but produces the characteristic glass-edge gleam when layered over the warm-dark fill.
- **Border Glass** (`{colors.border-glass}` — rgba(255,255,255,0.05)) — Softer border for section glass cards with higher transparency.

### Surface

- **Text Primary** (`{colors.text-primary}` — #ffffff) — All headings, body paragraphs, button labels, and footer headings. White on cocoa-ink is the entire content contrast model — there are no brown-on-brown text moments.
- **Text Muted** (`{colors.text-muted}` — #d4c5b8) — Secondary text for ingredient lists, schedule rows, footer links, and placeholder copy. A warm beige that reads as a natural tint of the canvas rather than a neutral gray.
- **Text Muted Soft** (`{colors.text-muted-soft}` — rgba(212,197,184,0.4)) — Gallery placeholder text and decorative label numbering. The system's lowest-contrast token, used only for non-interactive filler.

### Brand Voltage (Scarcity)

- **Brand Orange** (`{colors.brand-orange}` — #e16932) — The system's single chromatic voltage: pizza-slice logomark fill, all Oswald uppercase headings, primary CTA background, accent underline, and hover glow. Approximately 12 token occurrences. Every orange moment on the page is either the brand mark asserting identity, a heading establishing hierarchy, or a CTA calling action — never decorative.
- **Brand Orange Hover** (`{colors.brand-orange-hover}` — #d4551e) — The darker hover stop for the primary CTA. A single-step darkening (`brightness(1.1)` in CSS) rather than a separate hue.
- **Brand Orange Glow** (`{colors.brand-orange-glow}` — rgba(225,105,50,0.15)) — The pizza-card hover shadow. `0 0 20px` at 15% opacity creates a warm corona around the card edge without staining the content.

### WhatsApp Ceremony

- **WhatsApp Green** (`{colors.whatsapp-green}` — #25D366) — The fixed-position order float in the bottom-right corner and the footer contact link. Appears twice on the page. The single external color admitted into the system — every other chromatic moment is either cocoa-ink chrome or orange voltage.
- **WhatsApp Shadow** (`{colors.whatsapp-shadow}` — rgba(37,211,102,0.25)) — The float button's outer shadow. Low-alpha green glow that signals the button is interactive without competing with the orange CTAs.

## Typography

### Font Family

The system runs a three-typeface split. **Oswald** (with `system-ui, sans-serif` fallback) covers every uppercase heading, brand text, and button label — never in mixed case. **Inter** (with `system-ui, sans-serif` fallback) covers everything mixed-case: body paragraphs, ingredient lists, footer links, schedule rows. **Dancing Script** (with `cursive` fallback) covers only pizza-description accent lines and the hero tagline — the artisan voice.

All three fonts are available on Google Fonts. Oswald and Inter substitute one-for-one. Dancing Script is the only cursive choice — substituting with Caveat or Pacifico is possible but changes the warmth signal.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-hero}` | 64px | 700 | 1.1 | Hero `SABIOS` brand heading, uppercase Oswald, tracking 0.15em |
| `{typography.display-lg}` | 48px | 600 | 1.15 | Section titles (NUESTRA CARTA, CONOCE SABIOS), uppercase Oswald |
| `{typography.display-md}` | 36px | 600 | 1.2 | Subsection headings and modal titles, uppercase Oswald |
| `{typography.heading-lg}` | 28px | 600 | 1.2 | Contact-section subheadings, uppercase Oswald |
| `{typography.heading-md}` | 24px | 500 | 1.2 | Pizza menu card names and second-tier labels, uppercase Oswald |
| `{typography.body-lg}` | 18px | 400 | 1.6 | Hero tagline and section body paragraphs, Inter |
| `{typography.body-md}` | 16px | 400 | 1.5 | Default body text, ingredient lines, schedule items, Inter |
| `{typography.body-strong}` | 16px | 600 | 1.5 | Emphasis inside paragraphs and value props, Inter |
| `{typography.body-sm}` | 14px | 400 | 1.5 | Footer links, contact details, metadata, Inter |
| `{typography.accent}` | 20px | 500 | 1.4 | Pizza ingredient accent lines, hero tagline (`Hecho en Talca`), Dancing Script |
| `{typography.button-label}` | 16px | 600 | 1 | All CTA labels except hero — Oswald uppercase, tracking 0.08em |
| `{typography.button-label-lg}` | 20px | 600 | 1 | Hero CTA labels — Oswald uppercase, tracking 0.08em |
| `{typography.caption-xs}` | 12px | 500 | 1.3 | Gallery placeholder text and decorative copy, Inter |

### Principles

- **Weight does not escalate beyond 700.** Oswald display sits at 600 on section titles and 700 only on the hero `SABIOS` wordmark — the size-only jump from 24px to 64px carries the hierarchy. Inter body never exceeds 600 (body-strong only).
- **Uppercase carries identity, not weight.** Every Oswald size is uppercase by `text-transform`. No lowercase Oswald appears on the captured page. The block-lettering pattern matches the warm, assertive pizzeria counter aesthetic.
- **Mixed case is Inter-only.** Body, descriptions, ingredient lists, footer links, and schedule rows all run Inter (or its weight variants). Oswald never appears in mixed case.
- **Dancing Script is the accent voice — used sparingly.** The cursive face appears only on pizza ingredient descriptions and the hero tagline. Using it for body copy or headings collapses the artisanal signal.
- **Line-height runs 1.1–1.2 on display and 1.5–1.6 on body.** Inter paragraphs sit at `lineHeight: 1.6` for warm-legibility on the dark canvas, while Oswald uppercase headings tighten to 1.1–1.2.

## Layout

### Spacing System

Pixel-based scale with a single rhythm constant at 24px:

- **Tokens:** `{spacing.xxs}` 8px · `{spacing.xs}` 12px · `{spacing.sm}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 40px.
- **Universal rhythm constant:** 24px (`{spacing.lg}`) — the most frequent spacing value, used as pizza-menu card gap, glass-card inner padding, about-section step card padding, and section vertical breath.
- **Secondary anchor:** 16px (`{spacing.sm}`) — used as outer gutter on mobile and the footer column gap.

### Grid & Container

- Pizza menu grid: 2-up on desktop (`lg:grid-cols-2`), dropping to 1-up on mobile, with 24px gap between cards. The 2-up layout gives each pizza card enough horizontal space for the ingredients + Oswald name without crowding.
- Hero section: full-bleed cocoa-ink canvas, centered content stack with 90vh min-height. The orange radial gradient overlay (`ellipse_at_center, rgba(225,105,50,0.08)`) adds ambient warmth without introducing a second canvas color.
- About section: 2-column grid on desktop (text left, values card right), 1-column on mobile, with 48px gap.
- Gallery grid: 3-up on desktop (`lg:grid-cols-3`), 2-up on mobile, 16px gap. Square aspect-ratio placeholders.
- Contact section: 2-column grid on desktop, 1-column on mobile, 32px gap.
- Footer: 3-column link grid with 24px column gap.
- Nav: full-bleed sticky glass-warm bar, 64px tall, centered container with left logo + right links.

### Border Radius Scale

- `{rounded.sm}` (12px): All CTAs (primary, outline, contact card buttons), the nav glass bar, the hero tagline container — the universal interactive radius.
- `{rounded.md}` (16px): Pizza-menu cards, glass-section cards, about values card, gallery placeholders, footer border radius — the universal container radius. Every non-interactive surface uses 16px.
- `{rounded.full}` (9999px): WhatsApp float button only — the single pill on the page. Its circular shape differentiates the order float from all other CTAs.

### Whitespace Philosophy

Whitespace is comfortable — `8px`, `16px`, `20px`, and `24px` carry roughly two-thirds of the captured spacing values. The system trusts the warm-dark glass cards to carry the visual weight rather than generous padding between every element. Sections are separated by 96px vertical padding (py-24), giving the one-page scroll enough room to breathe between the five section anchors. Containers sit centered in a max-w-6xl (1152px) wrapper with 16px horizontal gutters on mobile, scaling to 32px on desktop.

## Elevation

| Level | Treatment | Use |
|---|---|---|
| Glass card | `backdrop-filter: blur(16px)` + 1px rgba(255,255,255,0.05) border on rgba(42,26,20,0.5) fill | Pizza-menu cards, about section, contact cards |
| Nav bar | `backdrop-filter: blur(12px)` + 1px rgba(255,255,255,0.06) border on rgba(42,26,20,0.7) fill | Sticky header with higher opacity for legibility over scroll |
| Glass section | `backdrop-filter: blur(16px)` + rgba(42,26,20,0.5) fill | Section-level decorative glass cards |
| Radial glow | `radial-gradient(ellipse_at_center, rgba(225,105,50,0.08), transparent 70%)` | Ambient warmth overlay behind hero and section headings |
| Orange hover glow | `box-shadow: 0 0 20px rgba(225,105,50,0.15)` | Pizza-card hover state — the only interactive depth signal |
| WhatsApp float | `box-shadow: 0 4px 12px rgba(37,211,102,0.25)` + `hover:scale-110` | Fixed float with green-tinted shadow and lift animation |

**Shadow philosophy:** Warm-glow to absent. Glass cards do not carry box-shadow — the frosted effect provides depth through blur and the translucent fill, not the shadow stack. The only shadows on the page are the orange hover corona on menu cards (interactive signal) and the WhatsApp float's green-tinted depth. There are no drop shadows on buttons, no inner shadows on inputs, no layered ambient stacks. **Shadow-as-signal**: the brand reads the glass blur as the depth, the orange glow as the interaction, and the green shadow as the action.

## Shapes

The radius scale is three-tiered. `{rounded.sm}` (12px) carries every CTA; `{rounded.md}` (16px) carries every glass card, gallery tile, and section panel; `{rounded.full}` (circle) carries only the WhatsApp float. There are no pills on CTAs, no rounded-rectangle surfaces below 12px, and no sharp-0px surfaces except the nav bottom border and the hero full-bleed edge. The glass-morphism geometry matches the warm, frosted-window aesthetic of a candlelit pizzeria interior.

## Components

### Buttons

**`button-primary`** — Orange `{colors.brand-orange}` fill, cocoa-ink `{colors.canvas}` text, 12px radius, `12px 32px` padding, 48px tall, 16/600 Oswald uppercase label with 0.08em tracking. The universal CTA on the page (`VER CARTA`, `PEDIR POR WHATSAPP` when not using the float). No border, no shadow — the orange fill against cocoa-ink canvas is the entire signal.

**`button-primary-lg`** — Same orange fill and uppercase label, larger at `16px 40px` padding and 56px tall. Used on the hero section for the primary action (`VER CARTA`), where it needs visual weight to anchor the centered composition beside the outline secondary CTA.

**`button-outline`** — Transparent fill with white text and 1px white/10 border at 12px radius. Used for secondary CTAs paired beside a filled primary (`PEDIR POR WHATSAPP` alongside `VER CARTA` in the hero). The low-opacity border (`rgba(255,255,255,0.1)`) keeps the outline from competing with the orange primary.

### Glass Cards & Menu

**`glass-card`** — `{colors.card-fill}` background (rgba(42,26,20,0.5)), 16px radius, 24px padding, `backdrop-filter: blur(16px)`, 1px `{colors.border-glass}`. The universal section container. Used for the about values card and decorative panels. Body text runs Inter 18/400.

**`pizza-menu-card`** — `{colors.glass-fill}` background (rgba(42,26,20,0.7)), 16px radius, 24px padding, `backdrop-filter: blur(16px)`, 1px `{colors.border-glass}`. Each card carries: Oswald 24/500 uppercase pizza name (left), orange price tag (right), Inter 14/400 ingredient line below the name, Dancing Script 16/500 ingredient description as the accent voice. Hover state adds `box-shadow: 0 0 20px {colors.brand-orange-glow}` for the orange corona effect. The warmer 70% fill distinguishes menu cards from section glass cards.

**`contact-card`** — `{colors.glass-fill}` background, 16px radius, 32px padding. Used for the two-column contact grid (address+hours card, WhatsApp CTA card). Each section inside uses a `flex items-start gap-4` layout with an orange-icon + text column.

### Navigation & Header

**`nav-sticky-bar`** — `{colors.glass-fill}` background, 64px tall, full-width sticky at top of viewport. Left: pizza-slice icon (`logo-icon.svg`, 32px auto) + `SABIO` Oswald 18/600 uppercase text. Right: inline navigation links (Inter 14/400 in `{colors.text-muted}`) + orange "PEDIR" CTA button. Bottom: 1px `{colors.border-light}` hairline. Mobile shows hamburger menu icon.

**`hero-section`** — Full-bleed `{colors.canvas}` with `min-height: 90vh`. Background carries a `radial-gradient(ellipse_at_center, rgba(225,105,50,0.08), transparent 70%)` for ambient warmth. Content stack centered: pizza-slice logomark (h-48 md:h-60), taglines (Inter 18/400, Dancing Script 20/500 accent), dual CTAs (primary-orange + outline-white).

### WhatsApp Float

**`whatsapp-float`** — Fixed-position `{colors.whatsapp-green}` circle, 56x56px, bottom-right corner (`bottom-6 right-6`). White MessageCircle icon (lucide-react, 28px). Carries `{colors.whatsapp-shadow}` and `hover:scale-110` lift animation. The single pill on the page — its circular geometry differentiates it from all orange CTAs. Opens WhatsApp direct message to `+56982864145`.

### Footer

**`footer-section`** — `{colors.canvas-secondary}` background, top border 1px `{colors.border-light}`. 3-column grid on desktop (brand column, schedule column, contact column), stacked on mobile. Each column heading in Oswald 14/600 uppercase (Inter fallback). Schedule rows use Inter 14/400 with Clock icon in orange. Contact rows use Inter 14/400 with MapPin icon in orange and MessageCircle link in WhatsApp green.

### Gallery

**`gallery-placeholder`** — `{colors.glass-fill}` background, 16px radius, 1px `{colors.border-glass}`, square aspect-ratio. Inner content: photo icon (lucide-react image icon, 32px, `{colors.text-muted-soft}`) + "Foto próximamente" caption (Inter 12/500, `{colors.text-muted-soft}`). Hover state adds the orange glow overlay at low opacity.

## Do's and Don'ts

**Do** anchor every section background on cocoa ink `#1c110d`. The system trusts one canvas color to do the job of dark-mode, background, and footer base — splitting the page into a lighter surface in the middle will read as a separate brand, not as polish.

**Do** use 16px radius on every glass card and 12px on every CTA. The radius split is deliberate — containers are softer (16px), interactive elements slightly sharper (12px). Swapping them or unifying to a single value flattens the geometry language.

**Do** keep orange `#e16932` in its three roles: logomark, headings, primary CTAs. Using orange as a background fill for section panels, a link underline color, or a decorative border on non-interactive cards spreads the voltage across surfaces where the glass card and the white text already do the work.

**Do** keep Dancing Script scoped to pizza descriptions and the hero tagline. Using the cursive face for body copy, button labels, or section headings collapses its artisanal signal and makes the page read as decorative rather than crafted.

**Don't** use WhatsApp green `#25D366` outside the floating order button and the footer contact link. It appears twice on the page. Stretching it into a primary button color or a heading accent makes the order float indistinguishable and introduces a second brand voltage the system does not need.

**Don't** pair Oswald with mixed-case text. Oswald on the captured page is always uppercase via `text-transform`; mixing it with Inter's lowercase body inside the same paragraph breaks the three-typeface split. Body paragraphs run Inter only.

**Don't** soften the glass-border `rgba(255,255,255,0.06)` into a solid gray or a higher-opacity white. The near-invisible border is what produces the glass gleam on the warm-dark fill — making it visible turns the effect into frosted plastic instead of frosted glass.

**Don't** add drop shadows to glass cards or buttons. The system carries depth through `backdrop-filter` blur and the translucent fill, not a shadow stack. The only shadows on the page are the orange hover glow and the WhatsApp float's green depth.

**Don't** use orange hover glow on non-interactive elements. The `0 0 20px rgba(225,105,50,0.15)` corona is a clickability signal for pizza-menu cards — applying it to static glass cards or gallery placeholders introduces false affordance.

**Don't** scale the WhatsApp float above 56px or use a square variant. The circular geometry at 56x56px is what differentiates it from the boxy orange CTAs — making it larger or rectangular collapses the distinction between order-by-WhatsApp and order-by-web.

## Known Gaps

- **Dancing Script is a Google Font** — available directly. No proprietary licensing concerns, unlike Trade Gothic LT Bold in comparable systems.
- **No CSS custom properties on `:root`** — the captured page uses Tailwind CSS v4 `@theme inline` block, so all tokens are resolved at compile time rather than as runtime CSS variables. The spec uses Tailwind's runtime values.
- **Hover and active states** — documented for pizza-menu cards (orange glow) and primary buttons (brightness: 1.1), but full `:active` / `:focus-visible` ring states are not captured in the spec.
- **Mobile breakpoints** — the page uses Tailwind's `sm` (640px), `md` (768px), and `lg` (1024px) breakpoints. Mobile-specific component variants (hamburger nav, 1-column pizza grid, single-column footer) are implemented but the spec captures the desktop-first token system.
- **Dark mode** — not applicable. The system is inherently dark (cocoa-ink canvas). A light mode would require a full color token replacement across all 6 chrome tokens.
- **Cart / checkout flow** — not captured. SABIOS's order surface is WhatsApp-direct, not a web cart. The captured page is the marketing one-pager only; the ordering UI lives inside the WhatsApp chat thread.
- **Food photography** — the gallery section uses placeholder tiles. Real photography will replace the SVG photo icon + "Foto próximamente" caption once production photos are available.
- **Menu pricing** — current prices are placeholders ($6.500–$8.500). The system expects price updates via the `src/data/menu.ts` data file without component changes.
