// ─────────────────────────────────────────────────────────────────────
// About page content.
// ─────────────────────────────────────────────────────────────────────
import { site } from './site'

export const aboutHero = {
  title:  [site.firstName, `${site.lastName}.`],
  kicker: 'Aerospace engineer turned delivery lead. Procurement portfolios, cross-border client programmes, enterprise AI accounts, and the reporting that proves they landed.',
}

// Six quick facts. The first three also appear in the hero.
export const facts = [
  ['Role',      site.role],
  ['Firm',      site.firm],
  ['Based',     site.location],
  ['Education', 'MBA, IMT Dubai · B.Tech, UPES'],
  ['Focus',     'Programme delivery · Operations · Client success'],
  ['Status',    'Open to conversations'],
  ['Open to',   site.targetRoles],
]

// Story: three short first-person paragraphs.
export const story = {
  heading: ['From aerospace procurement', 'to enterprise AI delivery.'],
  paragraphs: [
    'I trained as an aerospace engineer at UPES and joined KassTech Aerospace in 2021. Over four years I ran procurement, tendering, sales operations and marketing for an aviation components business. That is where I learned to deliver: a ₹20 Cr+ procurement portfolio, 35+ vendors, and an ISO 9001:2015 quality system that I implemented and audited.',
    'I wanted the business side to match, so I completed a MicroMasters in Business Management with IIM Bangalore and then an MBA in Operations Management at IMT Dubai. In Dubai I interned with Sharaf DG, Gulf Well Solutions and SPANCOM, then joined Coral Wealth Investment, where I ran cross-border client delivery for 1,000+ clients and delivered AED 1.7M in revenue in 11 months.',
    'In 2026 I moved back to India and joined TrueFan AI, an enterprise AI video company, as Project Delivery Manager. I run delivery for 6+ enterprise accounts at once and sit between the founders and our clients. I use AI tools in my own delivery work, and I still look for where the business can grow, not only whether the project closed.',
  ],
}

// Three columns, five items each.
export const capabilities = [
  {
    heading: 'Delivery',
    items: [
      'Project and programme delivery',
      'Scope, milestones and risk frameworks',
      'Budgeting and cost control',
      'Cross-functional team coordination',
      'Executive reporting and governance reviews',
    ],
  },
  {
    heading: 'Operations',
    items: [
      'Procurement and vendor management',
      'Tendering and bid management',
      'ISO 9001:2015 quality systems',
      'Six Sigma process improvement',
      'SLA and service governance',
    ],
  },
  {
    heading: 'Tools and AI',
    items: [
      'Salesforce admin and workflow automation',
      'Power BI and MIS dashboards',
      'Jira, Trello and Asana',
      'Advanced Excel',
      'ChatGPT, Claude, Gemini and Copilot',
    ],
  },
]

// Most recent first.
export const education = [
  {
    degree:      'MBA, Operations Management',
    institution: 'Institute of Management Technology (IMT), Dubai',
    logo:        '/logos/imt.png',
    start:       '2023',
    end:         '2024',
  },
  {
    degree:      'MicroMasters, Business Management',
    institution: 'Indian Institute of Management Bangalore (IIMBx, via edX)',
    logo:        '/logos/iimb.png',
    start:       '2022',
    end:         '2023',
  },
  {
    degree:      'B.Tech, Aerospace Engineering (Avionics)',
    institution: 'University of Petroleum and Energy Studies (UPES), Dehradun',
    logo:        '/logos/upes.png',
    start:       '2017',
    end:         '2021',
  },
]

// Teaser line linking to the certifications on the Credentials page.
export const certTeaser = '12 certifications across quality systems, management, tools and marketing'

// "How I work": three operating principles, each grounded in the engagements above.
export const principlesHeading = ['Scope it. Govern it.', 'Deliver it.']
export const principles = [
  {
    title: 'Scope before speed',
    body: 'Every programme starts with scope, milestones and a risk framework written down and agreed, and a service governance model aligned to the regulatory and SLA requirements it has to meet. The three Coral Wealth programmes ran on one such model across five teams and three time zones.',
  },
  {
    title: 'Governance the client can see',
    body: 'Weekly governance reviews, a Power BI dashboard in place of long slide decks, and one point of accountability per account. Leadership gets no surprises, and the client gets a number it can quote: 100% SLA adherence, 25% better retention.',
  },
  {
    title: 'AI in the loop, a person on the send',
    body: 'Live task status, vendor timelines and budget burn go into Claude or ChatGPT to flag delivery risks early and draft the reporting. Every output is reviewed before it reaches a client or a founder, and nothing is copied by hand.',
  },
]

// Testimonials: 2 to 3 LinkedIn recommendations from managers, founders or clients.
// The section is hidden until this has entries. Shape: { quote, name, role }
// TODO: 2 to 3 recommendations she is happy to publish.
export const testimonials = []

// Writing: LinkedIn posts or articles worth linking, newest first. Hidden until filled.
// Shape: { title, date, href }.
// TODO: post URLs.
export const writing = []

// ── Display copy for the About page layout (restates facts above) ──
export const storyEyebrow     = 'My story'
export const glanceHeading    = 'At a glance'
export const educationHeading = ['Where it', 'started.']

// One line under each capability heading, in the same order as `capabilities`.
export const capabilityBlurbs = [
  'Scope, governance and reporting across teams and time zones.',
  'Procurement, vendors and quality systems, from four years at KassTech Aerospace.',
  'The stack I run delivery, reporting and automation on.',
]
