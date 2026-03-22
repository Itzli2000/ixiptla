import type { Language } from './index';

/**
 * Base artifact data structure from content collections
 */
export interface BaseArtifact {
  title: string;
  culture: string;
  period: string;
  image: string;
  description: string;
  museum: string;
  location: string;
  slug: string;
  has3DModel?: boolean;
  dimensions?: string;
  material?: string;
  technique?: string;
}

/**
 * Enhanced artifact data with computed properties
 */
export interface EnhancedArtifact extends BaseArtifact {
  /** Computed 3D model path if available */
  modelPath?: string;
  /** SEO-optimized title */
  seoTitle?: string;
  /** SEO-optimized description */
  seoDescription?: string;
  /** Canonical URL */
  canonicalUrl?: string;
  /** Social media image URL */
  socialImageUrl?: string;
  /** Related artifacts */
  relatedArtifacts?: BaseArtifact[];
  /** Cultural context information */
  culturalContext?: CulturalContext;
}

/**
 * Cultural context information for artifacts
 */
export interface CulturalContext {
  significance: string;
  artistry: string;
  legacy: string;
  period: string;
  culture: string;
}

/**
 * Breadcrumb navigation item
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
  ariaCurrent?: string;
}

/**
 * Artifact metadata for display
 */
export interface ArtifactMetadata {
  culture: string;
  period: string;
  location: string;
  museum: string;
  dimensions?: string;
  material?: string;
  technique?: string;
}

