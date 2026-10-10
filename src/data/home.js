// ─────────────────────────────────────────────────────────────────────
// Home page content.
// ─────────────────────────────────────────────────────────────────────
import { site } from './site'

// Hero block. The label line sits above the headline; the headline's second part renders in italic serif.
export const hero = {
  label:    `${site.role}, ${site.firm}`,
  headline: ['Complex programmes, delivered on time,', 'with the numbers to prove it.'],
  blurb:    'Five years of delivery across aerospace procurement, cross-border investment consulting and enterprise AI, in India and the UAE.',
}

// Heading of the capabilities section on About.
export const identityHeading = ['Operational rigour.', 'Strategic impact.']

// Two result badges floating on the hero portrait (desktop and tablet).
export const heroBadges = [
  { num: 'AED 1.7M', label: 'revenue closed in 11 months' },
  { num: '6+',       label: 'enterprise accounts at once' },
]

// Results bar under the hero: four numbers, each tied to where it happened.
export const highlights = [
  { num: 'AED 1.7M', label: 'Revenue closed in 11 months',    sub: 'Coral Wealth Investment, Dubai' },
  { num: '₹20 Cr+',  label: 'Procurement portfolio directed', sub: 'KassTech Aerospace, 35+ vendors' },
  { num: '25%',      label: 'Better client retention',        sub: 'Power BI reporting, Coral Wealth' },
  { num: '6+',       label: 'Enterprise accounts at once',    sub: 'TrueFan AI, no missed deadlines' },
]

// "Worked with" row in the hero, one entry per organisation on the Experience page.
// Set as typeset names so all six read the same.
export const companyNames = [
  'TrueFan AI',
  'Coral Wealth',
  'KassTech Aerospace',
  'Sharaf DG',
  'Gulf Well Solutions',
  'SPANCOM',
]

// "Where I fit": one card per kind of target role, each with her matching evidence.
export const fitHeading = ['Three kinds of role.', 'The same track record.']
export const fit = [
  {
    role: 'Delivery and Operations',
    heading: 'Programmes that land on time, at scale.',
    evidence: [
      '₹20 Cr+ procurement portfolio, 35+ vendors, 100% on time',
      '70% shorter cycle time through Salesforce automation',
      'ISO 9001 Lead Auditor, Six Sigma Green Belt',
    ],
  },
  {
    role: "Founder's Office",
    heading: 'A second pair of hands for the founder.',
    evidence: [
      "First point of contact between TrueFan's founders and clients",
      'Weekly governance reviews and live reporting for leadership',
      'AED 1.7M closed alongside running delivery',
    ],
  },
  {
    role: 'Customer Success',
    heading: 'Clients who stay, and say so.',
    evidence: [
      '1,000+ clients served across four countries',
      '25% better retention, 100% SLA adherence',
      '6+ enterprise accounts at once, no missed deadlines',
    ],
  },
]

// Career timeline. The last entry is highlighted as current.
export const careerHeading = ['From aerospace procurement to', 'enterprise AI delivery.']
export const career = [
  { years: '2017 – 2021', place: 'UPES, Dehradun',          note: 'B.Tech, Aerospace Engineering (Avionics)' },
  { years: '2021 – 2025', place: 'KassTech Aerospace',      note: 'Manager (Applications). Procurement, tendering, ISO 9001 quality system.' },
  { years: '2023 – 2024', place: 'IMT Dubai',               note: 'MBA, Operations Management. Internships at Sharaf DG, Gulf Well Solutions, SPANCOM.' },
  { years: '2025',        place: 'Coral Wealth Investment', note: 'Project & Operations Manager. 1,000+ clients across four countries.' },
  { years: '2026 – now',  place: 'TrueFan AI, Gurugram',    note: 'Project Delivery Manager. Enterprise AI video for 6+ brands in parallel.' },
]

// Three featured projects. `to` must match a slug in projects.js; the "My role" line comes from that project's `role`.
// `fits` tags each project with the kind of role it speaks to.
export const featured = [
  {
    client: 'TrueFan AI · enterprise clients',
    title: 'Six enterprise AI video accounts in parallel',
    blurb: 'One delivery owner for 6+ enterprise accounts across five sectors, accountable from kickoff to execution.',
    metricNum: '6+',
    metricLabel: 'enterprise accounts run at once',
    fits: ['Delivery', 'Customer Success'],
    to: '/projects/enterprise-ai-video-delivery',
  },
  {
    client: 'Coral Wealth Investment',
    title: 'Cross-border delivery for 1,000+ clients',
    blurb: 'Three client programmes across four countries, run to one governance model.',
    metricNum: 'AED 1.7M',
    metricLabel: 'revenue in 11 months',
    fits: ["Founder's Office", 'Customer Success'],
    to: '/projects/cross-border-client-delivery',
  },
  {
    client: 'KassTech Aerospace',
    title: 'Salesforce automation in aerospace procurement',
    blurb: 'Redesigned the operating process, then automated it in Salesforce.',
    metricNum: '70%',
    metricLabel: 'cycle time reduced',
    fits: ['Operations'],
    to: '/projects/salesforce-procurement-automation',
  },
]

// "In practice" card under How I work: one anonymised work sample (a weekly governance report,
// RAID log or dashboard, client names removed). Hidden until `image` is set.
// TODO: an image in /public (e.g. '/work-sample.png'), a title and a one-line caption.
export const workSample = {
  image:   null,
  alt:     'TODO: what the image shows',
  title:   'TODO: e.g. The weekly review leadership actually reads',
  caption: 'TODO: one line on what it is and what it changed',
}

// Credentials strip: four headline credentials. The Credentials page lists all of them.
export const credentialHighlights = [
  { title: 'Six Sigma Green Belt',              meta: 'International Six Sigma Institute · 2025' },
  { title: 'ISO 9001:2015 Lead Auditor',        meta: 'SGS · 2021' },
  { title: 'MBA, Operations Management',        meta: 'IMT Dubai · 2024' },
  { title: 'MicroMasters, Business Management', meta: 'IIM Bangalore via edX · 2023' },
]
