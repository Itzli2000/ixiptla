import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const artifactSchema = z.object({
  title: z.string(),
  culture: z.string(),
  period: z.string(),
  image: z.string(),
  description: z.string(),
  museum: z.string(),
  location: z.string(),
  dimensions: z.string().optional(),
  material: z.string().optional(),
  technique: z.string().optional(),
  has3DModel: z.boolean().optional(),
  slug: z.string(),
});

const artifacts = defineCollection({
  loader: glob({pattern: "**/*.{md,mdx}", base: './src/content/artifacts/en/'}),
  schema: artifactSchema,
});

const artefactos = defineCollection({
  loader: glob({pattern: "**/*.{md,mdx}", base: './src/content/artifacts/es/'}),
  schema: artifactSchema,
});

export const collections = {
  artifacts,
  artefactos,
} as const;