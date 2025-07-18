export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  features: string[];
}

export interface CultureInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  artifactCount: number;
  slug: string;
  color: string;
}

export interface TechnologyFeature {
  title: string;
  description: string;
  icon: string;
}

export interface MuseumStats {
  artifacts: number;
  cultures: number;
  models3D: number;
  experiences: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  url: string;
  structuredData: any;
}

export interface FeaturedArtifact {
  id: string;
  title: string;
  culture: string;
  period: string;
  image: string;
  description: string;
  has3DModel: boolean;
  slug: string;
}

export interface HomePageData {
  hero: HeroContent;
  cultures: CultureInfo[];
  technologyFeatures: TechnologyFeature[];
  stats: MuseumStats;
  featuredArtifacts: FeaturedArtifact[];
  seo: SEOData;
}