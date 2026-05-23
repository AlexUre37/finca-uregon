import { Camera } from 'lucide-react'
import { GALERIA } from '../config'

// Layout de galería tipo masonry con grid CSS
// Tamaños: los items 0 y 3 son grandes (2 rows), el resto normales

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 px-5 bg-crema-50">
      <div className="max-w-2xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="tag bg-tierra-100 text-tierra-700 mb-4">Galería</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-cafetal-900 mt-3">
            Desde la finca
          </h2>
          <p className="font-sans text-cafetal-500 text-sm mt-2">
            Historias reales cultivadas en las montañas de Pittier.
          </p>
        </div>

        {/* Grid galería */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
          }}
        >
          {GALERIA.map((item, idx) => {
            // Los ítems 0 y 3 ocupan el doble de alto
            const isTall = idx === 0 || idx === 3
            return (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden relative group"
                style={{
                  gridRow: isTall ? 'span 2' : 'span 1',
                  minHeight: isTall ? '240px' : '110px',
                }}
              >
                {item.src ? (
                  /* ── Imagen real ─────────────────────────────────── */
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  /* ── Placeholder ─────────────────────────────────── */
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-2 bg-cafetal-100 border-2 border-dashed border-cafetal-200 group-hover:border-cafetal-400 transition-colors cursor-pointer"
                    title={`Reemplaza esta imagen: GALERIA[${idx}].src en config.js`}
                  >
                    <span className="text-3xl sm:text-4xl" role="img" aria-label={item.alt}>
                      {item.emoji}
                    </span>
                    <span className="font-mono text-[9px] text-cafetal-400 text-center px-1 leading-tight hidden sm:block">
                      {item.alt}
                    </span>
                    <Camera
                      size={12}
                      className="text-cafetal-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}

                {/* Caption en hover (solo imágenes reales) */}
                {item.src && (
                  <div className="absolute inset-0 bg-cafetal-900/0 group-hover:bg-cafetal-900/40 transition-all flex items-end">
                    <span className="font-sans text-xs text-white p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {item.alt}
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Nota de instrucción (se puede eliminar en producción) */}
        <p className="text-center font-mono text-xs text-cafetal-300 mt-5">
          📸 Agrega tus fotos reales en <code className="bg-cafetal-100 px-1.5 py-0.5 rounded text-cafetal-500">src/config.js</code> → <code className="bg-cafetal-100 px-1.5 py-0.5 rounded text-cafetal-500">GALERIA</code>
        </p>

      </div>
    </section>
  )
}
