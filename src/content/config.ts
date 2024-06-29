// 1. Import utilities from `astro:content`
import { z, defineCollection, reference, type SchemaContext } from 'astro:content';

// const tags = defineCollection({
//   type: 'data',
//   schema: z.object({
//     name: z.string(),  
//   })
// })


// const projects = defineCollection({
//   type: 'content', // v2.5.0 and later
//   schema: ({ image }) => z.object({
//     title: z.string(),
//     tags: z.array(reference('tags')).default([]),
//     cover: image().optional(),
//   }),
// });

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    body: z.string(),
    href: z.string().optional(),
  }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'projects': projects,
};