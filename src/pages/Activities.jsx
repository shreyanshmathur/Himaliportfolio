import { useState, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import { logos, activities, certGroups, pageEyebrow, pageTitle, pageKicker } from '../data/activities'
import OrgMark from '../components/OrgMark'
import './Activities.css'

export default function Activities() {
  const [openIdx, setOpenIdx] = useState(null)
  const r1 = useReveal()
  const r2 = useReveal()

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenIdx(null) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = openIdx !== null ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIdx])

  const open = openIdx !== null ? activities[openIdx] : null

  return (
    <>
    <main className="page-wrap">

      {/* ── PAGE HERO ──────────────────────────── */}
      <div className="page-hero">
        <div className="container">
          <div className="ph-top">
            <span className="eyebrow">{pageEyebrow}</span>
          </div>
          <h1 className="ph-title">{pageTitle[0]}<br /><em>{pageTitle[1]}</em></h1>
          <p className="ph-kicker">{pageKicker}</p>
        </div>
      </div>

      {/* ── CAMPUS LEADERSHIP (hidden when there are no entries) ── */}
      {activities.length > 0 && (
      <section className="section" ref={r1}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">Campus leadership</span>
            </div>
            <h2 className="reveal d2">Where strategy<br /><em>meets the field.</em></h2>
          </div>
          <div className="act-grid">
            {activities.map((a, i) => (
              <button
                key={i}
                className={`act-card reveal d${i + 2}`}
                onClick={() => setOpenIdx(i)}
              >
                <div className="act-card-head">
                  <div className="act-firm-row">
                    <OrgMark name={a.org} logo={logos[a.org]} className="act-logo" />
                    <span className="act-org">{a.org}</span>
                  </div>
                  <div className="act-metric">
                    <div className="act-metric-num">{a.metric.num}</div>
                    <span className="act-metric-label">{a.metric.label}</span>
                  </div>
                </div>
                <h4 className="act-role">{a.role}</h4>
                <span className="act-period">{a.period}</span>
                <ul className="act-bullets">
                  {a.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <span className="act-toggle">Details →</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ── CERTIFICATIONS ─────────────────────── */}
      <section className="section band" ref={r2}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">Credentials</span>
            </div>
            <h2 className="reveal d2">Certifications<br /><em>by category.</em></h2>
          </div>
          <div className="cert-groups">
            {certGroups.map((group, gi) => (
              <div key={gi} className={`cert-group reveal d${gi + 2}`}>
                <h3 className="cert-group-heading">{group.heading}</h3>
                <div className="cert-group-grid">
                  {group.certs.map((c, ci) => (
                    <div key={ci} className="act-cert-item">
                      <div className="act-cert-head">
                        <div className="act-cert-org-row">
                          <OrgMark name={c.org} logo={c.logo} mono={c.mono} className="act-cert-logo" />
                          <span className="act-cert-org">{c.org}</span>
                        </div>
                        <span className="act-cert-date">{c.date}</span>
                      </div>
                      <p className="act-cert-title">{c.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>

    {/* ── BACKDROP — outside page-wrap so CSS transform doesn't break position:fixed ── */}
    <div
      className={`act-backdrop${openIdx !== null ? ' open' : ''}`}
      onClick={() => setOpenIdx(null)}
      aria-hidden="true"
    />

    {/* ── SIDE PANEL ─────────────────────────── */}
    <aside
      className={`act-panel${openIdx !== null ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Activity detail"
    >
      {open && (
        <div className="act-panel-inner">
          <div className="act-panel-head">
            <div className="act-panel-title-block">
              <div className="act-panel-meta-row">
                <span>Leadership · {open.index}</span>
              </div>
              <h2 className="act-panel-role">{open.role}</h2>
              <div className="act-panel-org-row">
                <OrgMark name={open.org} logo={logos[open.org]} className="act-panel-logo" />
                <span className="act-panel-org-name">{open.org}</span>
                <span className="act-panel-period">{open.period}</span>
              </div>
            </div>
            <button
              className="act-panel-close"
              onClick={() => setOpenIdx(null)}
              aria-label="Close panel"
            >
              ← Close
            </button>
          </div>

          <p className="act-panel-context">{open.context}</p>

          <div>
            <div className="act-panel-section-label">Highlights</div>
            <div className="act-panel-highlights">
              {open.highlights.map((h, j) => (
                <article key={j} className="act-panel-highlight">
                  <span className="act-panel-hl-num">0{j + 1}</span>
                  <div className="act-panel-hl-body">
                    <h4 className="act-panel-hl-title">{h.title}</h4>
                    <p className="act-panel-hl-desc">{h.description}</p>
                    <div className="act-panel-hl-outcome">
                      <span className="act-panel-hl-outcome-label">Outcome</span>
                      <span className="act-panel-hl-outcome-text">{h.outcome}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="act-panel-skills">
            <span className="act-skills-label">Skills</span>
            {open.skills.map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
      )}
    </aside>
    </>
  )
}
