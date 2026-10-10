import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import { clean, cleanList } from '../lib/content'
import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import CountUp from '../components/CountUp'
import LetsTalk from '../components/LetsTalk'
import './ProjectDetail.css'

// An outcome that opens with a figure ("AED 1.7M revenue…", "100% SLA…", "35+ vendors…")
// is shown as a big number over the rest of the sentence.
const LEAD_FIGURE = /^((?:AED|₹|\+)\s?[\d][\d,.]*\s?(?:M|Cr\+?|%|\+)?|[\d][\d,.]*(?:%|\+)?)\s+(.+)$/

function splitFigure(text) {
  const m = text.match(LEAD_FIGURE)
  if (!m) return null
  return { num: m[1], rest: m[2] }
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <Navigate to="/projects" replace />
  // Keyed by slug so prev/next navigation remounts the page and its reveals.
  return <CaseStudy key={slug} project={project} />
}

function CaseStudy({ project }) {
  const { slug } = project
  const r1 = useReveal()

  const currentIndex = projects.findIndex(p => p.slug === slug)
  const prev = projects[currentIndex - 1]
  const next = projects[currentIndex + 1]

  const overview = clean(project.overview)
  const role = clean(project.role)
  const problem = clean(project.problem)
  const solution = clean(project.solution)
  const features = cleanList(project.features)
  const outcomes = cleanList(project.outcomes)
  const stack = cleanList(project.stack)

  const facts = [
    { label: 'Client', value: project.client, icon: <BuildingIcon /> },
    role && { label: 'My role', value: role, icon: <PersonIcon /> },
    { label: 'Type', value: project.kind, icon: <TagIcon /> },
    stack.length > 0 && { label: 'Stack', value: stack.slice(0, 3).join(' · '), icon: <StackIcon /> },
  ].filter(Boolean)

  // Sections with no finished content are skipped, and the rest renumber.
  const sections = [
    problem && {
      label: 'Challenge',
      heading: 'The brief, and what made it hard.',
      body: <p className="cs-lead">{problem}</p>,
    },
    (solution || features.length > 0) && {
      label: 'Approach',
      heading: 'How it was built and structured.',
      body: (
        <>
          {solution && <p className="cs-lead">{solution}</p>}
          {features.length > 0 && (
            <ul className="cs-checklist">
              {features.map((f, i) => (
                <li key={i}>
                  <span className="cs-check" aria-hidden="true"><CheckIcon /></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      ),
    },
    outcomes.length > 0 && {
      label: 'Outcome',
      heading: 'What landed, and how it was measured.',
      body: (
        <ul className={`cs-outcomes${outcomes.length === 1 ? ' is-single' : ''}`}>
          {outcomes.map((o, i) => {
            const fig = splitFigure(o)
            return (
              <li key={i} className={`cs-outcome${fig ? ' has-figure' : ''}`}>
                {fig ? (
                  <>
                    <CountUp value={fig.num} className="cs-outcome-num" />
                    <span className="cs-outcome-text">{fig.rest}</span>
                  </>
                ) : (
                  <>
                    <span className="cs-check cs-check-lg" aria-hidden="true"><CheckIcon /></span>
                    <span className="cs-outcome-text">{o}</span>
                  </>
                )}
              </li>
            )
          })}
        </ul>
      ),
    },
    (stack.length > 0 || project.github || project.live) && {
      label: 'Toolkit',
      heading: 'Frameworks and instruments deployed.',
      body: (
        <>
          {stack.length > 0 && (
            <div className="cs-stack">
              {stack.map(s => <span key={s} className="chip cs-chip">{s}</span>)}
            </div>
          )}
          {(project.github || project.live) && (
            <div className="cs-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost">GitHub ↗</a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">Live site ↗</a>
              )}
            </div>
          )}
        </>
      ),
    },
  ].filter(Boolean)

  return (
    <main className="page-wrap cs-page">

      <PageHero
        back={{ to: '/projects', label: 'All projects' }}
        eyebrow={`Case study ${project.index} · ${project.kind}`}
        title={[project.title]}
        kicker={overview}
        aside={
          <div className="cs-impact">
            <span className="label label-green">Headline impact</span>
            <CountUp value={project.impact} className="cs-impact-num" />
            <span className="cs-impact-label">{project.impactLabel}</span>
            <div className="cs-impact-tags">
              {project.tags.slice(0, 3).map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        }
      />

      {/* ── KEY FACTS ──────────────────────────── */}
      <div className="cs-facts-wrap">
        <div className="container">
          <dl className={`cs-facts n${facts.length}`}>
            {facts.map(f => (
              <div key={f.label} className="card cs-fact">
                <dt>
                  <span className="cs-fact-icon" aria-hidden="true">{f.icon}</span>
                  <span className="label">{f.label}</span>
                </dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ── CASE BODY ──────────────────────────── */}
      <div className="cs-body" ref={r1}>
        <div className="container">
          {sections.map((s, i) => (
            <section key={s.label} className={`cs-section cs-sec-${s.label.toLowerCase()}`} aria-labelledby={`cs-h-${i}`}>
              <div className="cs-side" aria-hidden="true">
                <div className="cs-side-inner">
                  <span className="cs-side-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="cs-side-label">{s.label}</span>
                </div>
              </div>
              <div className="cs-main reveal">
                <h2 id={`cs-h-${i}`} className="cs-heading">
                  <span className="cs-heading-tag">{String(i + 1).padStart(2, '0')} · {s.label}</span>
                  {s.heading}
                </h2>
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* ── PREV / NEXT ────────────────────────── */}
      <nav className="cs-nav" aria-label="More case studies">
        <div className="container">
          <div className="cs-nav-grid">
            {prev ? (
              <NavCard p={prev} dir="prev" />
            ) : (
              <Link to="/projects" className="card cs-nav-card is-prev">
                <span className="cs-nav-dir"><ArrowIcon left /> All projects</span>
                <span className="cs-nav-title">Back to every case study</span>
                <span className="cs-nav-meta">{projects.length} case studies</span>
              </Link>
            )}
            {next ? (
              <NavCard p={next} dir="next" />
            ) : (
              <Link to="/projects" className="card cs-nav-card is-next">
                <span className="cs-nav-dir">All projects <ArrowIcon /></span>
                <span className="cs-nav-title">Back to every case study</span>
                <span className="cs-nav-meta">{projects.length} case studies</span>
              </Link>
            )}
          </div>
        </div>
      </nav>

      <LetsTalk />

    </main>
  )
}

function NavCard({ p, dir }) {
  const isPrev = dir === 'prev'
  return (
    <Link to={`/projects/${p.slug}`} className={`card cs-nav-card ${isPrev ? 'is-prev' : 'is-next'}`}>
      <span className="cs-nav-dir">
        {isPrev ? <><ArrowIcon left /> Previous case study</> : <>Next case study <ArrowIcon /></>}
      </span>
      <span className="cs-nav-title">{p.title}</span>
      <span className="cs-nav-meta">
        <span className="chip chip-green">{p.kind}</span>
        <span className="cs-nav-impact"><strong>{p.impact}</strong> {p.impactLabel}</span>
      </span>
    </Link>
  )
}

/* ── Icons (decorative) ─────────────────────── */
const svgProps = {
  width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true,
}
function ArrowIcon({ left }) {
  return <svg {...svgProps}><path d={left ? 'M19 12H5M11 6l-6 6 6 6' : 'M5 12h14M13 6l6 6-6 6'} /></svg>
}
function CheckIcon() {
  return <svg {...svgProps} strokeWidth={2.4}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
}
function BuildingIcon() {
  return <svg {...svgProps}><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" /></svg>
}
function PersonIcon() {
  return <svg {...svgProps}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg>
}
function TagIcon() {
  return <svg {...svgProps}><path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z" /><circle cx="8" cy="8" r="1.5" /></svg>
}
function StackIcon() {
  return <svg {...svgProps}><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /></svg>
}
