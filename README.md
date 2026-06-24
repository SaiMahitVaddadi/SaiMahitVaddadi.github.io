# saimahitvaddadi.github.io — Mahit Vaddadi Portfolio

The personal portfolio site of **Mahit Vaddadi**, an AI Scientist at Eli Lilly working at the intersection of computational chemistry, graph neural networks, and language models for drug discovery.

🔗 **Live:** https://saimahitvaddadi.github.io/

---

## Who this is for

This site is a single resource for three audiences:

1. **Recruiters & hiring managers** — see [Resume](https://saimahitvaddadi.github.io/resume), [Projects](https://saimahitvaddadi.github.io/projects), and [Papers](https://saimahitvaddadi.github.io/papers) to get a one-page view of credentials, code, and publications.
2. **Research collaborators** — see [About](https://saimahitvaddadi.github.io/about) and [Papers](https://saimahitvaddadi.github.io/papers) for the molecular ML / drug-discovery research arc; reach out via [contact](https://saimahitvaddadi.github.io/contact).
3. **Consulting clients** — see the dark-themed [Consulting hub](https://saimahitvaddadi.github.io/consulting) which has its own nav, strategy framework (Audit → Build → Equip), case studies, capability hubs (Skills / MCP / Agents), and direct scheduling.

---

## What's on the site

### Top-level pages (7)

| Route | What's there |
|---|---|
| [`/`](https://saimahitvaddadi.github.io/) | **Home** — front matter, bio, current role at Eli Lilly + LillyPROP Platform Team, an animated SmilesDrawer caffeine molecule, links to all major sections |
| [`/about`](https://saimahitvaddadi.github.io/about) | **About** — long-form bio, CPK-coded domain cards (Chemistry / Programming / Knowledge), background timeline from Purdue (PhD Chemical Engineering) to current role |
| [`/projects`](https://saimahitvaddadi.github.io/projects) | **Projects** — technical portfolio fed from `src/data/work.ts` — molecular ML systems, infrastructure tooling, agent platforms |
| [`/papers`](https://saimahitvaddadi.github.io/papers) | **Papers** — publication list with abstracts, sourced from `src/data/writing.ts` |
| [`/resume`](https://saimahitvaddadi.github.io/resume) | **Resume** — full CV layout including the *Select Coding Projects* section drawn from across three GitHub accounts (`MahitVaddadi-Bloom`, `MahitVaddadi-115023`, `SaiMahitVaddadi`) — FastChem / RustChem LIME, Marlabs Data Accelerator suite, chemistry research portfolio |
| [`/contact`](https://saimahitvaddadi.github.io/contact) | **Contact** — direct `mailto:` cards + LinkedIn / GitHub / Scholar links |
| [`/blog`](https://saimahitvaddadi.github.io/blog) | **Blog** — long-form writing (MDX-driven, currently a stub with the empty-state design polished) |

### Consulting hub (9 routes — dark theme)

| Route | What's there |
|---|---|
| [`/consulting`](https://saimahitvaddadi.github.io/consulting) | **Hub home** — "AI that moves the needle" hero, "Most businesses are not short on data or ambition" framing, *How I engage: Audit → Build → Equip* three-card model |
| [`/consulting/strategy`](https://saimahitvaddadi.github.io/consulting/strategy) | **Strategy** — expanded breakdown of each phase (Audit / Build / Equip) with deliverables |
| [`/consulting/schedule`](https://saimahitvaddadi.github.io/consulting/schedule) | **Schedule a call** — embedded Cal.com booking widget (`cal.com/mahit/discovery`, overridable via `PUBLIC_CAL_URL` build-time env) |
| [`/consulting/projects`](https://saimahitvaddadi.github.io/consulting/projects) | **Case studies** — 3 consulting engagements |
| [`/consulting/news`](https://saimahitvaddadi.github.io/consulting/news) | **News & updates** — feed of recent work / wins |
| [`/consulting/skills-hub`](https://saimahitvaddadi.github.io/consulting/skills-hub) | **Skills hub** — CPK-color-coded domain grid covering ML / chemistry / infra / agent design |
| [`/consulting/mcp-hub`](https://saimahitvaddadi.github.io/consulting/mcp-hub) | **MCP hub** — 4 Model Context Protocol servers I publish or operate (Penpot, Daloopa, FactSet, internal MCPs) |
| [`/consulting/agents-hub`](https://saimahitvaddadi.github.io/consulting/agents-hub) | **Agents hub** — 5 production agents (earnings reviewer, GL reconciler, KYC screener, model builder, market researcher patterns) |
| [`/consulting/contact`](https://saimahitvaddadi.github.io/consulting/contact) | **Direct contact** — `mailto:` + schedule CTA, scoped for consulting inquiries |

---

## Design philosophy

A small science-laboratory aesthetic threads through the whole site:

- **Graph-paper background** (`.graph-paper-bg`) on every hero — subtle 8-px grid in `--graph-line` color
- **SmilesDrawer caffeine molecule** rendered live in the hero via the unpkg-hosted [SmilesDrawer 2.1.7](https://unpkg.com/smiles-drawer@2.1.7) CDN
- **Hex-grid motifs** in section dividers
- **CPK colors** (Carbon-Hydrogen-Nitrogen-Oxygen-…) re-mapped to domain cards — chemistry uses real CPK, programming uses a parallel palette
- **Caveat handwriting accents** (`--font-annotation`) for sidenotes, in-margin labels, and "annotations" that mimic a chem-lab notebook
- **Clover-style motion** — Vanilla [Motion](https://motion.dev/) library with stagger, terminal cursor, fade-up animations defined in `src/scripts/clover-animations.ts`
- **Dark consulting theme** — the `/consulting/*` subsite uses `ConsultingBase.astro` layout with inverted palette and a separate `ConsultingNav.astro` 9-item subnav

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | [Astro 5](https://astro.build/) | Best static-first DX, zero JS by default, MDX-friendly |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` | New v4 CSS-first config in `tokens.css` + utility classes |
| Motion | [Motion](https://motion.dev/) (vanilla) | Tiny footprint, no React runtime needed |
| Type system | TypeScript | Strict mode across data files (`work.ts`, `writing.ts`) and astro components |
| SEO | JSON-LD Person schema + canonical + OG + Twitter cards in `Base.astro` | Validated against `schema.org/Person` |
| Sitemap | [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Auto-rebuilt every deploy |
| AI discoverability | `llms.txt` + selective `robots.txt` | Blocks GPTBot / Google-Extended / CCBot from training, allows search crawlers |
| Iconography | Custom inline SVGs + favicon `favicon.svg` | Single-file color-themable favicon |
| Booking | [Cal.com](https://cal.com) iframe (default `cal.com/mahit/discovery`) | Public-URL Cal.com replaces the dev `localhost:3000` cal.diy |
| Contact | `mailto:mahit@vaddadi.ai` | No form backend needed — works offline, works on Pages, works everywhere |

### File layout (source repo)

The source lives at [`MahitVaddadi-115023/websites`](https://github.com/MahitVaddadi-115023/websites) under `portfolio/`:

```
portfolio/
├── astro.config.mjs           ← site URL + tailwind + sitemap config
├── src/
│   ├── data/
│   │   ├── work.ts            ← projects + case studies
│   │   └── writing.ts         ← publications
│   ├── layouts/
│   │   ├── Base.astro         ← light theme + JSON-LD + meta
│   │   └── ConsultingBase.astro ← dark theme for /consulting/*
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── ConsultingNav.astro
│   │   ├── HeroFrontMatter.astro  ← SmilesDrawer caffeine
│   │   └── …
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects.astro
│   │   ├── papers.astro
│   │   ├── resume.astro
│   │   ├── contact.astro
│   │   ├── blog/
│   │   └── consulting/
│   │       ├── index.astro
│   │       ├── strategy.astro
│   │       ├── schedule.astro
│   │       └── … (8 sub-routes total)
│   ├── styles/
│   │   ├── tokens.css         ← CPK colors, graph-line var, Caveat font
│   │   └── global.css         ← .graph-paper-bg, .hex-grid-bg, .callout-annotation
│   └── scripts/
│       └── clover-animations.ts ← Motion stagger / terminal / fade-up
├── public/
│   ├── llms.txt               ← AI-discoverability guidance
│   ├── robots.txt             ← crawler allowlist
│   ├── favicon.svg
│   └── og.svg
├── package.json
└── scripts/                   ← Penpot review automation tooling
    ├── penpot-browser-setup.mjs
    └── penpot-setup.mjs
```

---

## Repo structure (this repo — the deploy artifact)

```
SaiMahitVaddadi.github.io/
├── README.md                  ← this file
├── .nojekyll                  ← disables Jekyll so _astro/ assets serve
├── _astro/                    ← hashed CSS + JS bundles
├── _headers                   ← Cloudflare Pages-style headers (legacy)
├── _redirects                 ← (legacy)
├── index.html                 ← home page
├── about/index.html
├── projects/index.html
├── papers/index.html
├── resume/index.html
├── contact/index.html
├── blog/index.html
├── consulting/
│   ├── index.html
│   ├── strategy/index.html
│   ├── schedule/index.html
│   ├── projects/index.html
│   ├── news/index.html
│   ├── skills-hub/index.html
│   ├── mcp-hub/index.html
│   ├── agents-hub/index.html
│   └── contact/index.html
├── favicon.svg, favicon.ico
├── og.svg
├── robots.txt
├── llms.txt
├── sitemap-0.xml
└── sitemap-index.xml
```

**Total: 122 files across 19 top-level entries** — every route renders to its own pre-built `index.html` so GitHub Pages can serve it without a server runtime.

---

## How deployment works

This is GitHub Pages **User Pages**: the repo `<username>.github.io` is auto-detected by GitHub and served at `https://<username>.github.io/` from the root of `main`. No Pages settings to configure beyond the legacy main-branch build (which is already enabled).

A `.nojekyll` marker file is required because Astro emits its assets to `_astro/` — without it, Jekyll (GitHub Pages' default static processor) would silently exclude all files starting with `_`, breaking every page.

### Redeploy after editing the source

```bash
# 1. In MahitVaddadi-115023/websites/portfolio/
npm run build              # → produces dist/ (16 HTML files + assets)

# 2. Mirror into this repo
rsync -a --delete \
  --exclude=.git \
  --exclude=README.md \
  dist/ /path/to/saimahitvaddadi.github.io/

# 3. Push
cd /path/to/saimahitvaddadi.github.io/
git add -A
git commit -m "deploy: $(date +%F)"
git push
```

GitHub rebuilds the Pages site in ~30–90s after each push. You can watch the build with:

```bash
gh api repos/SaiMahitVaddadi/SaiMahitVaddadi.github.io/pages --jq .status
```

It cycles `queued` → `building` → `built`.

### Custom domain (future)

To swap `saimahitvaddadi.github.io` for `mahitvaddadi.com`:

1. Add a `CNAME` file containing `mahitvaddadi.com` to this repo root.
2. Set DNS A records on `mahitvaddadi.com` to GitHub Pages IPs (`185.199.108.153`, `…109.153`, `…110.153`, `…111.153`).
3. Update `portfolio/astro.config.mjs` `site:` to `https://mahitvaddadi.com` and rebuild.
4. Enable "Enforce HTTPS" in repo Settings → Pages once GitHub provisions the cert.

---

## SEO & AI discoverability

- **JSON-LD Person schema** on every page declares: name, url, jobTitle (AI Scientist), worksFor (Eli Lilly and Company), alumniOf (Purdue University), `knowsAbout` array (Machine Learning, Drug Discovery, Graph Neural Networks, Computational Chemistry, LLMs, AI Infrastructure), `sameAs` social links, email
- **Open Graph + Twitter Card** meta with a 1200×630 `og.svg` social preview
- **Sitemap** at [`/sitemap-index.xml`](https://saimahitvaddadi.github.io/sitemap-index.xml) regenerated on every build by `@astrojs/sitemap`
- **`robots.txt`** allows Googlebot / Bingbot / DuckDuckBot; blocks **GPTBot, Google-Extended, CCBot** — letting search crawlers in while keeping content out of LLM training sets
- **`llms.txt`** at the root provides a structured guide that AI assistants are encouraged to read — describes the site, biographer, areas of expertise, and how to cite

---

## What you can do from each contact surface

- **`mailto:mahit@vaddadi.ai`** (top-level contact + consulting contact) — opens local mail client
- **Cal.com** widget at `/consulting/schedule` — books a 30-min discovery call
- **LinkedIn** [`linkedin.com/in/mahitvaddadi`](https://www.linkedin.com/in/mahitvaddadi) — direct connect / message
- **GitHub** (three accounts for different sides of the work):
  - [`@MahitVaddadi-115023`](https://github.com/MahitVaddadi-115023) — primary, current production work (Marlabs accelerator suite, websites source, coding-agent, Penpot fork)
  - [`@MahitVaddadi-Bloom`](https://github.com/MahitVaddadi-Bloom) — research forks and contributions (multimodal molecular ML, RAscore, valentines-day-website)
  - [`@SaiMahitVaddadi`](https://github.com/SaiMahitVaddadi) — chemistry-research repos (FastChem / RustChem LIME, in-context-fsl-chemical-space, ChemEGAT, ChemLLM, RGD1_EGAT_Paper_Files) + this Pages repo + `github-mirror` toolkit
- **Google Scholar** — linked from About / Papers

---

## License

The site **content** (writing, photography, design) is © Mahit Vaddadi.
The site **code** is for personal use; if you find a snippet useful, feel free to crib it — attribution welcome but not required.

The source repo at [MahitVaddadi-115023/websites](https://github.com/MahitVaddadi-115023/websites) ships under the same terms.

---

*Built with Astro · deployed via GitHub Pages · canonical at https://saimahitvaddadi.github.io/*
