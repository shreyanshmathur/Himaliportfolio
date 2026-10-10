import { useState, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import { logos, activities, certGroups, pageTitle, pageKicker, flagships, statLabels } from '../data/activities'
import PageHero from '../components/PageHero'
import OrgMark from '../components/OrgMark'
import './Activities.css'

const allCerts = certGroups.flatMap(g => g.certs.map(c => ({ ...c, group: g.heading })))
const flagshipTitles = new Set(flagships.map(f => f.title))
const featured = flagships
  .map(f => {
    const cert = allCerts.find(c => c.title === f.title)
    return cert && { ...cert, note: f.note }
  })
  .filter(Boolean)

const heroStats = [
  { num: String(allCerts.length),                          label: statLabels.certs },
  { num: String(certGroups.length),                        label: statLabels.categories },
  { num: String(new Set(allCerts.map(c => c.org)).size),   label: statLabels.issuers },
]

// The category list skips the flagships (they lead the page) and any category left empty.
const otherGroups = certGroups
  .map(g => ({ ...g, certs: g.certs.filter(c => !flagshipTitles.has(c.title)) }))
  .filter(g => g.certs.length > 0)

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`

export default function Activities() {
  const [openIdx, setOpenIdx] = useState(null)
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()

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
    <main className="page-wrap cr-page">

      {/* ── HERO ───────────────────────────────── */}
      <PageHero
        eyebrow="Credentials"
        title={pageTitle}
        kicker={pageKicker}
        stats={heroStats}
      />

      {/* ── FLAGSHIP CREDENTIALS ───────────────── */}
      {featured.length > 0 && (
        <section className="section cr-featured-section" ref={r3}>
          <div className="container">
            <div className="cr-head reveal">
              <span className="eyebrow">Flagship credentials</span>
              <h2>Quality and process, <em>certified.</em></h2>
            </div>
            <div className="cr-featured-grid">
              {featured.map((c, i) => (
                <article key={c.title} className={`cr-feature reveal d${i + 1}`}>
                  <SealIcon className="cr-feature-seal" />
                  <div className="cr-feature-top">
                    <span className="cr-feature-mark">
                      <OrgMark name={c.org} logo={c.logo} mono={c.mono} className="cr-feature-logo" />
                    </span>
                    <span className="chip cr-feature-date">{c.date}</span>
                  </div>
                  <span className="cr-feature-issuer">{c.org}</span>
                  <h3 className="cr-feature-title">{c.title}</h3>
                  {c.note && <p className="cr-feature-note">{c.note}</p>}
                  <span className="cr-feature-group">{c.group}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CAMPUS LEADERSHIP (hidden when there are no entries) ── */}
      {activities.length > 0 && (
      <section className="section" ref={r1}>
        <div className="container">
          <div className="cr-head reveal">
            <span className="eyebrow">Campus leadership</span>
            <h2>Where strategy <em>meets the field.</em></h2>
          </div>
          <div className="act-grid">
            {activities.map((a, i) => (
              <button
                key={i}
                type="button"
                className={`act-card reveal d${Math.min(i + 1, 5)}`}
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
                <h3 className="act-role">{a.role}</h3>
                <span className="chip act-period">{a.period}</span>
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

      {/* ── CERTIFICATIONS BY CATEGORY ─────────── */}
      <section className="section cr-all" ref={r2}>
        <div className="container">
          <div className="cr-head reveal">
            <span className="eyebrow">Continued learning</span>
            <h2>Certifications <em>by category.</em></h2>
          </div>
          <div className="cr-groups">
            {otherGroups.map((group) => (
              <div key={group.heading} className="cr-group reveal" style={{ '--n': Math.min(group.certs.length, 4), '--n3': Math.min(group.certs.length, 3) }}>
                <div className="cr-group-head">
                  <h3 className="cr-group-title">{group.heading}</h3>
                  <span className="chip chip-green cr-count">{plural(group.certs.length, 'certification')}</span>
                </div>
                <ul className="cr-grid">
                  {group.certs.map((c) => (
                    <li key={c.title} className="cr-card card">
                      <div className="cr-card-top">
                        <span className="cr-mark">
                          <OrgMark name={c.org} logo={c.logo} mono={c.mono} className="cr-logo" />
                        </span>
                        <span className="chip cr-date">{c.date}</span>
                      </div>
                      <span className="cr-issuer">{c.org}</span>
                      <h4 className="cr-title">{c.title}</h4>
                    </li>
                  ))}
                </ul>
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
                    <h3 className="act-panel-hl-title">{h.title}</h3>
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
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>
      )}
    </aside>
    </>
  )
}

function SealIcon({ className }) {
  return (
    <svg className={className} width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="10" r="7" />
      <circle cx="12" cy="10" r="4.6" />
      <path d="M9.8 10.1l1.5 1.5 3-3.1" />
      <path d="M8 15.8L6.5 22l5.5-2.6 5.5 2.6L16 15.8" />
    </svg>
  )
}
