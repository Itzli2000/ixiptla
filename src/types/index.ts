import type { CollectionEntry } from 'astro:content';

/** Supported languages in the application */
export type Language = 'en' | 'es';

/** Artifact entry from content collections */
export type ArtifactItem = CollectionEntry<'artifacts'>;

/** Nested translation structure for internationalization */
export interface Translation {
  [key: string]: string | Translation;
}

/**
 * Layout properties for page components.
 * Includes SEO-related metadata and language support.
 */
export interface LayoutProps {
  title: string;
  description: string;
  lang: Language;
  image?: string;
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
 * Base properties for 3D model components.
 * Configures positioning, scaling, and rotation in 3D space.
 */
export interface Model3DBaseProps {
  modelPath: string;
  scale?: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  lang?: Language;
}

/**
 * Properties for the 3D scene component.
 * Configures the model display and camera behavior.
 */
export interface Scene3DProps {
  modelPath: string;
  autoRotate?: boolean;
  initialCameraPosition?: [number, number, number];
  lang?: Language;
  initialModelScale?: [number, number, number];
}

/**
 * Error types for model loading and rendering.
 */
export type ModelErrorType = 'loadError' | 'initError' | 'webglError' | 'failedToLoad' | 'noModelData' | 'interactiveError' | 'animationError';

/**
 * Properties for error display components.
 */
export interface ModelErrorProps {
  onRetry?: () => void;
  lang?: Language;
  errorType?: ModelErrorType;
}
