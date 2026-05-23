import { MessageCircle, CheckCircle2, Package } from 'lucide-react'
import { LINKS, COPY } from '../config'

export default function CafeMonchito() {
  const { cafe } = COPY

  return (
    <section id="cafe-monchito" className="py-20 px-5 overflow-hidden relative"
      style={{
        background: 'linear-gradient(150deg, #0d1c09 0%, #172e0f 50%, #214316 100%)',
      }}
    >
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-tierra-700/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-cafetal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-lg mx-auto relative z-10">

        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="tag bg-tierra-900/60 text-crema-300 border border-tierra-700/40 mb-4">
            Producto estrella
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-crema-50 mt-3 text-balance">
            {cafe.titulo}
          </h2>
          <p className="font-serif italic text-tierra-300 text-lg mt-2">
            {cafe.subtitulo}
          </p>
        </div>

        {/* Card principal */}
        <div
          className="rounded-3xl p-7 border border-cafetal-600/30 relative overflow-hidden mb-7"
          style={{ background: 'rgba(13, 28, 9, 0.6)', backdropFilter: 'blur(12px)' }}
        >
          {/* Emoji de café decorativo */}
          <div className="absolute top-4 right-5 text-5xl opacity-20 select-none">☕</div>

          <p className="font-sans text-cafetal-200 text-base leading-relaxed mb-6">
            {cafe.descripcion}
          </p>

          {/* Detalles del café */}
          <div className="grid grid-cols-1 gap-2 mb-6">
            {[
              { label: 'Origen',  valor: cafe.origen },
              { label: 'Tueste',  valor: cafe.tueste },
              { label: 'Variedad',valor: cafe.proceso },
            ].map(({ label, valor }) => (
              <div key={label} className="flex items-center gap-3 py-2.5 border-b border-cafetal-700/30 last:border-0">
                <CheckCircle2 size={15} className="text-crema-400 flex-shrink-0" strokeWidth={2} />
                <span className="font-mono text-xs text-cafetal-400 uppercase tracking-widest w-20 flex-shrink-0">{label}</span>
                <span className="font-sans text-crema-200 text-sm">{valor}</span>
              </div>
            ))}
          </div>

          {/* Presentaciones */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Package size={14} className="text-tierra-400" strokeWidth={2} />
              <span className="font-mono text-xs text-cafetal-400 uppercase tracking-widest">Presentaciones</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {cafe.presentaciones.map((p) => (
                <span
                  key={p}
                  className="px-4 py-2 rounded-full border border-tierra-600/40 bg-tierra-900/40 text-crema-200 font-sans text-sm font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full px-6 py-4
                       bg-[#25D366] text-white
                       font-sans font-semibold text-sm tracking-wide
                       rounded-2xl shadow-lg shadow-[#25D366]/20
                       hover:bg-[#1ebe5a] hover:shadow-xl
                       active:scale-95 transition-all duration-200"
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            {cafe.cta}
          </a>
        </div>

        {/* Sellos de calidad */}
        <div className="flex gap-3 justify-center flex-wrap">
          {['100% Costa Rica', 'Arábica de Altura', 'Sin Intermediarios'].map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-cafetal-300 border border-cafetal-600/40 bg-cafetal-900/30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-crema-400" />
              {s}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
