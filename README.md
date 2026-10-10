# Himali Verma portfolio

Personal portfolio website for Himali Verma. Same codebase and design system as [shreyanshmathur/portfolio](https://github.com/shreyanshmathur/portfolio), with every piece of content moved into `src/data/` so it can be filled in without touching the page components.

**Status:** content draft. `TODO:` marks content still to be supplied: a few logos, outcomes and "what was broken before" paragraphs. Find them with `grep -rn "TODO" src public index.html`. TODO text shows on `npm run dev` only: production builds drop it, and a case-study section with nothing finished in it is skipped (see `src/lib/content.js`).

**Live site:** https://himaliverma.netlify.app *(placeholder URL until the Netlify site exists; see "Filling in the content", step 5)*

---

## Stack

- **React 18** + **Vite 5**
- **React Router v6** (HashRouter for static deployment)
- **CSS** only, no UI framework
- **Google Fonts**: Instrument Serif, DM Sans

## Pages

| Route | Page | Content lives in |
|---|---|---|
| `/` | Home: hero, results bar, where I fit, career timeline, three featured projects, how I work, credentials, Let's talk | `src/data/home.js`, `src/data/site.js`, `src/data/about.js` |
| `/#/experience` | Experience: one row per role, each opening a side panel with engagements | `src/data/experience.js` |
| `/#/projects` | Projects: filterable case-study list | `src/data/projects.js` |
| `/#/projects/:slug` | One case-study page per project: Challenge, Approach, Outcome, Toolkit | `src/data/projects.js` |
| `/#/about` | About: hero, story, quick facts, capabilities, education | `src/data/about.js`, `src/data/site.js` |
| `/#/activities` | Credentials: certifications by category (leadership section appears once `activities` has entries) | `src/data/activities.js` |
| `/#/contact` | Contact: what she is looking for, booking link, email, LinkedIn, CV | `src/data/site.js` |

## Filling in the content

1. **Content lives in `src/data/`.** Each page reads from the data file named in the table above.
2. **Replace every placeholder** in `src/data/*.js`. Find them all with:
   ```bash
   grep -rn "TODO" src public index.html
   ```
   Add or remove roles, projects, activities and certifications freely; the pages render whatever is in the arrays. Keep `index` values sequential and project `slug`s unique.
3. **Images.** The headshot is `public/headshot.jpg`, referenced from `src/data/site.js`. Logos live in `public/logos/` and are referenced from the `logos` maps in `experience.js` and `activities.js`, the `logo` field on each certification and each education entry. A `null` logo shows a monogram tile; `mono` overrides the letters. The home hero sets organisation names as text (`companyNames` in `home.js`). Still without a logo: Coral Wealth, SPANCOM, Gulf Well Solutions, SGS and the International Six Sigma Institute.
4. **CV.** `public/Himali-Verma-CV.pdf` is served by the Download CV links in the navbar, hero, contact page and footer (`cv` in `src/data/site.js`; `null` hides them all). Replace the file to update it.
5. **Site URL.** Replace `https://himaliverma.netlify.app` in `index.html`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt` and this README with the real URL.
6. **Contact details still to supply** (`src/data/site.js`): `booking` takes a Calendly or Cal.com link and adds a "Book a 20-minute call" button; the `lookingFor` rows for notice period, UAE visa status and work style stay hidden until their TODOs are replaced.
7. **Optional sections that appear once filled** (`src/data/about.js`): `testimonials` adds an "In their words" section to About (the first one also shows on Home); `writing` adds a list of linked posts (the newest also shows on Home). In `src/data/home.js`, `workSample` adds an anonymised work sample under "How I work" once `image` is set. Each project's `role` line shows in the case-study stripe.
8. **Crawler copies.** `index.html` (title, meta tags, Open Graph, JSON-LD and the `<noscript>` block) and `public/llms.txt` are static duplicates of the site content for search engines and AI assistants. Keep them in step with the data files whenever content changes.

## Local development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`

## Deployment

Netlify config is included (`netlify.toml`). To deploy:

1. Push to GitHub
2. Connect the repo on [netlify.com](https://netlify.com)
3. Build command: `npm run build`. Publish directory: `dist`
4. Netlify auto-deploys on every push to `main`
