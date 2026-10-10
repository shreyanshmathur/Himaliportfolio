// ─────────────────────────────────────────────────────────────────────
// Home page content.
// ─────────────────────────────────────────────────────────────────────
import { site } from './site'

// Hero block. The headline is two lines; the second renders in italic serif.
export const hero = {
  eyebrow:  `${site.role} · ${site.firm} · ${site.city}`,
  headline: ['The operator', 'who delivers.'],
  blurb:    'Project delivery at TrueFan AI. Complex, multi-stakeholder programmes across aerospace, investment consulting and enterprise AI, delivered with an eye on where the business can grow.',
}

// Heading of the two-column section on the home page and the capabilities section on About.
export const identityHeading = ['Operational rigour.', 'Strategic impact.']

// Four stats under the ticker.
export const highlights = [
  { num: '5+',       label: 'Years in delivery',     sub: 'Aerospace · Consulting · AI tech' },
  { num: 'AED 1.7M', label: 'Revenue delivered',     sub: '11 months · Coral Wealth' },
  { num: '₹20 Cr+',  label: 'Procurement portfolio', sub: 'KassTech Aerospace' },
  { num: '6+',       label: 'Enterprise accounts',   sub: 'In parallel · TrueFan AI' },
]

// Scrolling ticker. `strong` is the number, `tail` the context.
export const tickerItems = [
  { strong: '1,000+ clients',  tail: '3 programmes · Coral Wealth' },
  { strong: '70% cut',         tail: 'Operational cycle time · Salesforce' },
  { strong: '35+ vendors',     tail: '5+ government agencies' },
  { strong: '25% lift',        tail: 'Client retention · Power BI' },
  { strong: '5 teams',         tail: '3 time zones' },
  { strong: '4 countries',     tail: 'India · UK · US · UAE' },
  { strong: '100% on time',    tail: 'Vendor delivery · 4 years' },
  { strong: '10+ trade shows', tail: '100+ leads generated' },
]

// "Worked with" row in the hero, one entry per organisation on the Experience page.
// Where `src` is null the name is set as a small wordmark instead of a logo.
// TODO: logos for Coral Wealth, SPANCOM and Gulf Well Solutions.
export const companyLogos = [
  { name: 'TrueFan AI',              src: '/logos/truefan.png' },
  { name: 'Coral Wealth',            src: null },
  { name: 'KassTech Aerospace',      src: '/logos/kasstech-lockup.png' },
  { name: 'Sharaf DG',               src: '/logos/sharafdg.png' },
  { name: 'Gulf Well Solutions',     src: null },
  { name: 'SPANCOM',                 src: null },
]

// Three featured projects. `to` must match a slug in projects.js.
export const featured = [
  {
    index: '01',
    client: 'TrueFan AI · enterprise clients',
    title: 'Six enterprise AI video accounts in parallel',
    blurb: 'One delivery owner for 6+ enterprise accounts across five sectors, accountable from kickoff to execution.',
    metricNum: '6+',
    metricLabel: 'accounts run at once',
    tags: ['Enterprise delivery', 'AI video', 'Stakeholder management'],
    to: '/projects/enterprise-ai-video-delivery',
  },
  {
    index: '02',
    client: 'Coral Wealth Investment',
    title: 'Cross-border delivery for 1,000+ clients',
    blurb: 'Three client programmes across four countries, run to one governance model.',
    metricNum: 'AED 1.7M',
    metricLabel: 'revenue in 11 months',
    tags: ['Programme governance', 'Cross-border delivery', 'SLA'],
    to: '/projects/cross-border-client-delivery',
  },
  {
    index: '03',
    client: 'KassTech Aerospace',
    title: 'Salesforce automation in aerospace procurement',
    blurb: 'Redesigned the operating process and automated it in Salesforce.',
    metricNum: '70%',
    metricLabel: 'cycle time reduced',
    tags: ['Salesforce', 'Process redesign', 'Procurement'],
    to: '/projects/salesforce-procurement-automation',
  },
]

// Two columns, seven bullets each.
export const identityColumns = [
  {
    num: '01',
    heading: 'Core Delivery',
    items: [
      'Programme and multi-project governance',
      'Enterprise account delivery',
      'Founder and stakeholder communication',
      'Scope, risk and budget control',
      'SLA and service governance',
      'Vendor and procurement management',
      'Executive reporting',
    ],
  },
  {
    num: '02',
    heading: "Operator's Edge",
    items: [
      'Six Sigma Green Belt',
      'ISO 9001:2015 Lead Auditor (SGS)',
      'Salesforce workflow automation',
      'Power BI and MIS dashboards',
      'AI-assisted reporting with ChatGPT, Claude and Gemini',
      'Tendering and bid management',
      'Business development alongside delivery',
    ],
  },
]
