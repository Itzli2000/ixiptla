export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  url: string;
  structuredData: Record<string, unknown>;
}

export interface MuseumStats {
  artifacts: number;
  cultures: number;
  models3D: number;
  experiences: string | number;
}

export interface CultureInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  artifactCount: number;
  slug: string;
  color: string;
  image: string;
}

export interface TechnologyFeature {
  title: string;
  description: string;
  icon: string;
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
