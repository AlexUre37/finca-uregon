import { MessageCircle, Instagram, Facebook, Music2, Mail, ExternalLink } from 'lucide-react'
import { LINKS } from '../config'

// ─── CONFIGURA TUS REDES AQUÍ ─────────────────────────────────────
// Cambia href, label y color por los de tu marca.
const SOCIAL_BUTTONS = [
  {
    id:    'whatsapp',
    href:  LINKS.whatsapp,
    label: 'Escríbenos por WhatsApp',
    sub:   'Consultas y pedidos directos',
    icon:  MessageCircle,
    bg:    'bg-[#e8faf0]',
    hover: 'hover:bg-[#d1f5e1]',
    text:  'text-[#1a7a40]',
    dot:   'bg-[#25D366]',
    border:'border-[#25D366]/20',
  },
  {
    id:    'instagram',
    href:  LINKS.instagram,
    label: 'Síguenos en Instagram',
    sub:   '@fincauregon',
    icon:  Instagram,
    bg:    'bg-[#fdf0f8]',
    hover: 'hover:bg-[#fae0f3]',
    text:  'text-[#8b1a6b]',
    dot:   'bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743]',
    border:'border-pink-200/40',
  },
  {
    id:    'facebook',
    href:  LINKS.facebook,
    label: 'Visítanos en Facebook',
    sub:   'Finca UreGon',
    icon:  Facebook,
    bg:    'bg-[#eef3fd]',
    hover: 'hover:bg-[#dce8fb]',
    text:  'text-[#1a3a8b]',
    dot:   'bg-[#1877F2]',
    border:'border-blue-200/40',
  },
  {
    id:    'tiktok',
    href:  LINKS.tiktok,
    label: 'Ver videos en TikTok',
    sub:   '@fincauregon',
    icon:  Music2,
    bg:    'bg-[#f0f0f0]',
    hover: 'hover:bg-[#e0e0e0]',
    text:  'text-[#111]',
    dot:   'bg-[#010101]',
    border:'border-gray-200/60',
  },
  {
    id:    'email',
    href:  LINKS.email,
    label: 'Escríbenos un correo',
    sub:   'contacto@fincauregon.cr',
    icon:  Mail,
    bg:    'bg-tierra-50',
    hover: 'hover:bg-tierra-100',
    text:  'text-tierra-700',
    dot:   'bg-tierra-500',
    border:'border-tierra-200/40',
  },
]

export default function RedesSociales() {
  return (
    <section id="redes" className="py-16 px-5 bg-crema-50">
      <div className="max-w-md mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="tag bg-cafetal-100 text-cafetal-700 mb-4">Encuéntranos</span>
          <h2 className="font-serif text-3xl text-cafetal-900 mt-2">
            Estamos en todas partes
          </h2>
          <p className="font-sans text-cafetal-600 text-sm mt-2">
            Escríbenos, síguenos o contáctanos por donde prefieras.
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-3">
          {SOCIAL_BUTTONS.map(({ id, href, label, sub, icon: Icon, bg, hover, text, dot, border }) => (
            <a
              key={id}
              href={href}
              target={id !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`btn-social ${bg} ${hover} ${text} border ${border} group`}
            >
              {/* Dot de color de red */}
              <span className={`w-2.5 h-2.5 rounded-full ${dot} flex-shrink-0`} />

              {/* Icono */}
              <Icon size={20} strokeWidth={1.8} className="flex-shrink-0" />

              {/* Texto */}
              <span className="flex flex-col flex-1 min-w-0">
                <span className="font-medium leading-tight truncate">{label}</span>
                <span className="text-xs opacity-60 truncate">{sub}</span>
              </span>

              {/* Flecha */}
              <ExternalLink
                size={14}
                className="flex-shrink-0 opacity-0 group-hover:opacity-40 transition-opacity"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
