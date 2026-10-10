import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { site } from '../data/site'
import { identityHeading } from '../data/home'
import { aboutHero, facts, story, capabilities, education, certTeaser, principlesHeading, principles, testimonials, writing } from '../data/about'
import OrgMark from '../components/OrgMark'
import './About.css'

export default function About() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()
  const r4 = useReveal()
  const r5 = useReveal()
  const r6 = useReveal()

  return (
    <main className="page-wrap">

      {/* ── ABOUT HERO ─────────────────────────── */}
      <div className="about-hero">
        <div className="container">
          <div className="ah-grid">
            <div className="ah-portrait-col">
              <div className="ah-portrait">
                <img src={site.headshot} alt={site.fullName} />
              </div>
              <div className="ah-portrait-meta">
                <span className="ah-pm-loc">{site.location}</span>
                <span className="ah-pm-loc">{site.firm}</span>
              </div>
            </div>
            <div className="ah-text">
              <div className="ah-top">
                <span className="eyebrow">03 / About</span>
              </div>
              <h1 className="ah-title">
                {aboutHero.title[0]}<br />
                <em>{aboutHero.title[1]}</em>
              </h1>
              <p className="ah-kicker">{aboutHero.kicker}</p>
              <div className="ah-quick">
                {facts.slice(0, 3).map(([k, v]) => (
                  <div key={k}>
                    <span className="ah-q-k">{k}</span>
                    <span className="ah-q-v">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STORY ──────────────────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">My story</span>
            </div>
            <h2 className="reveal d2">{story.heading[0]}<br /><em>{story.heading[1]}</em></h2>
          </div>
          <div className="about-grid">
            <div className="about-prose reveal d2">
              {story.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="about-facts reveal d3">
              {facts.map(([k, v]) => (
                <div key={k} className="about-fact">
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ───────────────────────── */}
      <section className="section band" ref={r2}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">Capabilities</span>
            </div>
            <h2 className="reveal d2">{identityHeading[0]}<br /><em>{identityHeading[1]}</em></h2>
          </div>
          <div className="cap-grid">
            {capabilities.map((c, i) => (
              <div key={i} className={`cap-col reveal d${i + 2}`}>
                <h3 className="cap-heading">{c.heading}</h3>
                <ul className="cap-list">
                  {c.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW I WORK ─────────────────────────── */}
      {principles.length > 0 && (
        <section className="section" ref={r4}>
          <div className="container">
            <div className="section-head">
              <div className="reveal">
                <span className="eyebrow">How I work</span>
              </div>
              <h2 className="reveal d2">{principlesHeading[0]}<br /><em>{principlesHeading[1]}</em></h2>
            </div>
            <div className="prin-grid">
              {principles.map((p, i) => (
                <div key={i} className={`prin-item reveal d${i + 2}`}>
                  <span className="prin-num">0{i + 1}</span>
                  <h3 className="prin-title">{p.title}</h3>
                  <p className="prin-body">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS (hidden until there are entries) ── */}
      {testimonials.length > 0 && (
        <section className="section band" ref={r5}>
          <div className="container">
            <div className="section-head">
              <div className="reveal">
                <span className="eyebrow">In their words</span>
              </div>
              <h2 className="reveal d2">What the people<br /><em>I worked with say.</em></h2>
            </div>
            <div className="quote-grid">
              {testimonials.map((t, i) => (
                <blockquote key={i} className={`quote-item reveal d${i + 2}`}>
                  <p className="quote-text">{t.quote}</p>
                  <footer className="quote-who">
                    <span className="quote-name">{t.name}</span>
                    <span className="quote-role">{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── EDUCATION ──────────────────────────── */}
      <section className="section" ref={r3}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">Education</span>
            </div>
            <h2 className="reveal d2">Where it<br /><em>started.</em></h2>
          </div>

          {education.map((e, i) => (
            <div key={i} className="edu-row reveal d2">
              <OrgMark name={e.institution} logo={e.logo} className="edu-logo" />
              <div>
                <h3>{e.degree}</h3>
                <p style={{ marginTop: 8, color: 'var(--ink-4)', fontFamily: 'var(--mono)', fontSize: 13 }}>
                  {e.institution}
                </p>
              </div>
              <div className="years">{e.start}<br /><em>{e.end}</em></div>
            </div>
          ))}

          <div className="about-teaser reveal d3">
            <span className="about-teaser-label">{certTeaser}</span>
            <Link to="/activities" className="about-teaser-link">
              See all credentials →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WRITING (hidden until there are entries) ── */}
      {writing.length > 0 && (
        <section className="section" ref={r6}>
          <div className="container">
            <div className="section-head">
              <div className="reveal">
                <span className="eyebrow">Writing</span>
              </div>
              <h2 className="reveal d2">Notes from<br /><em>the work.</em></h2>
            </div>
            <div className="write-list">
              {writing.map((w, i) => (
                <a key={i} href={w.href} target="_blank" rel="noreferrer" className={`write-row reveal d${i + 2}`}>
                  <span className="write-date">{w.date}</span>
                  <span className="write-title">{w.title}</span>
                  <span className="write-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  )
}
