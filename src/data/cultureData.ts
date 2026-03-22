import type { CultureInfo } from '../types/home';

export const cultureData: CultureInfo[] = [
  {
    id: 'maya',
    name: 'Maya',
    description: 'Sophisticated astronomical and mathematical knowledge',
    icon: 'mdi:pyramid',
    artifactCount: 15,
    slug: 'maya',
    color: 'hsl(var(--p))',
    image: '/images/sacerdotisa.png'
  },
  {
    id: 'mexica',
    name: 'Mexica',
    description: 'Powerful empire builders and skilled artisans',
    icon: 'mdi:shield-sun',
    artifactCount: 12,
    slug: 'mexica',
    color: 'hsl(var(--s))',
    image: '/images/mictlan.png'
  },
  {
    id: 'acolhua',
    name: 'Acolhua',
    description: 'Refined culture and architectural achievements',
    icon: 'mdi:temple-buddhist',
    artifactCount: 8,
    slug: 'acolhua',
    color: 'hsl(var(--a))',
    image: '/images/monito.png'
  },
  {
    id: 'mixteca',
    name: 'Mixteca',
    description: 'Master craftsmen of gold and precious stones',
    icon: 'mdi:diamond-stone',
    artifactCount: 10,
    slug: 'mixteca',
    color: 'hsl(var(--w))',
    image: '/images/colibri.png'
  },
  {
    id: 'teotihuacan',
    name: 'Teotihuacan',
    description: 'Mysterious civilization of monumental architecture',
    icon: 'mdi:city',
    artifactCount: 6,
    slug: 'teotihuacana',
    color: 'hsl(var(--n))',
    image: '/images/sedente.png'
  }
];

export const getCulturesWithArtifacts = (): CultureInfo[] => {
  return cultureData.filter(culture => culture.artifactCount > 0);
};