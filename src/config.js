import fincaImg from './assets/finca.png'
import cafeImg from './assets/cafe.jpg'
import ganadoImg from './assets/ganado.jpg'
import empaque250Img from './assets/empaque250.jpg'
import aguacateImg from './assets/aguacate.jpg'
import vistaImg from './assets/vista.jpg'
// ╔══════════════════════════════════════════════════════════════╗
// ║           CONFIGURACIÓN CENTRAL DE FINCA UREGON              ║
// ║   Edita este archivo para cambiar links, textos y datos.     ║
// ╚══════════════════════════════════════════════════════════════╝

// ─── LINKS DE CONTACTO Y REDES ───────────────────────────────────
export const LINKS = {
  // ⬇ Cambia el número de WhatsApp (formato internacional sin el +)
  whatsapp: 'https://wa.me/50684557174?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Caf%C3%A9%20Monchito%20y%20los%20productos%20de%20Finca%20UreGon.',

  // ⬇ Cambia por tu usuario real de cada red
  instagram: 'https://www.instagram.com/fincauregon?igsh=eHp3YXM0eGprbGxn',
  facebook:  'https://www.facebook.com/share/18gLLHqsiJ/',
  tiktok:    'https://www.tiktok.com/@finca.uregon?_r=1&_t=ZS-96bfdPx4y1t',
  email:     'mailto:fincauregon@gmail.com',
}

// ─── INFORMACIÓN DE LA MARCA ──────────────────────────────────────
export const BRAND = {
  nombre:       'Finca UreGon',
  tagline:      'Producción costarricense de café, aguacate y ganado',
  ubicacion:    'Pittier, San Vito de Coto Brus, Costa Rica',
  café:         'Café Monchito',
  teléfono:     '+506 8455-7174', // Para mostrar en footer
}

// ─── TEXTOS PRINCIPALES ───────────────────────────────────────────
export const COPY = {
  hero: {
    titulo:    'Finca UreGón',
    subtitulo: 'Producción 100% costarricense',
    cta1:      'Comprar café por WhatsApp',
    cta2:      'Conocer la finca',
  },

  finca: {
    titulo: 'Nuestra finca',
    parrafo1: 'Entre las montañas de Pittier y el clima único de Coto Brus, nace una producción marcada por el origen, la tierra y el trabajo constante.',
    parrafo2: 'Cada cosecha representa el esfuerzo de una finca costarricense que apuesta por la calidad, el detalle y el valor de producir localmente.',
    parrafo3: 'Finca UreGon es café, campo y tradición agrícola transformados en una experiencia auténtica.',
  },

  cafe: {
    titulo: 'Café Monchito',
    subtitulo: 'De nuestra Finca directo a tu taza.',
    descripcion: 'Cultivado en Pittier, Coto Brus, Café Monchito representa el origen y la autenticidad del café costarricense.',
    origen:      'Pittier, Coto Brus · 1,200 msnm',
    tueste:      'Tueste oscuro artesanal',
    proceso:     '100% Arábica costarricense',
    presentaciones: ['250 g', '400 g', '1 kg'],
    cta: 'Solicitar información',
  },
}

// ─── PRODUCTOS ────────────────────────────────────────────────────
export const PRODUCTOS = [
  {
    id: 'cafe',
    nombre: 'Café Monchito',
    descripcion: 'Cultivado en las montañas de Coto Brus con tueste oscuro y carácter costarricense.',
    tag: 'Café de altura',
    tagColor: 'bg-tierra-100 text-tierra-700',
    // ⬇ Cambia por la URL de tu imagen real
    imagen: null,
    emoji: '☕',
  },
  {
    id: 'aguacate',
    nombre: 'Aguacate',
    descripcion: 'Del árbol a tu mesa, producido en las montañas del sur de Costa Rica.',
    tag: 'Finca costarricense',
    tagColor: 'bg-cafetal-100 text-cafetal-700',
    imagen: null,
    emoji: '🥑',
  },
  {
    id: 'ganado',
    nombre: 'Ganado',
    descripcion: 'Una finca en desarrollo donde el ganado forma parte de nuestra visión a futuro.',
    tag: 'Visión a futuro',
    tagColor: 'bg-crema-200 text-tierra-800',
    imagen: null,
    emoji: '🐄',
  },
]
// ─── GALERÍA: REEMPLAZA LAS URLs ──────────────────────────────────
// Agrega aquí las URLs de tus fotos reales.
// Pueden ser rutas locales (/src/assets/foto1.jpg) o URLs externas.
export const GALERIA = [
  { id: 1, alt: 'Cafetal en Pittier',        src: fincaImg, emoji: '🌿' },
  { id: 2, alt: 'Empaque Café Monchito',     src: empaque250Img, emoji: '☕' },
  { id: 3, alt: 'Cosecha de café',           src: cafeImg, emoji: '🍒' },
  { id: 4, alt: 'Ganado en finca',           src: ganadoImg, emoji: '🐄' },
  { id: 5, alt: 'Aguacate de la finca',      src: aguacateImg, emoji: '🥑' },
  { id: 6, alt: 'Vista de la finca',         src: vistaImg, emoji: '🏔️' },
]

// ─── CONFIANZA ────────────────────────────────────────────────────
export const TRUST_ITEMS = [
  { icono: 'MapPin',   titulo: 'Producción local',          desc: 'Directamente desde Pittier, San Vito' },
  { icono: 'Award',    titulo: 'Calidad de origen',         desc: 'Sin intermediarios, trazabilidad total' },
  { icono: 'Phone',    titulo: 'Contacto directo',          desc: 'Habla con el productor, no con un vendedor' },
  { icono: 'Leaf',     titulo: 'Costa Rica',                desc: 'Orgullo tico desde Coto Brus' },
]
