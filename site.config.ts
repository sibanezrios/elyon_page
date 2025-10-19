export const siteConfig = {
  brand: {
    name: "ELYON Business Consulting",
    localeDefault: "es",
    locales: ["es", "en"]
  },
  contact: {
    whatsappDemoUrl: "https://wa.me/message/HD53NQF5UYXYD1",
    email: "elyonbusinessconsultingco@gmail.com"
  },
  social: {
    instagram: "https://www.instagram.com/elyon_bco?igsh=eTRtc2tsdGl5bHB4&utm_source=qr",
    linkedin: "https://www.linkedin.com/company/elyonbm?trk=public_post_feed-actor-name"
  },
  routes: [
    "/",
    "/soluciones",
    "/demos",
    "/demos/agente-email",
    "/demos/asistente-telegram",
    "/casos",
    "/nosotros",
    "/recursos",
    "/contacto"
  ]
} as const;
