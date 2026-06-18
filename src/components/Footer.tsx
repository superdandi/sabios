import { MessageCircle, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-canvas-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src="/sabios/logo-icon.svg" alt="" className="h-8 w-auto" />
              <span className="font-heading text-xl font-bold text-brand-orange tracking-wider">SABIO</span>
            </div>
            <p className="text-text-muted text-sm mt-2 leading-relaxed">
              Pizza por pedazos y completos para retiro.
              <br />
              Talca, Región del Maule.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm text-text-primary mb-4 uppercase tracking-wider">Horarios</h3>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><Clock size={13} className="text-brand-orange" /> Lun: Cerrado</li>
              <li className="flex items-center gap-2"><Clock size={13} className="text-brand-orange" /> Mar–Jue: 12–15 / 19–22:30</li>
              <li className="flex items-center gap-2"><Clock size={13} className="text-brand-orange" /> Vie–Sáb: 12–15 / 19–23</li>
              <li className="flex items-center gap-2"><Clock size={13} className="text-brand-orange" /> Dom: 12–16 (solo pizza)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm text-text-primary mb-4 uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-2 text-text-muted text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-brand-orange mt-0.5 shrink-0" />
                21 Oriente s/n, Talca
              </li>
              <li>
                <a
                  href="https://wa.me/56982864145?text=Hola%20SABIOS%2C%20quiero%20hacer%20un%20pedido"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-whatsapp-green hover:brightness-110 transition-all"
                >
                  <MessageCircle size={13} />
                  Pedir por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-light">
          <p className="text-center text-text-muted/60 text-xs">
            &copy; {new Date().getFullYear()} SABIOS — Talca, Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
