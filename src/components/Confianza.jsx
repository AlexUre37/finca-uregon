import { MapPin, Award, Phone, Leaf } from 'lucide-react'
import { TRUST_ITEMS } from '../config'

// Mapa de íconos disponibles
const ICON_MAP = { MapPin, Award, Phone, Leaf }

export default function Confianza() {
  return (
    <section id="confianza" className="py-20 px-5 bg-white">
      <div className="max-w-2xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="tag bg-cafetal-100 text-cafetal-700 mb-4">Por qué elegirnos</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-cafetal-900 mt-3">
            Confianza de origen
          </h2>
          <p className="font-sans text-cafetal-500 text-sm mt-3 leading-relaxed max-w-xs mx-auto">
            Comprar en Finca UreGon es apoyar la producción local y conocer exactamente de dónde viene lo que consumes.
          </p>
        </div>

        {/* Grid de confianza */}
        <div className="grid grid-cols-2 gap-4">
          {TRUST_ITEMS.map(({ icono, titulo, desc }, idx) => {
            const Icono = ICON_MAP[icono] || Leaf
            const isLarge = idx === 0 // El primer item ocupa más espacio visualmente
            return (
              <div
                key={titulo}
                className={`
                  trust-item rounded-3xl border transition-all duration-200
                  hover:shadow-sm hover:-translate-y-0.5
                  ${idx % 2 === 0
                    ? 'bg-cafetal-50 border-cafetal-100'
                    : 'bg-tierra-50 border-tierra-100'}
                `}
              >
                {/* Ícono */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center
                    ${idx % 2 === 0 ? 'bg-cafetal-100' : 'bg-tierra-100'}`}
                >
                  <Icono
                    size={22}
                    strokeWidth={1.5}
                    className={idx % 2 === 0 ? 'text-cafetal-600' : 'text-tierra-600'}
                  />
                </div>

                {/* Texto */}
                <h3 className="font-serif text-lg text-cafetal-900 leading-tight">
                  {titulo}
                </h3>
                <p className="font-sans text-cafetal-500 text-xs leading-relaxed">
                  {desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Barra de país */}
        <div
          className="mt-10 rounded-2xl px-6 py-5 flex items-center gap-4"
          style={{
            background: 'linear-gradient(135deg, #0d1c09, #214316)',
          }}
        >
          <span className="text-4xl flex-shrink-0" role="img" aria-label="Bandera de Costa Rica">🇨🇷</span>
          <div>
            <p className="font-serif text-lg text-crema-50">Hecho en Costa Rica</p>
            <p className="font-sans text-cafetal-300 text-xs mt-0.5">
              Apoya la producción nacional · Pittier, San Vito de Coto Brus
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
