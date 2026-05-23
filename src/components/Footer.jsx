import { MessageCircle, Instagram, Facebook, Music2, Mail, MapPin, Heart } from 'lucide-react'
import { LINKS, BRAND } from '../config'

const NAV_LINKS = [
  { href: '#inicio',       label: 'Inicio' },
  { href: '#finca',        label: 'La Finca' },
  { href: '#productos',    label: 'Productos' },
  { href: '#cafe-monchito',label: 'Café Monchito' },
  { href: '#galeria',      label: 'Galería' },
]

const SOCIAL_LINKS = [
  { href: LINKS.whatsapp,  icon: MessageCircle, label: 'WhatsApp' },
  { href: LINKS.instagram, icon: Instagram,     label: 'Instagram' },
  { href: LINKS.facebook,  icon: Facebook,      label: 'Facebook' },
  { href: LINKS.tiktok,    icon: Music2,        label: 'TikTok' },
  { href: LINKS.email,     icon: Mail,          label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0d1c09 0%, #172e0f 60%, #214316 100%)',
      }}
    >
      {/* Decoración */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cafetal-500/30 to-transparent" />

      <div className="max-w-2xl mx-auto px-5 py-14">

        {/* Logo / nombre */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-crema-50">
            {BRAND.nombre}
          </h2>
          <p className="font-serif italic text-cafetal-400 text-base mt-1">
            {BRAND.cafe}
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <MapPin size={13} className="text-cafetal-500" strokeWidth={1.5} />
            <span className="font-mono text-xs text-cafetal-500 tracking-wide">
              {BRAND.ubicacion}
            </span>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-10">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-sm text-cafetal-400 hover:text-crema-300 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Redes sociales */}
        <div className="flex justify-center gap-3 mb-10">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-cafetal-600/40 bg-cafetal-900/30
                         flex items-center justify-center text-cafetal-400
                         hover:border-crema-400/40 hover:text-crema-300 hover:bg-cafetal-800/40
                         transition-all duration-200"
            >
              <Icon size={17} strokeWidth={1.8} />
            </a>
          ))}
        </div>

        {/* Botón final WhatsApp */}
        <div className="text-center mb-10">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5
                       bg-[#25D366] text-white
                       font-sans font-semibold text-sm tracking-wide
                       rounded-full shadow-lg shadow-[#25D366]/20
                       hover:bg-[#1ebe5a]
                       active:scale-95 transition-all duration-200"
          >
            <MessageCircle size={17} strokeWidth={2.5} />
            Comprar Café Monchito
          </a>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-cafetal-700/30 pt-7">
          <p className="text-center font-sans text-xs text-cafetal-600 flex items-center justify-center gap-1.5 flex-wrap">
            <span>© {year} {BRAND.nombre}.</span>
            <span className="hidden sm:inline">·</span>
            <span>Todos los derechos reservados.</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart size={11} className="text-tierra-500" fill="currentColor" /> en Costa Rica
            </span>
          </p>
        </div>

      </div>
    </footer>
  )
}
