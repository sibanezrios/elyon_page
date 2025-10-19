# ELYON Business Consulting - Sitio Web Corporativo

Sitio web profesional construido con **Next.js 14**, **TypeScript**, **TailwindCSS**, **next-intl** (i18n) y **Framer Motion** para ELYON Business Consulting.

## 🚀 Características

- ✅ **Internacionalización (i18n)**: Español e Inglés con `next-intl`
- ✅ **Welcome Screen**: Pantalla de bienvenida en primera visita
- ✅ **WhatsApp Integration**: Botón flotante y CTAs para solicitar demos
- ✅ **Redes Sociales**: Enlaces a Instagram y LinkedIn
- ✅ **Responsive Design**: Mobile-first, optimizado para todos los dispositivos
- ✅ **Animaciones**: Microanimaciones sutiles con Framer Motion
- ✅ **SEO Optimizado**: Metadatos, OpenGraph, JSON-LD
- ✅ **Accesibilidad**: WCAG AA/AAA compliant
- ✅ **Demos Interactivas**: Agente de IA para Email y Asistente Telegram

## 📋 Requisitos Previos

- Node.js 18+ 
- npm, yarn, o pnpm

## 🛠️ Instalación

```bash
# Clonar el repositorio (o descargar los archivos)
cd elyon

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

## 🏃 Desarrollo

```bash
# Ejecutar servidor de desarrollo
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Build y Producción

```bash
# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🌍 Internacionalización (i18n)

El sitio soporta **Español (ES)** e **Inglés (EN)**:

- **Idioma por defecto**: Español
- **Toggle de idioma**: Header (desktop) y menú móvil
- **Archivos de traducción**: `messages/es.json` y `messages/en.json`
- **Persistencia**: Se guarda en `localStorage`

### Agregar/editar traducciones

1. Edita `messages/es.json` o `messages/en.json`
2. Usa las claves en componentes: `t('clave.subclave')`

## 📱 Redes Sociales

Configuradas en `site.config.ts`:

```typescript
social: {
  instagram: "https://www.instagram.com/elyon_bco?igsh=eTRtc2tsdGl5bHB4&utm_source=qr",
  linkedin: "https://www.linkedin.com/company/elyonbm?trk=public_post_feed-actor-name"
}
```

### Cambiar URLs de redes sociales

Edita `site.config.ts` y actualiza las URLs en el objeto `social`.

## 💬 WhatsApp

URL configurada en `site.config.ts`:

```typescript
contact: {
  whatsappDemoUrl: "https://wa.me/message/HD53NQF5UYXYD1",
  email: "elyonbusinessconsultingco@gmail.com"
}
```

### Ubicaciones del botón WhatsApp:

1. **Botón flotante** (bottom-right, todas las páginas)
2. **Hero** (página principal)
3. **Demos** (Agente Email y Asistente Telegram)
4. **Contacto** (página /contacto)

### Cambiar URL de WhatsApp

Edita `site.config.ts` → `contact.whatsappDemoUrl`

## 🎨 Welcome Screen

**Comportamiento:**
- Se muestra solo en la **primera visita**
- Se almacena en `localStorage` con la clave `elyon_welcome_seen`
- Mensaje: "¿Estás listo para madurar tu empresa globalmente?"
- Botones:
  - **"Conócenos"**: scroll a sección de ofertas
  - **"Ver demos"**: scroll a sección de demos

### Desactivar Welcome Screen

Para **testing** o si quieres desactivarlo:

1. Abre `components/WelcomeScreen.tsx`
2. Cambia línea 11 a: `setIsVisible(false);`
3. O borra `localStorage.removeItem('elyon_welcome_seen')` en consola del navegador

## 🎨 Personalización de Estilos

### Paleta de colores

Edita `lib/theme.ts` y `app/globals.css` (variables CSS):

```css
--brand-500: #3b82f6;  /* Color principal */
--accent: #f59e0b;      /* Color de acento */
```

### Tipografía

Se usan fuentes del sistema. Para cambiar, edita `app/globals.css`:

```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...
```

## 📂 Estructura del Proyecto

```
elyon/
├── app/
│   ├── [locale]/          # Rutas por idioma
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Página Home
│   └── globals.css        # Estilos globales
├── components/
│   ├── Header.tsx         # Navegación y toggle i18n
│   ├── WelcomeScreen.tsx  # Pantalla de bienvenida
│   ├── Hero.tsx           # Hero section
│   ├── FeatureGrid.tsx    # Grillas de servicios/diferenciadores
│   ├── DemoEmail.tsx      # Demo Agente Email
│   ├── DemoTelegram.tsx   # Demo Asistente Telegram
│   ├── Timeline.tsx       # Línea de tiempo de propósito
│   ├── FAQ.tsx            # Preguntas frecuentes
│   ├── Footer.tsx         # Footer
│   ├── SocialLinks.tsx    # Enlaces redes sociales
│   └── WhatsAppFloat.tsx  # Botón flotante WhatsApp
├── lib/
│   ├── theme.ts           # Paleta y tokens
│   └── utils.ts           # Utilidades (cn, analytics)
├── messages/
│   ├── es.json            # Traducciones español
│   └── en.json            # Traducciones inglés
├── site.config.ts         # Configuración del sitio
├── i18n.ts                # Configuración i18n
├── routing.ts             # Configuración de rutas
├── middleware.ts          # Middleware i18n
├── tailwind.config.ts     # Configuración Tailwind
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md
```

## 🚢 Despliegue en Vercel

1. **Push** el código a GitHub/GitLab/Bitbucket
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js
4. Click en **Deploy**

### Variables de entorno

No se requieren variables de entorno por ahora. Todas las configuraciones están en `site.config.ts`.

## 📊 Analytics

El sitio tiene stubs para analytics. Para integrar:

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Edita `lib/utils.ts`:

```typescript
import { track } from '@vercel/analytics';

export const analytics = {
  track: (event: string, properties?: Record<string, any>) => {
    track(event, properties);
  }
};
```

### Plausible / Google Analytics

Sigue la documentación oficial e integra en `lib/utils.ts`.

## 🔒 Seguridad

- ✅ Todos los enlaces externos usan `rel="noopener noreferrer"`
- ✅ No se exponen secrets ni API keys
- ✅ Formularios usan endpoints placeholder (implementar validación server-side)

## 🧪 Testing

### Checklist manual:

- [ ] Welcome Screen aparece solo la primera vez
- [ ] Toggle de idioma funciona (ES/EN)
- [ ] Botón WhatsApp flotante visible y funcional
- [ ] Enlaces de RRSS abren correctamente
- [ ] Responsive en móvil (320px - 1440px+)
- [ ] Navegación por teclado funciona
- [ ] Contraste AA mínimo

## 📝 TODOs / Mejoras Futuras

- [ ] Implementar endpoint real para formulario de contacto (`/api/contact`)
- [ ] Agregar blog/recursos dinámicos
- [ ] Implementar SSG para páginas estáticas
- [ ] Agregar más demos interactivas
- [ ] Tests automatizados (Jest, Playwright)
- [ ] Lighthouse CI en GitHub Actions

## 📄 Licencia

© 2025 ELYON Business Consulting. Todos los derechos reservados.

## 🤝 Contacto

- **Email**: elyonbusinessconsultingco@gmail.com
- **WhatsApp**: [Solicitar demo](https://wa.me/message/HD53NQF5UYXYD1)
- **Instagram**: [@elyon_bco](https://www.instagram.com/elyon_bco)
- **LinkedIn**: [ELYON](https://www.linkedin.com/company/elyonbm)

---

Hecho con ❤️ para ELYON Business Consulting
