# saimahitvaddadi.github.io

Static build of the personal portfolio site for **Mahit Vaddadi** — AI Scientist at Eli Lilly, computational chemistry × ML.

**Live site:** https://saimahitvaddadi.github.io/

## What this repo is

This is the **deployment artifact** repo — it contains the pre-built static output of the Astro site. GitHub Pages serves it directly from `main` at the root path. The source code lives at:

[MahitVaddadi-115023/websites](https://github.com/MahitVaddadi-115023/websites) → `portfolio/`

## Pages

| Section | Route |
|---|---|
| Home | [`/`](https://saimahitvaddadi.github.io/) |
| About | [`/about`](https://saimahitvaddadi.github.io/about) |
| Projects | [`/projects`](https://saimahitvaddadi.github.io/projects) |
| Papers | [`/papers`](https://saimahitvaddadi.github.io/papers) |
| Resume | [`/resume`](https://saimahitvaddadi.github.io/resume) |
| Contact | [`/contact`](https://saimahitvaddadi.github.io/contact) |
| Blog | [`/blog`](https://saimahitvaddadi.github.io/blog) |
| **Consulting hub** | [`/consulting`](https://saimahitvaddadi.github.io/consulting) |
| ↳ Strategy | [`/consulting/strategy`](https://saimahitvaddadi.github.io/consulting/strategy) |
| ↳ Schedule | [`/consulting/schedule`](https://saimahitvaddadi.github.io/consulting/schedule) |
| ↳ Projects | [`/consulting/projects`](https://saimahitvaddadi.github.io/consulting/projects) |
| ↳ News | [`/consulting/news`](https://saimahitvaddadi.github.io/consulting/news) |
| ↳ Skills Hub | [`/consulting/skills-hub`](https://saimahitvaddadi.github.io/consulting/skills-hub) |
| ↳ MCP Hub | [`/consulting/mcp-hub`](https://saimahitvaddadi.github.io/consulting/mcp-hub) |
| ↳ Agents Hub | [`/consulting/agents-hub`](https://saimahitvaddadi.github.io/consulting/agents-hub) |
| ↳ Contact | [`/consulting/contact`](https://saimahitvaddadi.github.io/consulting/contact) |

## Tech stack

- **Framework:** [Astro 5](https://astro.build/) — static site generator
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Motion:** Vanilla [Motion](https://motion.dev/) (Clover-style stagger, terminal cursor, fade-up)
- **Identity:** Chemistry-themed — SmilesDrawer caffeine molecule hero, graph-paper background, hex-grid motifs, CPK-color domain cards, Caveat handwriting accents
- **SEO + AI:** JSON-LD Person schema, canonical URLs, full `llms.txt`, `robots.txt` blocking GPTBot / Google-Extended / CCBot
- **Sitemap:** Auto-generated via `@astrojs/sitemap` → [`sitemap-index.xml`](https://saimahitvaddadi.github.io/sitemap-index.xml)

## Deploying updates

The deployment is a **straight `dist/` copy**. From the source repo:

```bash
# In MahitVaddadi-115023/websites/portfolio/
npm run build

# Then copy dist/* into this repo and push
rsync -a --delete --exclude=.git --exclude=README.md \
  dist/ /path/to/saimahitvaddadi.github.io/
cd /path/to/saimahitvaddadi.github.io/
git add -A && git commit -m "deploy: $(date +%F)" && git push
```

GitHub Pages rebuilds in ~1 minute after every push to `main`. A `.nojekyll` file is present so the `_astro/` asset directory serves correctly (Jekyll would otherwise hide `_`-prefixed paths).

## Contact

- Email: [mahit@vaddadi.ai](mailto:mahit@vaddadi.ai)
- LinkedIn: [linkedin.com/in/mahitvaddadi](https://www.linkedin.com/in/mahitvaddadi)
- GitHub (primary): [@MahitVaddadi-115023](https://github.com/MahitVaddadi-115023)
- GitHub (research): [@MahitVaddadi-Bloom](https://github.com/MahitVaddadi-Bloom)
- GitHub (this account): [@SaiMahitVaddadi](https://github.com/SaiMahitVaddadi)
