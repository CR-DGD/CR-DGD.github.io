import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    period: z.string(),
    tags: z.array(z.string()),
    order: z.number().default(99),
    // Put files in public/media/ and reference them as "/media/whatever.mp4".
    // A short looping .mp4/.webm clip is best; a .gif or image also works.
    media: z.string().optional(),
    poster: z.string().optional(),
    // Shape of the clip/image as "width / height", e.g. "16 / 9" (default) or "1920 / 600".
    // Wide clips (roughly 2:1 or wider) get a full-width banner layout on the home page.
    aspect: z.string().optional(),
    accent: z.string().default("#ff7a3d"),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
  }),
});

export const collections = { projects };
