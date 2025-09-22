import { z, defineCollection } from "astro:content";
import { file } from "astro/loaders";

const plates = defineCollection({
	loader: file("src/data/plates.json"),
	schema: z.object({
		slug: z.string(),
		prettyName: z.string(),
		description: z.string(),
		plates: z.array(
			z.object({
				name: z.string(),
				description: z.string(),
				price: z.number(),
			})
		),
	}),
});

const dabba = defineCollection({
	loader: file("src/data/dabba.json"),
	schema: z.object({
		slug: z.string(),
		prettyName: z.string(),
		description: z.string(),
		plates: z.array(
			z.object({
				name: z.string(),
				description: z.string(),
				price: z.number(),
			})
		),
	}),
});

const nonVegMenu = defineCollection({
	loader: file("src/data/non-veg-menu.json"),
	schema: z.object({
		slug: z.string(),
		prettyName: z.string(),
		description: z.string(),
		plates: z.array(
			z.object({
				name: z.string(),
				description: z.string(),
				price: z.number(),
			})
		),
	}),
});


const reviews = defineCollection({
	loader: file("src/data/reviews.json"),
	schema: z.object({
		author: z.string(),
		review: z.string(),
	}),
});

const gallery = defineCollection({
	loader: file("src/data/gallery.json"),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			alt: z.string(),
			image: image(),
		}),
});

export const collections = { plates, dabba, reviews, gallery, nonVegMenu };
