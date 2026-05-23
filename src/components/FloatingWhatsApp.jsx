import { MessageCircle } from 'lucide-react'
import { LINKS } from '../config'

export default function FloatingWhatsApp() {
  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-5 z-50
                 flex items-center gap-2.5
                 bg-[#25D366] text-white
                 pl-4 pr-5 py-3 rounded-full
                 shadow-xl shadow-[#25D366]/30
                 hover:bg-[#1ebe5a] hover:shadow-2xl hover:shadow-[#25D366]/40
                 hover:scale-105 active:scale-95
                 transition-all duration-200
                 sm:hidden"  /* Visible en móvil siempre; en desktop solo si quieres, quita sm:hidden */
    >
      <MessageCircle size={20} strokeWidth={2.5} />
      <span className="font-sans font-semibold text-sm">WhatsApp</span>
    </a>
  )
}
