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

export type { BaseArtifact as ArtifactData } from './artifact';