import type { TechnologyFeature } from '../types/home';

export const technologyFeatures: TechnologyFeature[] = [
  {
    title: 'High-Resolution 3D Models',
    description: 'Detailed digital replicas capturing every surface and texture',
    icon: 'mdi:cube-scan'
  },
  {
    title: 'Interactive Archaeological Exploration',
    description: 'Examine artifacts from every angle with precision detail',
    icon: 'mdi:magnify-scan'
  },
  {
    title: 'Educational Cultural Context',
    description: 'Rich historical background and cultural significance',
    icon: 'mdi:book-open-page-variant'
  },
  {
    title: 'Accessible from Anywhere',
    description: 'Global access to Mesoamerican heritage from any device',
    icon: 'mdi:earth'
  }
];

export const getTechnologyFeatureByIndex = (index: number): TechnologyFeature | undefined => {
  return technologyFeatures[index];
};

export const getTechnologyFeaturesCount = (): number => {
  return technologyFeatures.length;
};