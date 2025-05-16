export const SITE_CONFIG = {
  name: 'Ixiptla',
  description: 'Personal Collection of Mexican Artifact Replicas',
  defaultLanguage: 'es',
  supportedLanguages: ['es', 'en'],
} as const;

export const ROUTES = {
  home: '/',
  collection: '/collection',
  about: '/about',
} as const;

export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
} as const; 