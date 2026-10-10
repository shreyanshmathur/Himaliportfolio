import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { projects, projectFilters, pageKicker } from '../data/projects'
import './Projects.css'

export default function Projects() {
  const [active, setActive] = useState('All')
  const r1 = useReveal()

  const items = active === 'All'
    ? projects
    : projects.filter(p => p.kind === active)

  return (
    <main className="page-wrap">

      {/* ── PAGE HERO ──────────────────────────── */}
      <div className="page-hero">
        <div className="container">
          <div className="ph-top">
            <span className="eyebrow">02 / Projects</span>
            <span className="ph-meta">{projects.length} case studies</span>
          </div>
          <h1 className="ph-title">Selected work.<br /><em>Quantified outcomes.</em></h1>
          <p className="ph-kicker">{pageKicker}</p>
        </div>
      </div>

      {/* ── PROJECT LIST ───────────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">

          <div className="work-filter">
            {projectFilters.map(f => (
              <button
                key={f}
                className={`work-chip${active === f ? ' is-active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="work-list">
            {items.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="work-row"
              >
                <span className="work-index">{p.index}</span>
                <div className="work-body">
                  <span className="work-client">{p.client}</span>
                  <h3 className="work-title">{p.title}</h3>
                  <span className="work-kind">{p.kind}</span>
                </div>
                <div className="work-tags">
                  {p.tags.slice(0, 2).map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div>
                  <div className="work-impact">{p.impact}</div>
                  <span className="work-impact-label">{p.impactLabel}</span>
                </div>
                <span className="work-arrow">→</span>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}
