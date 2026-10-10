// ─────────────────────────────────────────────────────────────────────
// Identity, links and shared copy. Used by the navbar, footer, home hero,
// about hero and contact page.
//
// "TODO:" marks content still to be supplied. It shows on `npm run dev`
// and is dropped from production builds (see src/lib/content.js).
// Find them all with:  grep -rn "TODO" src public index.html
// ─────────────────────────────────────────────────────────────────────

export const site = {
  firstName: 'Himali',
  lastName:  'Verma',
  fullName:  'Himali Verma',

  role:     'Project Delivery Manager',
  firm:     'TrueFan AI',
  city:     'Gurugram',
  location: 'Gurugram, India',

  // Small line under the name in the navbar.
  navTagline: 'Delivery · TrueFan AI',

  email:    'himaliheer@gmail.com',
  linkedin: 'https://www.linkedin.com/in/himaliverma/',
  // A URL here shows GitHub in the footer and on the contact page; null hides it.
  github:   null,

  // Square headshot, served from /public.
  headshot: '/headshot.jpg',

  // Path to a CV PDF in /public. When set, Download CV links appear in the navbar, hero,
  // contact page and footer. null hides them.
  cv: '/Himali-Verma-CV.pdf',

  // One line under the name in the footer.
  footerTagline: 'Operator + Strategist + AI Orchestrator',

  // Contact page blurb.
  contactBlurb: "Open to conversations about Senior Project Manager, Founder's Office, Operations Manager and Customer Success Manager roles, in consulting, fintech or technology. Based in Gurugram and open to relocating, including to the UAE.",

  // Target roles, shown as an "Open to" line on the About page.
  targetRoles: "Senior Project Manager · Founder's Office · Operations Manager · Customer Success Manager",

  // Closing call-to-action on the home and contact pages. Two lines; the second is italic.
  ctaHeadline: ["Let's build something", 'remarkable.'],
}

// 'https://www.linkedin.com/in/x' -> 'linkedin.com/in/x' for display.
export const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
