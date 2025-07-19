import type { SEOData } from '../types/home';

export const createSEOData = (lang: 'en' | 'es'): SEOData => {
  const baseUrl = 'https://ixiptla.com';
  
  if (lang === 'en') {
    return {
      title: 'Ixiptla - Digital Museum of Mesoamerican Archaeological Replicas',
      description: 'Explore Maya, Mexica, Acolhua, Mixteca, and Teotihuacan cultures through interactive 3D archaeological replicas and educational content. Discover ancient Mesoamerican heritage digitally preserved for future generations.',
      keywords: [
        'Mesoamerican museum',
        'archaeological replicas', 
        'Maya artifacts',
        'digital museum',
        '3D archaeology',
        'Mexica culture',
        'virtual museum',
        'cultural heritage',
        'educational resources',
        'ancient civilizations'
      ],
      image: `${baseUrl}/images/hero-artifact.jpg`,
      url: `${baseUrl}/en`,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Museum',
        name: 'Ixiptla Digital Museum',
        description: 'Virtual museum showcasing Mesoamerican archaeological replicas with interactive 3D models',
        url: `${baseUrl}/en`,
        image: `${baseUrl}/images/hero-artifact.jpg`,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'MX'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Archaeological Replicas Collection',
          itemListElement: [
            {
              '@type': 'CreativeWork',
              name: 'Maya Collection',
              description: 'Maya archaeological replicas and artifacts'
            },
            {
              '@type': 'CreativeWork', 
              name: 'Mexica Collection',
              description: 'Mexica archaeological replicas and artifacts'
            }
          ]
        }
      }
    };
  } else {
    return {
      title: 'Ixiptla - Museo Digital de Réplicas Arqueológicas Mesoamericanas',
      description: 'Explora las culturas Maya, Mexica, Acolhua, Mixteca y Teotihuacana a través de réplicas arqueológicas 3D interactivas y contenido educativo. Descubre el patrimonio mesoamericano preservado digitalmente.',
      keywords: [
        'museo mesoamericano',
        'réplicas arqueológicas',
        'artefactos mayas',
        'museo digital',
        'arqueología 3D',
        'cultura mexica',
        'museo virtual',
        'patrimonio cultural',
        'recursos educativos',
        'civilizaciones antiguas'
      ],
      image: `${baseUrl}/images/hero-artifact.jpg`,
      url: `${baseUrl}/es`,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Museum',
        name: 'Museo Digital Ixiptla',
        description: 'Museo virtual que exhibe réplicas arqueológicas mesoamericanas con modelos 3D interactivos',
        url: `${baseUrl}/es`,
        image: `${baseUrl}/images/hero-artifact.jpg`,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'MX'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Colección de Réplicas Arqueológicas',
          itemListElement: [
            {
              '@type': 'CreativeWork',
              name: 'Colección Maya',
              description: 'Réplicas y artefactos arqueológicos mayas'
            },
            {
              '@type': 'CreativeWork',
              name: 'Colección Mexica', 
              description: 'Réplicas y artefactos arqueológicos mexicas'
            }
          ]
        }
      }
    };
  }
};