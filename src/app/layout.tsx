import type { Metadata } from "next";
import { Oswald, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SABIOS — Pizzería Talca",
  description:
    "Pizza por pedazos y completos para retiro en Talca. Masa artesanal, ingredientes frescos. 21 Oriente s/n.",
  icons: { icon: "/favicon.ico" },
  other: { "theme-color": "#1c110d" },
  openGraph: {
    title: "SABIOS — Pizzería Talca",
    description: "Pizza por pedazos y completos en Talca. Inspirado en ERUDITOS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={cn(
        oswald.variable,
        inter.variable,
        dancing.variable,
        "scroll-smooth"
      )}
    >
      <body className="antialiased bg-bg text-text min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
