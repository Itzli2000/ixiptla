import type { ImageMetadata } from 'astro';

// Language types
export type Language = 'en' | 'es';

// Translation types
export interface Translation {
  [key: string]: string | Translation;
}

// Artifact types
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

// Collection types
export interface CollectionData {
  fullCollection: ArtifactItem[];
  featuredArtifacts: ArtifactItem[];
  cultures: string[];
}

// Layout props
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

// Experience types
export interface ModelInfo {
  title: string;
  description: string;
}

export interface ExperienceProps {
  model: string;
  lang: Language;
}

// Component props
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

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  lang: Language;
}

// 3D Model types
export interface Scene3DProps {
  modelPath: string;
  autoRotate?: boolean;
  initialCameraPosition?: [number, number, number];
}

// Error types
export interface ErrorPageProps {
  type: 'piece' | 'generic';
  lang: Language;
}
