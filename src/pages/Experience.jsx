import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { logos, experiences, pageKicker, teaser } from '../data/experience'
import OrgMark from '../components/OrgMark'
import { clean, cleanList } from '../lib/content'
import './Experience.css'

export default function Experience() {
  const [openIdx, setOpenIdx] = useState(null)
  const r1 = useReveal()

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenIdx(null) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = openIdx !== null ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIdx])

  const open = openIdx !== null ? experiences[openIdx] : null

  return (
    <>
    <main className="page-wrap">

      {/* ── PAGE HERO ──────────────────────────── */}
      <div className="page-hero">
        <div className="container">
          <div className="ph-top">
            <span className="eyebrow">01 / Experience</span>
          </div>
          <h1 className="ph-title">Experience.<br /><em>One consistent thread.</em></h1>
          <p className="ph-kicker">{pageKicker}</p>
        </div>
      </div>

      {/* ── TIMELINE ───────────────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="exp-list">
            {experiences.map((e, i) => (
              <div key={i} className="exp-item">
                <button
                  className={`exp-row reveal d${Math.min(i + 1, 5)}`}
                  onClick={() => setOpenIdx(i)}
                >
                  <span className="exp-index">{e.index}</span>
                  <div>
                    <div className="exp-firm-row">
                      <OrgMark name={e.firm} logo={logos[e.firm]} className="exp-firm-logo" />
                      <span className="exp-firm">{e.firm}</span>
                      <span className="exp-type">{e.type}</span>
                    </div>
                    <h3 className="exp-role">{e.role}</h3>
                    <span className="exp-period">{e.period}</span>
                    <ul className="exp-bullets">
                      {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                  {e.metric ? (
                    <div className="exp-metric">
                      <div className="exp-metric-num">{e.metric.num}</div>
                      <span className="exp-metric-label">{e.metric.label}</span>
                    </div>
                  ) : <div className="exp-metric" />}
                  <span className="exp-toggle">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEASER ──────────────────── */}
      <div className="exp-teaser">
        <div className="container">
          <span className="exp-teaser-label">{teaser.label}</span>
          <Link to="/activities" className="exp-teaser-link">
            {teaser.linkText}
          </Link>
        </div>
      </div>

    </main>

    {/* ── BACKDROP — outside page-wrap so CSS transform doesn't break position:fixed ── */}
    <div
      className={`exp-backdrop${openIdx !== null ? ' open' : ''}`}
      onClick={() => setOpenIdx(null)}
      aria-hidden="true"
    />

    {/* ── SIDE PANEL ─────────────────────────── */}
    <aside
      className={`exp-panel${openIdx !== null ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Engagement detail"
    >
      {open && (
        <div className="exp-panel-inner">
          <div className="exp-panel-head">
            <div className="exp-panel-title-block">
              <div className="exp-panel-meta-row">
                <span>Role · {open.index}</span>
                <span>{open.type}</span>
              </div>
              <h2 className="exp-panel-role">{open.role}</h2>
              <div className="exp-panel-firm">
                <OrgMark name={open.firm} logo={logos[open.firm]} className="exp-panel-logo" />
                <span>{open.firm}</span>
                <span className="exp-panel-period">{open.period}</span>
              </div>
            </div>
            <button
              className="exp-panel-close"
              onClick={() => setOpenIdx(null)}
              aria-label="Close panel"
            >
              ← Close
            </button>
          </div>

          {clean(open.context) && <p className="exp-panel-context">{clean(open.context)}</p>}

          <div>
            <div className="exp-panel-section-label">Engagements</div>
            <div className="exp-panel-engagements">
              {open.engagements
                .map(eng => ({ ...eng, description: clean(eng.description), outcome: clean(eng.outcome) }))
                .filter(eng => eng.description)
                .map((eng, j) => (
                <article key={j} className="exp-panel-engagement">
                  <span className="exp-panel-eng-num">0{j + 1}</span>
                  <div className="exp-panel-eng-body">
                    <h4 className="exp-panel-eng-title">{eng.title}</h4>
                    <span className="exp-panel-eng-client">{eng.client}</span>
                    <p className="exp-panel-eng-desc">{eng.description}</p>
                    {eng.outcome && (
                      <div className="exp-panel-eng-outcome">
                        <span className="exp-panel-eng-outcome-label">Outcome</span>
                        <span className="exp-panel-eng-outcome-text">{eng.outcome}</span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {cleanList(open.tools).length > 0 && (
            <div className="exp-panel-tools">
              <span className="exp-tools-label">Toolkit</span>
              {cleanList(open.tools).map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </aside>

    </>
  )
}
