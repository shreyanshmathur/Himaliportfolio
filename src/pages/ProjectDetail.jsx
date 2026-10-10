import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import { clean, cleanList } from '../lib/content'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

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

  // Sections with no finished content are skipped, and the rest renumber.
  const sections = [
    problem && {
      label: 'Challenge',
      heading: 'The brief, and what made it hard.',
      body: <p>{problem}</p>,
    },
    (solution || features.length > 0) && {
      label: 'Approach',
      heading: 'How it was built and structured.',
      body: (
        <>
          {solution && <p>{solution}</p>}
          {features.length > 0 && (
            <ul className="case-features">
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}
        </>
      ),
    },
    outcomes.length > 0 && {
      label: 'Outcome',
      heading: 'What landed, and how it was measured.',
      body: (
        <div className="case-outcomes">
          {outcomes.map((o, i) => (
            <div key={i} className="case-outcome">
              <div className="case-outcome-text">{o}</div>
            </div>
          ))}
        </div>
      ),
    },
    (stack.length > 0 || project.github || project.live) && {
      label: 'Toolkit',
      heading: 'Frameworks and instruments deployed.',
      body: (
        <>
          {stack.length > 0 && (
            <div className="case-stack">
              {stack.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          )}
          {(project.github || project.live) && (
            <div className="case-links">
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
    <main className="page-wrap">

      {/* ── CASE HERO ──────────────────────────── */}
      <div className="case-hero">
        <div className="container">
          <Link to="/projects" className="case-back">← Back to projects</Link>
          <div className="case-meta-row">
            <span>Case · {project.index}</span>
            <span>{project.kind}</span>
          </div>
          <h1 className="case-title">{project.title}</h1>
          {overview && <p className="case-kicker">{overview}</p>}
        </div>
      </div>

      {/* ── METADATA STRIPE ────────────────────── */}
      <div className="case-stripe">
        <div className="case-stripe-item">
          <div className="case-stripe-label">Client</div>
          <div className="case-stripe-value">{project.client}</div>
        </div>
        {role && (
          <div className="case-stripe-item">
            <div className="case-stripe-label">My role</div>
            <div className="case-stripe-value">{role}</div>
          </div>
        )}
        <div className="case-stripe-item">
          <div className="case-stripe-label">Type</div>
          <div className="case-stripe-value">{project.kind}</div>
        </div>
        {stack.length > 0 && (
          <div className="case-stripe-item">
            <div className="case-stripe-label">Stack</div>
            <div className="case-stripe-value">{stack.slice(0, 2).join(', ')}</div>
          </div>
        )}
        <div className="case-stripe-item">
          <div className="case-stripe-label">{project.impactLabel || 'Impact'}</div>
          <div className="case-stripe-value case-stripe-impact">{project.impact}</div>
        </div>
      </div>

      {/* ── CASE BODY ──────────────────────────── */}
      <div className="case-body">
        <div className="container">
          {sections.map((s, i) => (
            <div key={s.label} className="case-section">
              <div className="case-section-label">{String(i + 1).padStart(2, '0')} / {s.label}</div>
              <div className="case-section-body">
                <h2 className="case-section-heading">{s.heading}</h2>
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PREV / NEXT ────────────────────────── */}
      <div className="case-nav">
        <div className="container">
          <div className="case-nav-inner">
            {prev ? (
              <Link to={`/projects/${prev.slug}`} className="case-nav-link">
                <span className="case-nav-dir">← Previous</span>
                <span className="case-nav-title">{prev.title}</span>
              </Link>
            ) : <span />}
            {next ? (
              <Link to={`/projects/${next.slug}`} className="case-nav-link case-nav-next">
                <span className="case-nav-dir">Next →</span>
                <span className="case-nav-title">{next.title}</span>
              </Link>
            ) : <span />}
          </div>
        </div>
      </div>

    </main>
  )
}
