export interface Translation {
  es: string;
  en: string;
}

export interface ArtifactItem {
  id: number;
  name: Translation;
  culture: string;
  period: string;
  image: ImageMetadata;
  slug: string;
  description: Translation;
  museum: string;
  location: Translation;
  dimensions?: string;
  material?: string;
  technique?: string;
}

export interface Artifact {
  culture: string;
}
