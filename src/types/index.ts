import type { ImageMetadata } from 'astro';

export type Language = 'en' | 'es';

export interface Translation {
  [key: string]: string | Translation;
}

export interface ArtifactName {
  en: string;
  es: string;
}

export interface ArtifactLocation {
  en: string;
  es: string;
}

export interface ArtifactDescription {
  en: string;
  es: string;
}

export interface ArtifactItem {
  id: string;
  slug: string;
  name: ArtifactName;
  description: ArtifactDescription;
  image: ImageMetadata;
  culture: string;
  period: string;
  museum: string;
  location: ArtifactLocation;
  dimensions?: string;
  material?: string;
  technique?: string;
  has3DModel?: boolean;
}

export interface CollectionData {
  fullCollection: ArtifactItem[];
  featuredArtifacts: ArtifactItem[];
  cultures: string[];
}

export interface LayoutProps {
  title: string;
  description: string;
  lang: Language;
  showHeader?: boolean;
  image?: ImageMetadata;
  canonicalURL?: URL;
  alternateURLs?: {
    [key in Language]: URL;
  };
  currentArtifact?: ArtifactItem;
}

export interface ModelInfo {
  title: string;
  description: string;
}

export interface ExperienceProps {
  model: string;
  lang: Language;
}

export interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

export interface ArtifactCardProps {
  artifact: ArtifactItem;
}

export interface CollectionProps {
  items: ArtifactItem[];
}

export interface NavigationItem {
  label: string;
  href: string;
  lang: Language;
}

export interface Scene3DProps {
  modelPath: string;
  autoRotate?: boolean;
  initialCameraPosition?: [number, number, number];
}

export interface ErrorPageProps {
  type: 'piece' | 'generic';
  lang: Language;
}
