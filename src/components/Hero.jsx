import { MessageCircle, ChevronDown } from 'lucide-react'
import { LINKS, BRAND, COPY } from '../config'

export default function Hero() {
  const lines = COPY.hero.titulo.split('\n')

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 pt-20 pb-16"
      style={{
        background: 'linear-gradient(160deg, #0d1c09 0%, #214316 40%, #3d7228 70%, #2d5a1e 100%)',
      }}
    >
      {/* ── Textura de grano ── */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Círculos decorativos ── */}
      <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full opacity-10 bg-cafetal-300 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full opacity-10 bg-tierra-400 blur-3xl pointer-events-none" />

      {/* ── Contenido ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">

        {/* Badge de origen */}
        <div
          className="opacity-0-start animate-fade-in delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cafetal-400/40 bg-cafetal-900/30 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-crema-400 animate-pulse" />
          <span className="text-crema-200 font-mono text-xs tracking-widest uppercase">
            Pittier · Coto Brus · Costa Rica
          </span>
        </div>

        {/* Título principal */}
        <h1 className="opacity-0-start animate-fade-up delay-200 font-serif text-5xl sm:text-6xl leading-[1.1] text-crema-50 mb-3 text-balance">
          {lines.map((line, i) => (
            <span key={i} className={i === 1 ? 'text-gold-gradient block' : 'block'}>
              {line}
            </span>
          ))}
        </h1>

        {/* Subtítulo */}
        <p className="opacity-0-start animate-fade-up delay-300 font-sans text-cafetal-200 text-base sm:text-lg leading-relaxed mb-10 max-w-sm text-balance">
          {COPY.hero.subtitulo}
        </p>

        {/* CTAs */}
        <div className="opacity-0-start animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4
                       bg-[#25D366] text-white
                       font-sans font-semibold text-sm tracking-wide
                       rounded-full shadow-lg shadow-[#25D366]/30
                       hover:bg-[#1ebe5a] hover:shadow-xl hover:shadow-[#25D366]/40
                       active:scale-95 transition-all duration-200"
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            {COPY.hero.cta1}
          </a>

          <a
            href="#finca"
            className="inline-flex items-center justify-center gap-2 px-7 py-4
                       border border-crema-200/40 text-crema-100
                       font-sans font-medium text-sm tracking-wide
                       rounded-full backdrop-blur-sm
                       hover:bg-crema-50/10 hover:border-crema-100/60
                       active:scale-95 transition-all duration-200"
          >
            {COPY.hero.cta2}
          </a>
        </div>

        {/* Datos rápidos */}
        <div className="opacity-0-start animate-fade-up delay-500 flex items-center gap-6 mt-12 pt-10 border-t border-cafetal-600/30 w-full justify-center">
          {[
            { valor: '100%', label: 'Arábica' },
            { valor: '3',    label: 'Productos' },
            { valor: 'CR',   label: 'Origen' },
          ].map(({ valor, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-serif text-2xl text-crema-300 font-semibold">{valor}</span>
              <span className="font-mono text-xs text-cafetal-400 tracking-widest uppercase mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Flecha de scroll ── */}
      <a
        href="#redes"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cafetal-400 hover:text-crema-300 transition-colors animate-float"
        aria-label="Ir a la siguiente sección"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
