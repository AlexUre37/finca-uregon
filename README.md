# 🌿 Finca UreGon — Landing Page

Landing page premium para **Finca UreGon** · Pittier, San Vito de Coto Brus, Costa Rica.  
Café Monchito · Aguacate · Ganado.

---

## 🚀 Instalación y ejecución local

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo (localhost:5173)
npm run dev

# 3. Construir para producción
npm run build

# 4. Vista previa del build
npm run preview
```

**Requiere:** Node.js 18+ y npm instalados.

---

## ✏️ Dónde editar cada cosa

### 📝 Textos, links y datos de la marca
**Archivo principal:** `src/config.js`

| Qué cambiar | Dónde |
|---|---|
| Número de WhatsApp | `LINKS.whatsapp` |
| Usuario de Instagram | `LINKS.instagram` |
| Usuario de Facebook | `LINKS.facebook` |
| Usuario de TikTok | `LINKS.tiktok` |
| Email de contacto | `LINKS.email` |
| Nombre y ubicación | `BRAND` |
| Frase del Hero | `COPY.hero.titulo` |
| Texto de "La Finca" | `COPY.finca` |
| Detalles de Café Monchito | `COPY.cafe` |
| Tarjetas de productos | `PRODUCTOS` |
| Fotos de la galería | `GALERIA` → campo `src` |
| Items de confianza | `TRUST_ITEMS` |

---

### 🖼️ Fotos e imágenes

#### Galería
En `src/config.js`, busca `GALERIA` y cambia `src: null` por la ruta de tu foto:

```js
// Opción A: foto local (colócala en src/assets/)
{ id: 1, alt: 'Cafetal en Pittier', src: '/src/assets/cafetal.jpg', emoji: '🌿' },

// Opción B: URL externa
{ id: 1, alt: 'Cafetal en Pittier', src: 'https://tu-cdn.com/foto.jpg', emoji: '🌿' },
```

#### Imágenes de productos
En `src/config.js`, busca `PRODUCTOS` y cambia `imagen: null` por la ruta:

```js
{ id: 'cafe', nombre: 'Café Monchito', imagen: '/src/assets/cafe-monchito.jpg', ... }
```

#### Logo
Actualmente el logo es el nombre en texto. Para agregar un logo:
1. Coloca tu logo en `public/logo.png` (o SVG)
2. En `src/components/Hero.jsx`, agrega antes del `<h1>`:
```jsx
<img src="/logo.png" alt="Finca UreGon" className="w-24 mb-4" />
```

#### Favicon
Reemplaza `public/favicon.svg` por tu propio ícono.

---

### 🎨 Colores

Los colores de marca están definidos en `tailwind.config.js`:

```js
colors: {
  tierra:  { ... },   // Marrones y dorados
  cafetal: { ... },   // Verdes
  crema:   { ... },   // Blancos cálidos
}
```

Para cambiar el color primario de botones, busca `bg-cafetal-600` en los componentes y cámbialo por el tono que prefieras.

---

### 🔤 Fuentes

Las fuentes se cargan en `index.html`:
- **Playfair Display** → títulos
- **DM Sans** → cuerpo y botones
- **DM Mono** → etiquetas y datos pequeños

Para cambiarlas, edita el `<link>` de Google Fonts en `index.html` y actualiza `tailwind.config.js` → `fontFamily`.

---

## 📁 Estructura de archivos

```
finca-uregon/
├── public/
│   └── favicon.svg          ← Icono del sitio
├── src/
│   ├── assets/              ← Coloca tus fotos aquí
│   ├── components/
│   │   ├── Hero.jsx         ← Sección principal
│   │   ├── RedesSociales.jsx← Botones de redes
│   │   ├── NuestraFinca.jsx ← Historia de la finca
│   │   ├── Productos.jsx    ← Cards de productos
│   │   ├── CafeMonchito.jsx ← Sección destacada del café
│   │   ├── Galeria.jsx      ← Galería de fotos
│   │   ├── Confianza.jsx    ← Sección de confianza
│   │   ├── Footer.jsx       ← Pie de página
│   │   └── FloatingWhatsApp.jsx ← Botón flotante
│   ├── App.jsx              ← Composición de secciones
│   ├── config.js            ← ⭐ EDITAR AQUÍ (links, textos, fotos)
│   ├── index.css            ← Estilos globales y Tailwind
│   └── main.jsx             ← Punto de entrada
├── index.html               ← Meta tags, fuentes, título
├── tailwind.config.js       ← Colores y fuentes
├── vite.config.js
└── package.json
```

---

## 🌐 Publicar en Vercel (gratis)

### Opción A: desde GitHub (recomendado)

```bash
# 1. Crea un repositorio en github.com

# 2. Inicializa git y sube el código
git init
git add .
git commit -m "feat: landing page Finca UreGon"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/finca-uregon.git
git push -u origin main

# 3. Ve a vercel.com → "Add New Project"
# 4. Conecta tu cuenta de GitHub
# 5. Importa el repositorio "finca-uregon"
# 6. Vercel detecta Vite automáticamente → clic en "Deploy"
# ✅ Tu sitio estará en https://finca-uregon.vercel.app
```

### Opción B: con Vercel CLI

```bash
npm install -g vercel
vercel
# Sigue las instrucciones en terminal
```

### Dominio personalizado (ej. fincauregon.cr)
En Vercel → Settings → Domains → agrega tu dominio y configura los DNS.

---

## 📱 Usar como link en bio de Instagram

1. Publica el proyecto en Vercel (pasos de arriba)
2. Copia la URL (`https://finca-uregon.vercel.app`)
3. En Instagram → Editar perfil → Sitio web → pega la URL
4. ¡Listo! Tus seguidores llegan directo a tu landing.

---

## 🛠️ Tecnologías usadas

- **React 18** + **Vite 5** — velocidad y modularidad
- **Tailwind CSS 3** — estilos utilitarios
- **Lucide React** — íconos
- **Google Fonts** — Playfair Display + DM Sans

---

Hecho con 🌿 para **Finca UreGon** · Costa Rica
