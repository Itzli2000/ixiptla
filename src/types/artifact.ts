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

/**
 * 3D viewer configuration
 */
export interface ThreeDViewerConfig {
  modelPath: string;
  autoRotate?: boolean;
  enableControls?: boolean;
  enableFullscreen?: boolean;
  enableHelp?: boolean;
  mobileOptimized?: boolean;
}

/**
 * 3D viewer translations
 */
export interface ThreeDViewerTranslations {
  loading: string;
  instructions: string;
  mobileInstructions: string;
  resetView: string;
  autoRotate: string;
  fullscreen: string;
  help: string;
  keyboardShortcuts: string;
  spaceToRotate: string;
  ctrlRToReset: string;
}

/**
 * Related artifacts configuration
 */
export interface RelatedArtifactsConfig {
  sameCulture: BaseArtifact[];
  differentCulture: BaseArtifact[];
  maxDisplay: number;
  showCarousel: boolean;
}

/**
 * Artifact page props
 */
export interface ArtifactPageProps {
  artifact: EnhancedArtifact;
  relatedArtifacts: BaseArtifact[];
  lang: Language;
  translations: Record<string, string>;
  breadcrumbItems: BreadcrumbItem[];
  navigationArtifacts: {
    previous?: BaseArtifact;
    next?: BaseArtifact;
  };
}

/**
 * Artifact hero component props
 */
export interface ArtifactHeroProps {
  artifact: BaseArtifact;
  lang: Language;
  t: (key: string) => string;
  modelPath?: string;
}

/**
 * Artifact metadata component props
 */
export interface ArtifactMetadataProps {
  artifact: ArtifactMetadata;
  lang: Language;
  t: (key: string) => string;
}

/**
 * Cultural context component props
 */
export interface CulturalContextProps {
  artifact: BaseArtifact;
  culturalContext: CulturalContext;
  lang: Language;
  t: (key: string) => string;
}

/**
 * Related artifacts component props
 */
export interface RelatedArtifactsProps {
  relatedArtifacts: BaseArtifact[];
  currentCulture: string;
  lang: Language;
  t: (key: string) => string;
  config?: RelatedArtifactsConfig;
}

/**
 * Artifact collection filters
 */
export interface ArtifactFilters {
  culture?: string;
  period?: string;
  has3DModel?: boolean;
  material?: string;
  technique?: string;
}

/**
 * Artifact sorting options
 */
export type ArtifactSortBy = 'title' | 'culture' | 'period' | 'recent';

/**
 * Artifact search configuration
 */
export interface ArtifactSearchConfig {
  query?: string;
  filters?: ArtifactFilters;
  sortBy?: ArtifactSortBy;
  limit?: number;
  offset?: number;
}

/**
 * Artifact search results
 */
export interface ArtifactSearchResults {
  artifacts: BaseArtifact[];
  total: number;
  hasMore: boolean;
  filters: ArtifactFilters;
  sortBy: ArtifactSortBy;
}

/**
 * Utility type for artifact with collection data
 */
export interface ArtifactWithCollectionData {
  data: BaseArtifact;
  slug: string;
  collection: string;
}

/**
 * SEO metadata for artifacts
 */
export interface ArtifactSEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  canonicalUrl: string;
  alternateUrls: {
    en: string;
    es: string;
  };
  structuredData: Record<string, any>;
}

/**
 * Performance metrics for artifact pages
 */
export interface ArtifactPerformanceMetrics {
  loadTime: number;
  modelLoadTime?: number;
  imageLoadTime: number;
  renderTime: number;
  interactionTime: number;
}

/**
 * Accessibility configuration for artifacts
 */
export interface ArtifactAccessibilityConfig {
  screenReaderDescriptions: Record<string, string>;
  keyboardNavigationEnabled: boolean;
  highContrastMode: boolean;
  reducedMotionMode: boolean;
  focusManagement: boolean;
}
