import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// Home page plus one entry per project. Add any new top-level page here.
export const GET: APIRoute = async ({ site }) => {
  const paths = ["/", ...(await getCollection("projects")).map((p) => `/projects/${p.id}/`)];
  const urls = paths.map((p) => `<url><loc>${new URL(p, site)}</loc></url>`).join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
