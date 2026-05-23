import Hero          from './components/Hero'
import RedesSociales from './components/RedesSociales'
import NuestraFinca  from './components/NuestraFinca'
import Productos     from './components/Productos'
import CafeMonchito  from './components/CafeMonchito'
import Galeria       from './components/Galeria'
import Confianza     from './components/Confianza'
import Footer        from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen">
      {/* ─── SECCIONES ─────────────────────────────────────────────
          Para ocultar o reordenar secciones, comenta o mueve las
          líneas de abajo. El orden aquí define el orden en la página.
      ─────────────────────────────────────────────────────────────── */}
      <Hero />
      <RedesSociales />
      <NuestraFinca />
      <Productos />
      <CafeMonchito />
      <Galeria />
      <Confianza />
      <Footer />

      {/* Botón flotante de WhatsApp (móvil) */}
      <FloatingWhatsApp />
    </div>
  )
}
