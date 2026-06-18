import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/56982864145?text=Hola%20SABIOS%2C%20quiero%20hacer%20un%20pedido"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp-green text-white shadow-lg shadow-whatsapp-shadow hover:scale-110 hover:shadow-xl transition-all duration-300 animate-fade-in"
      aria-label="Pedir por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
