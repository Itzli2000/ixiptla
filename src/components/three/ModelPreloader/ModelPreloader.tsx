import { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { AVAILABLE_MODELS, getModelPath } from '../../../data/models';

export function ModelPreloader() {
  useEffect(() => {
    // Preload the most common models with a delay to not block initial render
    const preloadTimer = setTimeout(() => {
      // Preload colibri (homepage model) first
      useGLTF.preload('/images/models/colibri.glb');
      
      // Then preload other models with progressive delays
      AVAILABLE_MODELS.forEach((model, index) => {
        setTimeout(() => {
          const modelPath = getModelPath(model);
          if (modelPath !== '/images/models/colibri.glb') {
            useGLTF.preload(modelPath);
          }
        }, (index + 1) * 500); // Stagger the preloading
      });
    }, 2000); // Start preloading after 2 seconds

    return () => clearTimeout(preloadTimer);
  }, []);

  return null; // This component doesn't render anything
}

// Hook to preload specific model
export function useModelPreloader(modelPath: string, delay: number = 0) {
  useEffect(() => {
    const timer = setTimeout(() => {
      useGLTF.preload(modelPath);
    }, delay);

    return () => clearTimeout(timer);
  }, [modelPath, delay]);
}