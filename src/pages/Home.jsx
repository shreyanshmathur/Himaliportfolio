import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { site } from '../data/site'
import { clean } from '../lib/content'
import LetsTalk from '../components/LetsTalk'
import {
  hero, highlights, companyNames, fitHeading, fit, careerHeading, career,
  featured, workSample, credentialHighlights,
} from '../data/home'
import { principlesHeading, principles, testimonials, writing } from '../data/about'
import { projects } from '../data/projects'
import './Home.css'

const roleFor = (to) => projects.find(p => `/projects/${p.slug}` === to)?.role

export default function Home() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()
  const r4 = useReveal()
  const r5 = useReveal()

  const sampleTitle = clean(workSample.title)
  const showSample = Boolean(workSample.image && sampleTitle)
  const note = writing[0]
  const quote = testimonials[0]

  return (
    <main className="page-wrap">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="hero-open">
              <span className="hero-open-dot" aria-hidden="true" />
              {site.openTo}
            </span>

            <div className="hero-id">
              <img className="hero-avatar" src={site.headshot} alt="" />
              <p className="hero-label">
                <strong>{site.fullName}</strong>
                <span className="hero-label-sep"> · </span>
                <span>{hero.label}</span>
              </p>
            </div>

            <h1 className="hero-headline">
              {hero.headline[0]} <em>{hero.headline[1]}</em>
            </h1>
            <p className="hero-blurb">{hero.blurb}</p>

            <div className="hero-actions">
              <Link to="/projects" className="btn-primary">
                See selected work <ArrowIcon />
              </Link>
              <Link to="/contact" className="btn-ghost">Contact me ↗</Link>
              {site.cv && <a href={site.cv} className="text-link" download="Himali-Verma-CV.pdf">Download CV</a>}
            </div>

            <div className="hero-names">
              <span className="hero-names-label">Worked with</span>
              <ul className="hero-names-row">
                {companyNames.map(n => <li key={n}>{n}</li>)}
              </ul>
            </div>
          </div>

          <figure className="hero-portrait">
            <img src={site.headshot} alt={`Portrait of ${site.fullName}`} />
            <figcaption>
              <span className="a">{site.location}</span>
              <span className="b">Open to relocating to the UAE</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────── */}
      <section className="results" aria-label="Results">
        <div className="container">
          <div className="results-row">
            {highlights.map(h => (
              <div key={h.num} className="res-item">
                <span className="res-num">{h.num}</span>
                <span className="res-label">{h.label}</span>
                <span className="res-sub">{h.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE I FIT ──────────────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="home-head reveal">
            <span className="eyebrow">Where I fit</span>
            <h2>{fitHeading[0]} <em>{fitHeading[1]}</em></h2>
          </div>
          <div className="card-grid">
            {fit.map((f, i) => (
              <div key={f.role} className={`fit-card reveal d${i + 1}`}>
                <span className="card-kicker">{f.role}</span>
                <h3 className="fit-title">{f.heading}</h3>
                <ul className="fit-list">
                  {f.evidence.map(e => <li key={e}>{e}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER ───────────────────────────────── */}
      <section className="section" ref={r2}>
        <div className="container">
          <div className="home-head-row reveal">
            <div className="home-head">
              <span className="eyebrow">Career</span>
              <h2>{careerHeading[0]} <em>{careerHeading[1]}</em></h2>
            </div>
            <Link to="/experience" className="text-link">Full experience →</Link>
          </div>
          <ol className="career">
            {career.map((c, i) => (
              <li key={c.place} className={`career-step reveal d${Math.min(i + 1, 5)}${i === career.length - 1 ? ' is-now' : ''}`}>
                <span className="career-years">{c.years}</span>
                <span className="career-place">{c.place}</span>
                <span className="career-note">{c.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SELECTED WORK ────────────────────────── */}
      <section className="section" ref={r3}>
        <div className="container">
          <div className="home-head-row reveal">
            <div className="home-head">
              <span className="eyebrow">Selected work</span>
              <h2>Three engagements. <em>Measurable outcomes.</em></h2>
            </div>
            <Link to="/projects" className="text-link">All case studies →</Link>
          </div>
          <div className="card-grid">
            {featured.map((f, i) => {
              const role = clean(roleFor(f.to))
              return (
                <Link key={f.to} to={f.to} className={`work-card reveal d${i + 1}`}>
                  <span className="work-fits">
                    {f.fits.map(t => <span key={t} className="fit-tag">{t}</span>)}
                  </span>
                  <span className="work-num">{f.metricNum}</span>
                  <span className="work-num-label">{f.metricLabel}</span>
                  <span className="work-rule" aria-hidden="true" />
                  <span className="card-kicker muted">{f.client}</span>
                  <h3 className="work-title">{f.title}</h3>
                  <span className="work-blurb">{f.blurb}</span>
                  {role && <span className="work-role"><strong>My role:</strong> {role}</span>}
                  <span className="work-more">Read the case study →</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── HOW I WORK ───────────────────────────── */}
      <section className="section band-green" ref={r4}>
        <div className="container">
          <div className="home-head reveal">
            <span className="eyebrow">How I work</span>
            <h2>{principlesHeading[0]} <em>{principlesHeading[1]}</em></h2>
          </div>
          <div className="principles">
            {principles.map((p, i) => (
              <div key={p.title} className={`principle reveal d${i + 1}`}>
                <span className="principle-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>

          {(showSample || note) && (
            <div className="practice">
              {showSample && (
                <figure className="practice-card reveal">
                  <img src={workSample.image} alt={clean(workSample.alt) || ''} />
                  <figcaption>
                    <span className="card-kicker">In practice</span>
                    <span className="practice-title">{sampleTitle}</span>
                    {clean(workSample.caption) && <span className="practice-caption">{clean(workSample.caption)}</span>}
                  </figcaption>
                </figure>
              )}
              {note && (
                <a href={note.href} target="_blank" rel="noreferrer" className="practice-card practice-note reveal d2">
                  <span className="card-kicker">Writing</span>
                  <span className="practice-title">{note.title}</span>
                  <span className="work-more">Read the note ↗</span>
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── CREDENTIALS ──────────────────────────── */}
      <section className="section" ref={r5}>
        <div className="container">
          <div className="home-head-row reveal">
            <h2 className="cred-heading">Credentials</h2>
            <Link to="/activities" className="text-link">All certifications →</Link>
          </div>
          <div className="cred-grid">
            {credentialHighlights.map((c, i) => (
              <div key={c.title} className={`cred-card reveal d${i + 1}`}>
                <span className="cred-title">{c.title}</span>
                <span className="cred-meta">{c.meta}</span>
              </div>
            ))}
          </div>

          {quote && (
            <figure className="home-quote reveal">
              <span className="card-kicker muted">In their words</span>
              <blockquote>“{quote.quote}”</blockquote>
              <figcaption><strong>{quote.name}</strong> · {quote.role}</figcaption>
            </figure>
          )}
        </div>
      </section>

      <LetsTalk />

    </main>
  )
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
