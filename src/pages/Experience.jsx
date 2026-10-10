import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { logos, experiences, pageKicker, teaser, overview } from '../data/experience'
import OrgMark from '../components/OrgMark'
import PageHero from '../components/PageHero'
import CountUp from '../components/CountUp'
import LetsTalk from '../components/LetsTalk'
import { clean, cleanList } from '../lib/content'
import './Experience.css'

// ── Dates, read from the `period` strings ("Jan 2021 - Jan 2025", "Apr 2026 - Present")
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
function parseMonth(s) {
  const t = s.trim()
  if (/present/i.test(t)) { const d = new Date(); return d.getFullYear() * 12 + d.getMonth() }
  const [m, y] = t.split(/\s+/)
  return Number(y) * 12 + MONTHS.indexOf(m.slice(0, 3).toLowerCase())
}
function span(period) {
  const [a, b] = period.split(/\s+[-–]\s+/)
  return { start: parseMonth(a), end: parseMonth(b), current: /present/i.test(b) }
}
function duration(period) {
  const { start, end } = span(period)
  const months = Math.max(1, end - start)
  const y = Math.floor(months / 12)
  const m = months % 12
  const parts = []
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`)
  if (m) parts.push(`${m} mo${m > 1 ? 's' : ''}`)
  return parts.join(' ')
}

const withIdx = experiences.map((e, i) => ({ ...e, i }))
const fullTime = withIdx.filter(e => e.type !== 'Internship')
const internships = withIdx.filter(e => e.type === 'Internship')

const firstStart = Math.min(...fullTime.map(e => span(e.period).start))
const nowMonth = parseMonth('Present')
const yearsFullTime = Math.floor((nowMonth - firstStart) / 12)
const orgCount = new Set(experiences.map(e => e.firm)).size

const heroStats = [
  { num: `${yearsFullTime}+`, label: 'years in full-time delivery roles' },
  { num: String(orgCount), label: `organisations, ${fullTime.length} of them full-time` },
  overview.countries,
  overview.onTime,
]

const count = (e) => e.engagements.filter(g => clean(g.description)).length
const credentials = teaser.label.split('·').map(s => s.trim()).filter(Boolean)

export default function Experience() {
  const [openIdx, setOpenIdx] = useState(null)
  const r1 = useReveal()
  const r3 = useReveal()
  const closeRef = useRef(null)
  const lastTrigger = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenIdx(null) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = openIdx !== null ? 'hidden' : ''
    if (openIdx !== null) {
      // Move focus into the panel once it starts sliding in.
      const t = setTimeout(() => closeRef.current?.focus({ preventScroll: true }), 60)
      return () => {
        clearTimeout(t)
        window.removeEventListener('keydown', onKey)
        document.body.style.overflow = ''
      }
    }
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIdx])

  const openPanel = (i, el) => { lastTrigger.current = el; setOpenIdx(i) }
  const closePanel = () => setOpenIdx(null)

  useEffect(() => {
    if (openIdx === null && lastTrigger.current) lastTrigger.current.focus({ preventScroll: true })
  }, [openIdx])

  const open = openIdx !== null ? experiences[openIdx] : null
  const openEngagements = open
    ? open.engagements
        .map(eng => ({ ...eng, description: clean(eng.description), outcome: clean(eng.outcome) }))
        .filter(eng => eng.description)
    : []

  return (
    <>
    <main className="page-wrap">

      <PageHero
        eyebrow="Experience"
        title={overview.title}
        kicker={pageKicker}
        stats={heroStats}
      />

      {/* ── FULL-TIME TIMELINE ─────────────────── */}
      <section className="section exp-section" ref={r1}>
        <div className="container">
          <div className="exp-head reveal">
            <span className="eyebrow">Career timeline</span>
            <h2>{overview.timelineHeading[0]} <em>{overview.timelineHeading[1]}</em></h2>
            <p className="exp-head-note">{overview.timelineNote}</p>
          </div>

          <div className="exp-rail">
          <ol className="exp-timeline">
            {fullTime.map((e, k) => {
              const { current } = span(e.period)
              return (
                <li key={e.firm} className={`exp-stop reveal d${Math.min(k + 1, 5)}${current ? ' is-now' : ''}`}>
                  <span className="exp-dot" aria-hidden="true" />
                  <article className={`card exp-card${e.metric ? ' has-metric' : ''}`}>
                    <div className="exp-card-top">
                      <OrgMark name={e.firm} logo={logos[e.firm]} className="exp-logo" />
                      <div className="exp-firm-block">
                        <span className="exp-firm">{e.firm}</span>
                        <span className="exp-when">
                          {e.period}
                          <span className="exp-when-sep" aria-hidden="true">·</span>
                          {duration(e.period)}
                        </span>
                      </div>
                      <div className="exp-chips">
                        {current && <span className="chip chip-green exp-now-chip"><span className="exp-now-dot" aria-hidden="true" />Current role</span>}
                        <span className="chip">{e.type}</span>
                      </div>
                    </div>

                    <h3 className="exp-role">{e.role}</h3>

                    {e.metric && (
                      <div className="exp-metric">
                        <CountUp value={e.metric.num} className="exp-metric-num" />
                        <span className="exp-metric-label">{e.metric.label}</span>
                      </div>
                    )}

                    <ul className="exp-bullets">
                      {cleanList(e.bullets).map((b, j) => <li key={j}>{b}</li>)}
                    </ul>

                    <div className="exp-card-foot">
                      <button
                        type="button"
                        className="exp-open-btn"
                        onClick={(ev) => openPanel(e.i, ev.currentTarget)}
                        aria-haspopup="dialog"
                      >
                        See engagements
                        <span className="exp-open-count">{count(e)}</span>
                        <ArrowIcon />
                      </button>
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>

          {/* ── INTERNSHIPS ──────────────────────── */}
          {internships.length > 0 && (
            <div className="exp-earlier">
              <div className="exp-earlier-head reveal">
                <span className="exp-dot exp-dot-small" aria-hidden="true" />
                <h2 className="exp-earlier-title">
                  {overview.internshipsHeading[0]} <em>{overview.internshipsHeading[1]}</em>
                </h2>
              </div>
              <ul className="exp-intern-grid">
                {internships.map((e, k) => (
                  <li key={e.firm} className={`card exp-intern reveal d${Math.min(k + 1, 5)}`}>
                    <div className="exp-intern-top">
                      <OrgMark name={e.firm} logo={logos[e.firm]} className="exp-logo exp-logo-sm" />
                      <span className="exp-firm">{e.firm}</span>
                    </div>
                    <h3 className="exp-intern-role">{e.role.replace(/\s*\(Intern\)$/, '')}</h3>
                    <span className="exp-when">
                      {e.period}
                      <span className="exp-when-sep" aria-hidden="true">·</span>
                      {duration(e.period)}
                    </span>
                    {e.metric && (
                      <div className="exp-intern-metric">
                        <CountUp value={e.metric.num} className="exp-intern-metric-num" />
                        <span className="exp-metric-label">{e.metric.label}</span>
                      </div>
                    )}
                    <ul className="exp-bullets exp-bullets-sm">
                      {cleanList(e.bullets).map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                    <button
                      type="button"
                      className="exp-open-btn exp-open-btn-sm"
                      onClick={(ev) => openPanel(e.i, ev.currentTarget)}
                      aria-haspopup="dialog"
                    >
                      See engagements <ArrowIcon />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS TEASER ─────────────────── */}
      <section className="exp-cred" ref={r3}>
        <div className="container">
          <Link to="/activities" className="card exp-cred-card reveal">
            <div className="exp-cred-text">
              <span className="label label-green">{overview.credLabel}</span>
              <h2 className="exp-cred-title">{overview.credHeading[0]} <em>{overview.credHeading[1]}</em></h2>
            </div>
            <ul className="exp-cred-list">
              {credentials.map(c => (
                <li key={c}><CheckIcon />{c}</li>
              ))}
            </ul>
            <span className="exp-cred-link">{teaser.linkText.replace(/\s*→\s*$/, '')} <ArrowIcon /></span>
          </Link>
        </div>
      </section>

      <LetsTalk />

    </main>

    {/* ── BACKDROP — outside page-wrap so CSS transform doesn't break position:fixed ── */}
    <div
      className={`exp-backdrop${openIdx !== null ? ' open' : ''}`}
      onClick={closePanel}
      aria-hidden="true"
    />

    {/* ── SIDE PANEL ─────────────────────────── */}
    <aside
      className={`exp-panel${openIdx !== null ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={open ? `${open.role}, ${open.firm}` : 'Engagement detail'}
    >
      {open && (
        <div className="exp-panel-inner">
          <div className="exp-panel-bar">
            <div className="exp-chips">
              {span(open.period).current && <span className="chip chip-green">Current role</span>}
              <span className="chip">{open.type}</span>
            </div>
            <button
              ref={closeRef}
              type="button"
              className="exp-panel-close"
              onClick={closePanel}
              aria-label="Close panel"
            >
              <CloseIcon />
            </button>
          </div>

          <header className="exp-panel-head">
            <div className="exp-panel-firm">
              <OrgMark name={open.firm} logo={logos[open.firm]} className="exp-logo exp-panel-logo" />
              <div className="exp-firm-block">
                <span className="exp-firm">{open.firm}</span>
                <span className="exp-when">
                  {open.period}
                  <span className="exp-when-sep" aria-hidden="true">·</span>
                  {duration(open.period)}
                </span>
              </div>
            </div>
            <h2 className="exp-panel-role">{open.role}</h2>
            {open.metric && (
              <div className="exp-panel-metric">
                <span className="exp-panel-metric-num">{open.metric.num}</span>
                <span className="exp-metric-label">{open.metric.label}</span>
              </div>
            )}
          </header>

          {clean(open.context) && <p className="exp-panel-context">{clean(open.context)}</p>}

          {openEngagements.length > 0 && (
            <div className="exp-panel-block">
              <h3 className="exp-panel-label">Engagements <span>{openEngagements.length}</span></h3>
              <ol className="exp-panel-engagements">
                {openEngagements.map((eng, j) => (
                  <li key={j} className="exp-eng">
                    <span className="exp-eng-num" aria-hidden="true">{j + 1}</span>
                    <div className="exp-eng-body">
                      <h4 className="exp-eng-title">{eng.title}</h4>
                      {eng.client && <span className="exp-eng-client">{eng.client}</span>}
                      <p className="exp-eng-desc">{eng.description}</p>
                      {eng.outcome && (
                        <div className="exp-eng-outcome">
                          <CheckIcon />
                          <div>
                            <span className="exp-eng-outcome-label">Outcome</span>
                            <p className="exp-eng-outcome-text">{eng.outcome}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {cleanList(open.tools).length > 0 && (
            <div className="exp-panel-block">
              <h3 className="exp-panel-label">Toolkit</h3>
              <div className="exp-panel-tools">
                {cleanList(open.tools).map(t => (
                  <span key={t} className="chip chip-green">{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </aside>

    </>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="exp-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
