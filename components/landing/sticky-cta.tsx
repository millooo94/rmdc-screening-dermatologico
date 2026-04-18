"use client";

import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "0950904525";
const WHATSAPP_NUMBER = "390950904525"; // Replace with actual WhatsApp number

export function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-card/95 backdrop-blur-sm border-t border-border px-4 py-3 safe-area-inset-bottom">
        <div className="flex gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ciao, vorrei prenotare uno screening dermatologico.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 rounded-xl transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Chiama</span>
          </a>
        </div>
      </div>
    </div>
  );
}
