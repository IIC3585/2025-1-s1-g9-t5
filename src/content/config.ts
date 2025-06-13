import { defineCollection, z } from 'astro:content';

const genresCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    icon: z.string().optional(),
  }),
});

export const collections = {
  'genres': genresCollection,
}; 