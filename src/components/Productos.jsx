import { PRODUCTOS } from '../config'

// Colores de fondo por producto cuando no hay imagen
const BG_GRADIENTS = {
  cafe:     'from-tierra-900 via-tierra-800 to-cafetal-900',
  aguacate: 'from-cafetal-800 via-cafetal-700 to-cafetal-900',
  ganado:   'from-crema-200 via-tierra-100 to-cafetal-50',
}

export default function Productos() {
  return (
    <section id="productos" className="py-20 px-5 bg-white">
      <div className="max-w-2xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="tag bg-tierra-100 text-tierra-700 mb-4">Directamente del campo</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-cafetal-900 mt-3">
            Nuestros productos
          </h2>
          <p className="font-sans text-cafetal-500 mt-3 text-sm leading-relaxed max-w-sm mx-auto">
            Producción propia, trazabilidad total y contacto directo con quien cultiva.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {PRODUCTOS.map((producto) => (
            <div key={producto.id} className="product-card">
              <div className="flex gap-0">
                {/* Imagen / Placeholder visual */}
                <div
                  className={`
                    w-28 sm:w-36 flex-shrink-0 flex items-center justify-center
                    bg-gradient-to-br ${BG_GRADIENTS[producto.id]}
                    relative overflow-hidden
                  `}
                >
                  {producto.imagen ? (
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-1.5">
                      <span className="text-4xl" role="img" aria-label={producto.nombre}>
                        {producto.emoji}
                      </span>
                      {/* ↑ REEMPLAZA: agrega imagen en config.js → productos → imagen */}
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="flex-1 p-5 sm:p-6">
                  <span className={`tag text-xs ${producto.tagColor} mb-2`}>
                    {producto.tag}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-cafetal-900 mt-1">
                    {producto.nombre}
                  </h3>
                  <p className="font-sans text-cafetal-600 text-sm leading-relaxed mt-2">
                    {producto.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
