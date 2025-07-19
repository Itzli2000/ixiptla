import type { FeaturedArtifact, CultureInfo } from '../types/home';

/**
 * Get featured artifacts from collection data
 */
export async function getFeaturedArtifacts(lang: 'en' | 'es'): Promise<FeaturedArtifact[]> {
  // This would integrate with the existing content collections
  // For now, return mock data that matches the structure
  return [
    {
      id: 'maya-vessel-1',
      title: 'Ceremonial Maya Vessel',
      culture: 'Maya',
      period: 'Classic Period',
      image: '/images/artifacts/maya-vessel.jpg',
      description: 'Intricately painted ceremonial vessel with traditional Maya iconography',
      has3DModel: true,
      slug: 'maya-ceremonial-vessel'
    },
    {
      id: 'mexica-sculpture-1',
      title: 'Mexica Stone Sculpture',
      culture: 'Mexica',
      period: 'Postclassic Period',
      image: '/images/artifacts/mexica-sculpture.jpg',
      description: 'Carved stone figure representing deity from Mexica pantheon',
      has3DModel: true,
      slug: 'mexica-stone-sculpture'
    },
    {
      id: 'teotihuacan-mask-1',
      title: 'Teotihuacan Jade Mask',
      culture: 'Teotihuacan',
      period: 'Classic Period',
      image: '/images/artifacts/teotihuacan-mask.jpg',
      description: 'Ceremonial jade mask with intricate mosaic work',
      has3DModel: false,
      slug: 'teotihuacan-jade-mask'
    }
  ];
}

/**
 * Filter cultures by availability
 */
export function getAvailableCultures(cultures: CultureInfo[]): CultureInfo[] {
  return cultures.filter(culture => culture.artifactCount > 0);
}

/**
 * Get culture link based on language
 */
export function getCultureLink(culture: CultureInfo, lang: 'en' | 'es'): string {
  const basePath = lang === 'es' ? '/es/coleccion' : '/en/collection';
  return `${basePath}?culture=${culture.slug}`;
}

/**
 * Format artifact count for display
 */
export function formatArtifactCount(count: number, lang: 'en' | 'es'): string {
  const suffix = lang === 'es' ? 'artefactos' : 'artifacts';
  return `${count} ${suffix}`;
}

/**
 * Get optimized image URL with responsive sizes
 */
export function getOptimizedImageUrl(imagePath: string, size: 'hero' | 'card' | 'thumbnail'): string {
  const sizeMap = {
    hero: '?w=1920&h=1080&fit=crop&q=85',
    card: '?w=600&h=400&fit=crop&q=80',
    thumbnail: '?w=300&h=200&fit=crop&q=75'
  };
  
  return `${imagePath}${sizeMap[size]}`;
}

/**
 * Generate structured data for artifacts
 */
export function generateArtifactStructuredData(artifacts: FeaturedArtifact[], lang: 'en' | 'es') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: lang === 'es' ? 'Artefactos Destacados' : 'Featured Artifacts',
    description: lang === 'es' 
      ? 'Colección destacada de réplicas arqueológicas mesoamericanas'
      : 'Featured collection of Mesoamerican archaeological replicas',
    itemListElement: artifacts.map((artifact, index) => ({
      '@type': 'CreativeWork',
      position: index + 1,
      name: artifact.title,
      description: artifact.description,
      creator: {
        '@type': 'Organization',
        name: `${artifact.culture} Civilization`
      },
      dateCreated: artifact.period,
      image: artifact.image,
      url: `/${lang}/${lang === 'es' ? 'coleccion' : 'collection'}/${artifact.slug}`
    }))
  };
}

/**
 * Calculate reading time for content sections
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(' ').length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Get appropriate CTA text based on user journey stage
 */
export function getCTAText(section: 'hero' | 'introduction' | 'collections' | 'technology', lang: 'en' | 'es'): string {
  const ctaMap = {
    en: {
      hero: 'Explore Collection',
      introduction: 'Learn More About Our Mission',
      collections: 'View All Cultures',
      technology: 'Experience 3D Models'
    },
    es: {
      hero: 'Explorar Colección',
      introduction: 'Conoce Más Sobre Nuestra Misión',
      collections: 'Ver Todas las Culturas',
      technology: 'Experimentar Modelos 3D'
    }
  };
  
  return ctaMap[lang][section];
}