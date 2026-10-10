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
  navTagline: 'Project Delivery Manager',

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
  footerTagline: 'Project Delivery Manager · Gurugram, India',

  // Booking link for "Book a 20-minute call" (Calendly, Cal.com or similar). null hides the button.
  // TODO: her booking link.
  booking: null,

  // Contact page blurb.
  contactBlurb: "Open to conversations about Senior Project Manager, Founder's Office, Operations Manager and Customer Success Manager roles, in consulting, fintech or technology. Based in Gurugram and open to relocating, including to the UAE.",

  // Target roles, shown as an "Open to" line on the About page.
  targetRoles: "Senior Project Manager · Founder's Office · Operations Manager · Customer Success Manager",

  // Availability pill in the home hero.
  openTo: "Open to Senior PM, Founder's Office, Operations and Customer Success roles · India or UAE",

  // "What I'm looking for" list beside the contact actions on Home and Contact.
  // A row whose value is only a TODO is hidden on the live site.
  lookingFor: [
    ['Roles',         "Senior Project Manager, Founder's Office, Operations Manager, Customer Success Manager"],
    ['Sectors',       'Consulting, fintech, technology'],
    ['Location',      'Gurugram, India · open to relocating to the UAE'],
    ['Notice period', 'TODO: number of days, e.g. 30 days'],
    ['UAE visa',      'TODO: visa status, e.g. needs sponsorship'],
    ['Work style',    'TODO: e.g. on-site or hybrid'],
  ],

  // Closing call-to-action on the home and contact pages. The second part is italic.
  ctaHeadline: ['Hiring for delivery, operations, customer success or a', "founder's office?"],
}

// 'https://www.linkedin.com/in/x' -> 'linkedin.com/in/x' for display.
export const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
