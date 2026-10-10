import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { site } from '../data/site'
import OrgMark from '../components/OrgMark'
import {
  hero, identityHeading, highlights, tickerItems,
  companyLogos, featured, identityColumns,
} from '../data/home'
import './Home.css'

const tickerLoop = [...tickerItems, ...tickerItems]

export default function Home() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()

  return (
    <main className="page-wrap">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow-row">
              <span className="eyebrow">{hero.eyebrow}</span>
            </div>
            <h1 className="hero-headline">
              {hero.headline[0]}<br />
              <em>{hero.headline[1]}</em>
            </h1>
            <p className="hero-blurb">{hero.blurb}</p>
            <div className="hero-actions">
              <Link to="/projects" className="btn-primary">Selected work</Link>
              <Link to="/contact" className="btn-ghost">Get in touch ↗</Link>
              {site.cv && <a href={site.cv} className="btn-ghost" download="Himali-Verma-CV.pdf">Download CV ↓</a>}
            </div>

            <div className="hero-logos">
              <span className="hero-logos-label">Worked with</span>
              <div className="hero-logos-row">
                {companyLogos.map((l) => (
                  <OrgMark key={l.name} name={l.name} logo={l.src} as="text" className="hero-logo" />
                ))}
              </div>
            </div>
          </div>

          <div className="hero-portrait">
            <img src={site.headshot} alt={site.fullName} />
            <div className="hero-portrait-meta">
              <span className="a">{site.fullName}</span>
              <span className="b">{site.firm} · {site.city}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────── */}
      <div className="ticker" aria-label="Selected results">
        <div className="ticker-track">
          {tickerLoop.map((t, i) => (
            <span key={i} className="ticker-item">
              <strong>{t.strong}</strong>
              <span>{t.tail}</span>
              <span className="ticker-sep">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── HIGHLIGHTS ───────────────────────────── */}
      <div className="highlights">
        <div className="container">
          <div className="highlights-row">
            {highlights.map((h, i) => (
              <div key={i} className="hl-item">
                <span className="hl-num">{h.num}</span>
                <span className="hl-label">{h.label}</span>
                <span className="hl-sub">{h.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED WORK ────────────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">Selected engagements</span>
            </div>
            <h2 className="reveal d2">Three projects.<br /><em>Measurable outcomes.</em></h2>
          </div>

          <div className="feat-list">
            {featured.map((f, i) => (
              <Link key={i} to={f.to} className={`feat-row reveal d${i + 1}`}>
                <span className="feat-index">{f.index}</span>
                <div className="feat-body">
                  <span className="feat-client">{f.client}</span>
                  <h3 className="feat-title">{f.title}</h3>
                  <p className="feat-blurb">{f.blurb}</p>
                  <div className="feat-tags">
                    {f.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <div className="feat-metric">
                  <div className="feat-metric-num">{f.metricNum}</div>
                  <span className="feat-metric-label">{f.metricLabel}</span>
                </div>
                <span className="feat-arrow">→</span>
              </Link>
            ))}
          </div>

          <div className="feat-footer reveal d4">
            <Link to="/projects" className="btn-ghost">Full project library ↗</Link>
          </div>
        </div>
      </section>

      {/* ── IDENTITY ─────────────────────────────── */}
      <section className="section band" ref={r2}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">What sets me apart</span>
            </div>
            <h2 className="reveal d2">{identityHeading[0]}<br /><em>{identityHeading[1]}</em></h2>
          </div>
          <div className="id-cols">
            {identityColumns.map((c, i) => (
              <div key={c.num} className={`id-col reveal d${i + 2}`}>
                <div className="id-col-head">
                  <span className="id-num">{c.num}</span>
                  <h4>{c.heading}</h4>
                </div>
                <ul className="id-list">
                  {c.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="home-cta" ref={r3}>
        <div className="container">
          <div className="hc-inner">
            <div>
              <span className="eyebrow">Ready to work together?</span>
              <h2 className="hc-headline">{site.ctaHeadline[0]}<br /><em>{site.ctaHeadline[1]}</em></h2>
            </div>
            <div className="hc-actions">
              <Link to="/contact" className="btn-primary">Get in touch ↗</Link>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
