import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CountUp from '../components/CountUp'
import { projects, projectFilters, pageKicker } from '../data/projects'
import { clean } from '../lib/content'
import './Projects.css'

const orgCount = new Set(projects.map(p => p.org).filter(Boolean)).size
const kindCount = projectFilters.length - 1

const heroStats = [
  { num: String(projects.length), label: 'Case studies' },
  { num: String(orgCount), label: 'Organisations' },
  { num: String(kindCount), label: 'Practice areas' },
]

const countFor = (f) => (f === 'All' ? projects.length : projects.filter(p => p.kind === f).length)

// Featured (full-width) cards keep the two-column grid free of orphans:
// an odd list features its first card, a longer even list its first two.
const featuredCount = (n) => (n % 2 === 1 ? 1 : n >= 6 ? 2 : 0)

export default function Projects() {
  const [active, setActive] = useState('All')

  const items = active === 'All'
    ? projects
    : projects.filter(p => p.kind === active)
  const nFeatured = featuredCount(items.length)

  return (
    <main className="page-wrap">

      <PageHero
        eyebrow="Projects"
        title={['Selected work.', 'Quantified outcomes.']}
        kicker={pageKicker}
        stats={heroStats}
      />

      {/* ── PROJECT GRID ───────────────────────── */}
      <section className="section pj-section">
        <div className="container">

          <div className="pj-toolbar">
            <div className="pj-filter" role="group" aria-label="Filter projects by type">
              {projectFilters.map(f => (
                <button
                  key={f}
                  type="button"
                  className={`pj-pill${active === f ? ' is-active' : ''}`}
                  aria-pressed={active === f}
                  onClick={() => setActive(f)}
                >
                  {f}
                  <span className="pj-pill-count">{countFor(f)}</span>
                </button>
              ))}
            </div>
            <p className="pj-showing" aria-live="polite">
              Showing <strong>{items.length}</strong> {items.length === 1 ? 'case study' : 'case studies'}
              {active !== 'All' && <> in {active}</>}
            </p>
          </div>

          <div className="pj-grid" key={active}>
            {items.map((p, i) => (
              <ProjectCard key={p.slug} p={p} featured={i < nFeatured} flip={i === 1} order={i} />
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}

function ProjectCard({ p, featured, flip, order }) {
  const role = clean(p.role)
  const tags = p.tags.slice(0, 3)
  // Cards fade up in sequence when the list first shows and after each filter change.
  const style = { animationDelay: `${Math.min(order, 6) * 50}ms` }

  if (featured) {
    return (
      <Link to={`/projects/${p.slug}`} className={`card pj-card pj-feature${flip ? ' is-flip' : ''}`} style={style}>
        <div className="pj-feature-metric">
          <div className="pj-card-top">
            <span className="chip chip-green">{p.kind}</span>
            <span className="pj-case-no">Case {p.index}</span>
          </div>
          <div className="pj-feature-figure">
            <CountUp value={p.impact} className="pj-num pj-num-lg" />
            <span className="pj-num-label">{p.impactLabel}</span>
          </div>
        </div>
        <div className="pj-feature-body">
          <span className="label">{p.client}</span>
          <h2 className="pj-title pj-title-lg">{p.title}</h2>
          <p className="pj-blurb">{p.blurb}</p>
          {role && <p className="pj-role"><strong>My role</strong> {role}</p>}
          <div className="pj-card-foot">
            <div className="pj-tags">
              {tags.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
            <span className="pj-more">
              Read the case study <ArrowIcon />
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/projects/${p.slug}`} className="card pj-card" style={style}>
      <div className="pj-card-top">
        <span className="chip chip-green">{p.kind}</span>
        <span className="pj-arrow" aria-hidden="true"><ArrowIcon /></span>
      </div>
      <div className="pj-figure">
        <CountUp value={p.impact} className="pj-num" />
        <span className="pj-num-label">{p.impactLabel}</span>
      </div>
      <span className="pj-rule" aria-hidden="true" />
      <span className="label">{p.client}</span>
      <h2 className="pj-title">{p.title}</h2>
      <p className="pj-blurb">{p.blurb}</p>
      <div className="pj-tags pj-tags-end">
        {tags.map(t => <span key={t} className="chip">{t}</span>)}
      </div>
    </Link>
  )
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
