/**
 * Maps artifact slugs to their corresponding 3D model identifiers.
 * This mapping is used to determine which 3D model should be displayed
 * for a given artifact in the collection.
 */
export const slugToModel: Record<string, string> = {
  "hummingbird-cup": "colibri",
  "male-anthropomorphic-figurine": "sedente",
  "yax-pasaj-chan-yopaat": "yax",
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