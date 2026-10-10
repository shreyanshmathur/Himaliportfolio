// ─────────────────────────────────────────────────────────────────────
// Credentials page (route /activities).
// The leadership section is hidden while `activities` is empty. Fill the
// template below and add it to `activities` to bring it back.
// ─────────────────────────────────────────────────────────────────────

export const pageEyebrow = '04 / Credentials'
export const pageTitle   = ['Credentials', 'and continued learning.']
export const pageKicker  = 'Twelve certifications across quality systems, business and management, tools and marketing, alongside the MBA at IMT Dubai and the IIM Bangalore MicroMasters.'

// Logo per organisation, keyed by the exact `org` string used in `activities`.
export const logos = {
  'Infinity Space Club, UPES': null,   // null shows a monogram tile
}

export const activities = []

// Template for the campus role, once Himali supplies the detail:
// {
//   index: 'L1',
//   org: 'Infinity Space Club, UPES',
//   role: 'Secretary',
//   period: '2020',
//   metric: { num: 'TODO', label: 'TODO: headline metric' },
//   bullets: ['TODO', 'TODO', 'TODO'],
//   context: 'TODO: what the club is and what she led.',
//   highlights: [{ title: 'TODO', description: 'TODO', outcome: 'TODO' }],
//   skills: ['TODO'],
// }

// Certifications grouped by category. `logo: null` shows a monogram tile (`mono` overrides it).
export const certGroups = [
  {
    heading: 'Quality and process',
    certs: [
      { org: 'SGS',                               title: 'ISO 9001:2015 Lead Auditor',          date: 'Oct 2021', logo: '/logos/sgs.svg' },
      { org: 'International Six Sigma Institute', title: 'Six Sigma Green Belt (CSSGB)',        date: 'Sep 2025', logo: '/logos/sixsigma.png' },
    ],
  },
  {
    heading: 'Business and management',
    certs: [
      { org: 'IIMBx · edX', title: 'MicroMasters in Business Management',       date: 'Feb 2023', logo: '/logos/iimb.png' },
      { org: 'edX',         title: 'Operations Management',                      date: 'Feb 2023', logo: '/logos/edx.png' },
      { org: 'edX',         title: 'Strategic Management',                       date: 'Nov 2022', logo: '/logos/edx.png' },
      { org: 'edX',         title: 'Corporate Finance',                          date: 'Sep 2022', logo: '/logos/edx.png' },
      { org: 'edX',         title: 'Accounting for Decision-Making',             date: 'Jul 2022', logo: '/logos/edx.png' },
      { org: 'edX',         title: 'Marketing Management',                       date: 'Jun 2022', logo: '/logos/edx.png' },
      { org: 'edX',         title: 'People Management',                          date: 'Mar 2022', logo: '/logos/edx.png' },
    ],
  },
  {
    heading: 'Tools',
    certs: [
      { org: 'Atlassian', title: 'Jira Fundamentals Badge', date: 'Jun 2022', logo: '/logos/atlassian.png' },
    ],
  },
  {
    heading: 'Marketing',
    certs: [
      { org: 'Harvard University Online', title: 'Digital Marketing Strategy',    date: '2021', logo: '/logos/harvard.png' },
      { org: 'Coursera',                  title: 'Marketing in a Digital World',  date: '2020', logo: '/logos/coursera.png' },
    ],
  },
]

// ── Display copy for the Credentials page layout (restates facts above) ──
// Flagship credentials shown as large featured cards, matched by `title` in certGroups.
export const flagships = [
  { title: 'ISO 9001:2015 Lead Auditor',   note: 'Put to work at KassTech Aerospace, where I implemented and audited the ISO 9001:2015 quality management system.' },
  { title: 'Six Sigma Green Belt (CSSGB)', note: 'Six Sigma process improvement, part of the operations toolkit I bring to delivery.' },
]
export const statLabels = {
  certs:      'Certifications',
  categories: 'Categories',
  issuers:    'Issuing institutions',
}
