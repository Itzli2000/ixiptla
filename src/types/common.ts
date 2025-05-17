export interface Artifact {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  modelUrl?: string;
  period: string;
  location: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  materials: string[];
  date: string;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface Theme {
  mode: 'light' | 'dark';
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export interface Model3DProps {
  url: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  onLoad?: () => void;
  onError?: (error: Error) => void;
} 