// ─────────────────────────────────────────────────────────────────────
// Experience page content.
// Each entry is one row; clicking it opens a side panel with `context`,
// `engagements` and `tools`. Ordered by end date, most recent first.
// `metric` and an engagement's `outcome` may be null; the page hides them.
// ─────────────────────────────────────────────────────────────────────

// Logo per organisation, keyed by the exact `firm` string used below. null shows a monogram tile.
export const logos = {
  'TrueFan AI':              '/logos/truefan.png',
  'Coral Wealth Investment': '/logos/coralwealth.png',
  'KassTech Aerospace':      '/logos/kasstech.png',
  'SPANCOM':                 '/logos/spancom.png',
  'Gulf Well Solutions':     '/logos/gulfwell.png',
  'Sharaf DG':               '/logos/sharafdg.png',
}

// One sentence under the page title.
export const pageKicker = 'Aerospace, investment consulting and enterprise AI, across India and the UAE. One thread: scope it, govern it, deliver it on time, and put the numbers in front of leadership.'

// Page display copy. Restates facts already on this page; counts such as years,
// organisations and full-time roles are computed from `experiences` in Experience.jsx.
export const overview = {
  title:     ['Six roles.', 'One consistent thread.'],
  countries: { num: '2', label: 'countries: India and the UAE' },
  onTime:    { num: '100%', label: 'on-time delivery at Coral Wealth and KassTech' },
  timelineHeading:    ['Full-time roles,', 'most recent first.'],
  timelineNote:       'Open any role for the context, the engagements behind it, their outcomes and the tools used.',
  internshipsHeading: ['Earlier:', 'internships during the MBA in Dubai.'],
  credLabel:   'Credentials',
  credHeading: ['Certified in the method,', 'not only the job.'],
}

// Strip above the footer that links to the Credentials page.
export const teaser = {
  label:    'Six Sigma Green Belt · ISO 9001:2015 Lead Auditor · IMT Dubai MBA',
  linkText: 'See credentials →',
}

export const experiences = [
  {
    index: '01',
    firm: 'TrueFan AI',
    role: 'Project Delivery Manager',
    period: 'Apr 2026 - Present',
    type: 'Full-time',
    metric: { num: '6+', label: 'enterprise accounts at once' },
    bullets: [
      'Runs delivery for 6+ enterprise accounts at once across BFSI, paints, building materials, NBFC and home lifestyle, with no missed deadlines.',
      'First point of contact between the founding team and clients: turns complex briefs into execution plans and coordinates delivery through completion.',
      'Manages competing priorities daily across very different industries, from a public sector bank to a paints major, keeping quality consistent.',
    ],
    context: 'TrueFan AI is a Series A enterprise AI video company. Owns end-to-end delivery of AI-powered personalised content and campaigns for its enterprise clients, as the single point of accountability from kickoff to execution, sitting between the founders, the internal teams and the client.',
    engagements: [
      {
        title: 'Multi-account enterprise delivery',
        client: 'Enterprise brands across five sectors · names withheld',
        description: 'Owns 6+ large brand engagements in parallel, accountable for each from kickoff to execution. Every account arrives with its own brief, stakeholders and deadlines, from a public sector bank to a paints major, and all of them run at once.',
        outcome: 'No missed deadlines since April 2026.',
      },
      {
        title: 'Founder and client liaison',
        client: 'Founding team and delivery teams',
        description: 'First point of contact between the founding team and each client. Translates client asks into execution plans and keeps the internal teams aligned through to completion.',
        outcome: 'TODO: outcome for this workstream (volumes delivered, turnaround times, renewals or expansions).',
      },
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Excel dashboards', 'Trello', 'Jira'],
  },
  {
    index: '02',
    firm: 'Coral Wealth Investment',
    role: 'Project & Operations Manager',
    period: 'Jan 2025 - Dec 2025',
    type: 'Full-time',
    metric: { num: 'AED 1.7M', label: 'revenue in 11 months' },
    bullets: [
      'Managed cross-border client delivery for 1,000+ clients, running 3 programmes at once from scoping through delivery and final reporting.',
      'Coordinated 5 cross-functional teams across 3 time zones; 100% of projects delivered on time and within budget over 12 months.',
      'Introduced Power BI dashboards that improved client retention by 25% and gave C-suite leadership real-time visibility.',
    ],
    context: 'Coral Wealth is a Dubai investment and consulting firm. Ran its client delivery programmes and investment and consulting projects across the UAE, the UK, the US and India, and owned the business development pipeline alongside delivery.',
    engagements: [
      {
        title: 'Cross-border client delivery programmes',
        client: 'Finance, Operations and Client Servicing teams',
        description: 'Defined project scope, milestones, risk frameworks and service governance models aligned with regulatory and SLA requirements. Coordinated the three teams across every client touchpoint, with 1,000+ clients served across three simultaneous programmes.',
        outcome: '100% SLA adherence across client touchpoints.',
      },
      {
        title: 'Revenue and business development',
        client: 'New and existing clients',
        description: 'Identified client opportunities, ran needs assessments, led negotiations and closed deals, alongside the delivery role.',
        outcome: 'AED 1.7M revenue within 11 months.',
      },
      {
        title: 'Leadership reporting',
        client: 'Senior management',
        description: 'Introduced Power BI dashboards, ran weekly governance reviews and delivered executive-level business performance reporting in place of long slide decks.',
        outcome: 'Client retention up 25%. Real-time visibility for the C-suite.',
      },
      {
        title: 'Investment projects',
        client: 'Legend Maritime Cargo · Fortune Robotics · Silicon Institute',
        description: 'TODO: what each project was and her part in it.',
        outcome: null,
      },
    ],
    tools: ['Power BI', 'CRM databases', 'Excel'],
  },
  {
    index: '03',
    firm: 'KassTech Aerospace',
    role: 'Manager (Applications)',
    period: 'Jan 2021 - Jan 2025',
    type: 'Full-time',
    metric: { num: '₹20 Cr+', label: 'procurement portfolio' },
    bullets: [
      'Directed a procurement and operations portfolio worth ₹20 Cr+ across aviation and aerospace projects.',
      'Managed 35+ vendors and OEM suppliers, including 5+ government agencies, with 100% on-time delivery.',
      'Cut operational cycle time by 70% through Salesforce CRM workflow automation and process redesign.',
    ],
    context: 'KassTech distributes, sells and maintains aviation components, including aircraft engines, parts and infrared thermal cores. Joined as Application Engineer and over four years ran procurement, tendering, sales operations and marketing, led cross-functional teams across procurement, engineering and supply chain, and implemented and audited the ISO 9001:2015 quality management system as internal auditor.',
    engagements: [
      {
        title: 'Procurement and vendor portfolio',
        client: 'Procurement, engineering and supply chain',
        description: 'Managed the procurement lifecycle for aviation components and spares: quotations, purchase orders and product records, with purchase order and tender values from ₹1 lakh to ₹10 crore. Handled OEM supplier relationships and tracked vendor KPIs, cost and contracts.',
        outcome: '100% on-time delivery across 35+ vendors, including 5+ government agencies.',
      },
      {
        title: 'Salesforce automation and MIS dashboards',
        client: 'Internal operations',
        description: 'Acted as Salesforce administrator: configured workflows, redesigned the operating process around them, and built MIS dashboards tracking vendor KPIs, cost performance and contracts.',
        outcome: 'Operational cycle time down 70%.',
      },
      {
        title: 'ISO 9001:2015 quality management system',
        client: 'Company-wide',
        description: 'Implemented and audited the QMS as an SGS-certified Lead Auditor, supporting audit readiness, risk management and continued compliance across distribution, sales and maintenance.',
        outcome: 'TODO: certification date or audit result.',
      },
      {
        title: 'Government tendering',
        client: 'Government and public sector buyers',
        description: 'Led bidding end to end: evaluating tender documents, building presentations, supporting pricing, managing online bids and closing contracts.',
        outcome: 'TODO: tenders won or total value.',
      },
      {
        title: 'Marketing and exhibitions',
        client: 'Business development',
        description: 'Ran the company website, SEO, SEM, PPC, email and social campaigns with Google Analytics reporting, and managed exhibition stalls at industry shows.',
        outcome: '10+ trade shows including Dubai Airshow and AeroExpo. 100+ leads, 40% converted into qualified opportunities.',
      },
    ],
    tools: ['Salesforce', 'Advanced Excel', 'MIS dashboards', 'Google Analytics', 'SEO tools', 'Wix', 'Canva'],
  },
  {
    index: '04',
    firm: 'SPANCOM',
    role: 'Administrative Manager (Intern)',
    period: 'Sep 2024 - Oct 2024',
    type: 'Internship',
    metric: null,
    bullets: [
      'Coordinated daily task tracking and cross-team communication.',
      'Supported FTA VAT and corporate tax documentation and compliance.',
      'Reported directly to the CEO and kept operations aligned for client engagements.',
    ],
    context: 'A two-month hybrid internship in Dubai during the MBA, reporting directly to the CEO. TODO: one line on what SPANCOM does.',
    engagements: [
      {
        title: 'Operations and compliance support',
        client: 'Office of the CEO',
        description: 'Coordinated daily task tracking and cross-team communication, supported FTA VAT and corporate tax documentation and compliance, and kept operations aligned for client engagements.',
        outcome: 'TODO: an outcome, if one can be stated.',
      },
    ],
    tools: [],   // TODO: tools used
  },
  {
    index: '05',
    firm: 'Gulf Well Solutions',
    role: 'Digital Marketing Intern',
    period: 'Apr 2024 - Aug 2024',
    type: 'Internship',
    metric: { num: '+35%', label: 'inbound inquiries' },
    bullets: [
      'Increased LinkedIn engagement by 15%, from 1,040 to 1,196 interactions a month.',
      'Boosted reposts by 1,050% using SEO-optimised technical content.',
      'Produced 45+ content assets with 100% on-time delivery and raised product page visits by 28%.',
    ],
    context: 'A five-month remote internship during the MBA, focused on technical content and LinkedIn for the company\'s products. TODO: one line on what Gulf Well Solutions sells.',
    engagements: [
      {
        title: 'SEO-led technical content programme',
        client: 'Marketing',
        description: 'Planned and produced SEO-optimised technical content for LinkedIn and the product pages: 45+ assets, all delivered on schedule.',
        outcome: 'Inbound inquiries up 35%. LinkedIn engagement up 15%, reposts up 1,050%, product page visits up 28%.',
      },
    ],
    tools: ['LinkedIn', 'SEO'],
  },
  {
    index: '06',
    firm: 'Sharaf DG',
    role: 'Project Coordinator Intern',
    period: 'Nov 2023 - Feb 2024',
    type: 'Internship',
    metric: null,
    bullets: [
      'Supported Provisional Acceptance Certification submissions and documentation for UAE government projects.',
      'Coordinated project closeout approvals and stakeholder documentation.',
    ],
    context: 'A four-month on-site internship with the Energy Division at the start of the MBA, working on closeout documentation for UAE government infrastructure projects.',
    engagements: [
      {
        title: 'Project closeout documentation',
        client: 'Energy Division · UAE government projects',
        description: 'Supported Provisional Acceptance Certification submissions and documentation, and coordinated closeout approvals and stakeholder documentation.',
        outcome: 'TODO: number of projects or submissions handled.',
      },
    ],
    tools: [],   // TODO: tools used
  },
]
