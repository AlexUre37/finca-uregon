import { Leaf, Sun, Mountain } from 'lucide-react'
import { COPY, BRAND } from '../config'

export default function NuestraFinca() {
  return (
    <section id="finca" className="py-20 px-5" style={{ background: '#fdf8f0' }}>
      <div className="max-w-2xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="tag bg-cafetal-100 text-cafetal-700 mb-4">Historia</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-cafetal-900 mt-3 text-balance">
            {COPY.finca.titulo}
          </h2>
          {/* Separador decorativo */}
          <div className="divider-leaf mt-5">
            <Leaf size={16} className="text-cafetal-400 flex-shrink-0" />
          </div>
        </div>

        {/* Cuerpo del texto */}
        <div className="space-y-5 text-cafetal-700 font-sans leading-relaxed text-base sm:text-lg">
          <p>{COPY.finca.parrafo1}</p>
          <p>{COPY.finca.parrafo2}</p>
          <p>{COPY.finca.parrafo3}</p>
        </div>

        {/* Datos destacados */}
        <div className="grid grid-cols-3 gap-4 mt-12 pt-10 border-t border-tierra-200">
          {[
            { icono: Mountain, valor: '1,200', unidad: 'msnm', label: 'Altitud' },
            { icono: Sun,      valor: 'Coto',  unidad: 'Brus',  label: 'Región' },
            { icono: Leaf,     valor: '100%',  unidad: 'CR',    label: 'Origen' },
          ].map(({ icono: Icono, valor, unidad, label }) => (
            <div key={label} className="flex flex-col items-center text-center p-4 rounded-2xl bg-cafetal-50/60 border border-cafetal-100">
              <Icono size={20} className="text-cafetal-500 mb-2" strokeWidth={1.5} />
              <span className="font-serif text-2xl text-cafetal-800 leading-none">{valor}</span>
              <span className="font-mono text-xs text-cafetal-500 mt-0.5">{unidad}</span>
              <span className="font-sans text-xs text-cafetal-400 mt-1 uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>

        {/* Cita / quote de la finca */}
        <blockquote className="mt-12 pl-5 border-l-4 border-tierra-400">
          <p className="font-serif italic text-xl text-cafetal-700 leading-snug text-balance">
            "Cada taza de Café Monchito lleva el sabor de nuestra tierra y el trabajo de nuestra familia."
          </p>
          <cite className="block font-mono text-sm text-tierra-600 mt-3 not-italic">
            — {BRAND.nombre}, {BRAND.ubicacion}
          </cite>
        </blockquote>

      </div>
    </section>
  )
}
