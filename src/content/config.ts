
// const tags = defineCollection({
//   type: 'data',
//   schema: z.object({
//     name: z.string(),  
//   })
// })

import { defineCollection } from "astro/content/runtime";
import { z } from "astro/zod";
import { reference } from "astro:content";


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
    tags: z.array(reference('tags')).default([]),
  }),
});

const tags = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
  })
});

export const collections = { projects ,tags };