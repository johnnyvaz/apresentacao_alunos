import { defineCollection, z } from 'astro:content';

export const collections = {
	person: defineCollection({
		schema: z.object({
			title: z.string(),
			name: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			github: z.string(),
			instagram: z.string(),
		}),
	}),

};

