/**
 * Maps artifact slugs to their corresponding 3D model identifiers.
 * This mapping is used to determine which 3D model should be displayed
 * for a given artifact in the collection.
 */
export const slugToModel: Record<string, string> = {
  "hummingbird-cup": "colibri",
  "male-anthropomorphic-figurine": "sedente",
  "yax-pasaj-chan-yopaat": "yax",
  "mictlantecuhtli-god-of-death": "mictlan",
} as const;

/**
 * Type representing the valid keys in the slugToModel mapping.
 * This ensures type safety when accessing the mapping.
 */
export type ModelKey = keyof typeof slugToModel;

/**
 * Helper function to get the 3D model identifier for a given artifact slug.
 * @param slug - The artifact slug to look up
 * @returns The corresponding 3D model identifier, or undefined if no model exists
 */
export function getModelForSlug(slug: string): string | undefined {
  return slugToModel[slug as ModelKey];
}

import type { ModelInfo } from '../types';

export const AVAILABLE_MODELS = ['colibri', 'sedente', 'yax', 'mictlan'] as const;
export type ModelId = typeof AVAILABLE_MODELS[number];

export const MODEL_INFO: Record<ModelId, ModelInfo> = {
  colibri: {
    title: {
      en: "Hummingbird - Ixiptla",
      es: "Colibrí - Ixiptla"
    },
    description: {
      en: "3D Experience of the Hummingbird",
      es: "Experiencia 3D del Colibrí"
    }
  },
  sedente: {
    title: {
      en: "Seated Figure - Ixiptla",
      es: "Figura Sedente - Ixiptla"
    },
    description: {
      en: "3D Experience of the Seated Figure",
      es: "Experiencia 3D de la Figura Sedente"
    }
  },
  yax: {
    title: {
      en: "Yax - Ixiptla",
      es: "Yax - Ixiptla"
    },
    description: {
      en: "3D Experience of Yax",
      es: "Experiencia 3D de Yax"
    }
  },
  mictlan: {
    title: {
      en: "Mictlantecuhtli - Ixiptla",
      es: "Mictlantecuhtli - Ixiptla"
    },
    description: {
      en: "3D Experience of Mictlantecuhtli",
      es: "Experiencia 3D de Mictlantecuhtli"
    }
  }
} as const;

/**
 * Gets the file path for a 3D model based on its identifier.
 * @param modelId - The identifier of the 3D model
 * @returns The path to the model file in the public directory
 */
export function getModelPath(modelId: ModelId): string {
  return `/images/models/${modelId}.glb`;
}

/**
 * Retrieves the localized information for a 3D model.
 * @param modelId - The identifier of the 3D model
 * @param lang - The language code ('en' or 'es')
 * @returns The model information including title and description in the specified language
 */
export function getModelInfo(modelId: ModelId, lang: 'en' | 'es'): ModelInfo {
  const model = MODEL_INFO[modelId];
  if (!model) {
    return {
      title: {
        en: "Model Not Found - Ixiptla",
        es: "Modelo no encontrado - Ixiptla"
      },
      description: {
        en: "The requested model is not available",
        es: "El modelo solicitado no está disponible"
      }
    };
  }
  return model;
} 