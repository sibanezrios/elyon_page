// Paleta de colores ELYON - Basada en el logo corporativo
// Colores turquesa/teal del logo de ELYON

export const theme = {
  colors: {
    // Escala de marca principal (turquesa/teal corporativo de ELYON)
    brand: {
      50: '#f0fdfa',   // Muy claro
      100: '#ccfbf1',  // Claro
      200: '#99f6e4',  // Suave
      300: '#5eead4',  // Medio claro
      400: '#2dd4bf',  // Medio
      500: '#14b8a6',  // Principal (similar al logo)
      600: '#0d9488',  // Medio oscuro
      700: '#0f766e',  // Oscuro
      800: '#115e59',  // Más oscuro
      900: '#134e4a',  // Muy oscuro
    },
    // Colores de fondo y texto
    bg: '#ffffff',
    bgDark: '#000000',      // Negro del logo
    fg: '#0f172a',
    fgLight: '#64748b',
    accent: '#14b8a6',       // Turquesa principal
    accentLight: '#2dd4bf',  // Turquesa claro
    accentDark: '#0d9488',   // Turquesa oscuro
  },
  typography: {
    // Tamaños de fuente
    h1: '3.5rem',      // 56px
    h2: '2.5rem',      // 40px
    h3: '1.875rem',    // 30px
    h4: '1.5rem',      // 24px
    body: '1rem',      // 16px
    small: '0.875rem', // 14px
  },
  spacing: {
    section: '5rem',     // 80px
    sectionMobile: '3rem', // 48px
  },
} as const;
