import type { ImageMetadata } from 'astro';

/** Supported languages in the application */
export type Language = 'en' | 'es';

/** Nested translation structure for internationalization */
export interface Translation {
  [key: string]: string | Translation;
}

/** Localized artifact name structure */
export interface ArtifactName {
  en: string;
  es: string;
}

/** Localized artifact location structure */
export interface ArtifactLocation {
  en: string;
  es: string;
}

/** Localized artifact description structure */
export interface ArtifactDescription {
  en: string;
  es: string;
}

/**
 * Represents an artifact in the collection with all its metadata.
 * Includes localization support for name, description, and location.
 */
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

/**
 * Collection data structure containing the full collection,
 * featured artifacts, and available cultures.
 */
export interface CollectionData {
  fullCollection: ArtifactItem[];
  featuredArtifacts: ArtifactItem[];
  cultures: string[];
}

/**
 * Layout properties for page components.
 * Includes SEO-related metadata and language support.
 */
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

/**
 * Localized information for 3D models.
 * Includes title and description in supported languages.
 */
export interface ModelInfo {
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
}

/**
 * Properties for the 3D experience component.
 * Specifies the model to display and the language for UI elements.
 */
export interface ExperienceProps {
  model: string;
  lang: Language;
}

/**
 * Button component properties.
 * Supports different variants and sizes for consistent styling.
 */
export interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

/**
 * Properties for the artifact card component.
 * Displays a single artifact with its metadata.
 */
export interface ArtifactCardProps {
  artifact: ArtifactItem;
}

/**
 * Properties for the collection component.
 * Displays a list of artifacts.
 */
export interface CollectionProps {
  items: ArtifactItem[];
}

/**
 * Navigation item structure.
 * Includes label, href, and language for internationalization.
 */
export interface NavigationItem {
  label: string;
  href: string;
  lang: Language;
}

/**
 * Properties for the 3D scene component.
 * Configures the model display and camera behavior.
 */
export interface Scene3DProps {
  modelPath: string;
  autoRotate?: boolean;
  initialCameraPosition?: [number, number, number];
}

/**
 * Properties for error page components.
 * Specifies the type of error and language for error messages.
 */
export interface ErrorPageProps {
  type: 'piece' | 'generic';
  lang: Language;
}
