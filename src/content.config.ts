import { file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const artifactSchema = z.object({
  id: z.string(),
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
  loader: file('./src/data/artifacts/hum.json'),
  schema: artifactSchema,
});

const artefactos = defineCollection({
  loader: file('./src/data/artefactos/hum.json'),
  schema: artifactSchema,
});

export type ArtifactEntry = z.infer<typeof artifactSchema>;

export const collections = {
  artifacts: artifacts,
  artefactos: artefactos,
} as const;