# Portfolio

Astro site that deploys to GitHub Pages on every push to `main`.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Fill it in

1. **`src/site.config.ts`**: your name, email, GitHub, LinkedIn, Steam link, experience, and skills. A blank link is hidden automatically.
2. **`src/content/projects/*.md`**: one file per project. Search for `TODO` and replace those comments with real details. The "Hardest problem" paragraph is the one worth taking time on.
3. **Media**: put clips and screenshots in `public/media/`, then uncomment `media:` in each project's frontmatter, e.g. `media: /media/perihelion.mp4`.
   - Short (5–15 s), muted, looping `.mp4` files work best. Keep each one under ~5 MB:
     `ffmpeg -i in.mp4 -t 12 -vf scale=1280:-2 -an -crf 28 public/media/perihelion.mp4`
   - Until you add media, each card shows a placeholder.
4. **Résumé**: drop it at `public/resume.pdf`.
5. **Add a project**: copy any `.md` file in `src/content/projects/` and set `order:` to control where it appears.

## Deploy to GitHub Pages with your domain

1. Push to `CR-DGD/CRDGD.github.io` (this repo). The site goes live at https://crdgd.github.io.
2. Repo → **Settings → Pages → Source: GitHub Actions**.
3. **Custom domain:** create `public/CNAME` containing just your domain (e.g. `yourdomain.com`), and update `site:` in `astro.config.mjs` to match.
4. At your domain registrar, **remove the Linktree redirect** and add the DNS records:
   - Apex domain (`yourdomain.com`): four `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: a `CNAME` → `crdgd.github.io`
5. Back in **Settings → Pages**, enter the custom domain, wait for the DNS check, then tick **Enforce HTTPS**.

Every push to `main` rebuilds and redeploys the site automatically after that.
