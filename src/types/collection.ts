export interface FilterState {
  culture: string;
  period: string;
  material: string;
  has3D: boolean | null;
  searchQuery: string;
}

export interface CollectionFilters {
  cultures: string[];
  periods: string[];
  materials: string[];
}

export interface ArtifactData {
  title: string;
  culture: string;
  period: string;
  image: string;
  description: string;
  museum: string;
  location: string;
  dimensions?: string;
  material?: string;
  technique?: string;
  has3DModel?: boolean;
  slug: string;
}