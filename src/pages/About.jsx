import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { site } from '../data/site'
import { identityHeading } from '../data/home'
import {
  aboutHero, facts, story, capabilities, education, certTeaser,
  principlesHeading, principles, testimonials, writing,
  storyEyebrow, glanceHeading, educationHeading, capabilityBlurbs,
} from '../data/about'
import PageHero from '../components/PageHero'
import LetsTalk from '../components/LetsTalk'
import OrgMark from '../components/OrgMark'
import './About.css'

const QUICK_KEYS = ['Role', 'Firm', 'Based']

export default function About() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()
  const r4 = useReveal()
  const r5 = useReveal()
  const r6 = useReveal()

  const quick = facts.filter(([k]) => QUICK_KEYS.includes(k))
  const glance = facts.filter(([k]) => !QUICK_KEYS.includes(k))
  const status = facts.find(([k]) => k === 'Status')?.[1]

  return (
    <main className="page-wrap">

      {/* ── HERO ───────────────────────────────── */}
      <PageHero
        eyebrow="About"
        title={aboutHero.title}
        kicker={aboutHero.kicker}
        aside={
          <figure className="ab-portrait">
            <div className="ab-photo">
              <img src={site.headshot} alt={`Portrait of ${site.fullName}`} />
            </div>
            {status && (
              <span className="ab-status">
                <span className="ab-status-dot" aria-hidden="true" />
                {status}
              </span>
            )}
          </figure>
        }
      >
        <dl className="ab-quick">
          {quick.map(([k, v]) => (
            <div key={k} className="ab-quick-item">
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* ── STORY ──────────────────────────────── */}
      <section className="section ab-story" ref={r1}>
        <div className="container ab-story-grid">
          <div className="ab-story-side">
            <div className="ab-head reveal">
              <span className="eyebrow">{storyEyebrow}</span>
              <h2>{story.heading[0]} <em>{story.heading[1]}</em></h2>
            </div>
            <div className="ab-glance card reveal d2">
              <h3 className="ab-glance-title">{glanceHeading}</h3>
              <dl className="ab-glance-list">
                {glance.map(([k, v]) => (
                  <div key={k} className="ab-glance-row">
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="ab-prose reveal d2">
            {story.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ───────────────────────── */}
      <section className="section ab-band" ref={r2}>
        <div className="container">
          <div className="ab-head reveal">
            <span className="eyebrow">Capabilities</span>
            <h2>{identityHeading[0]} <em>{identityHeading[1]}</em></h2>
          </div>
          <div className="ab-cap-grid">
            {capabilities.map((c, i) => (
              <div key={c.heading} className={`ab-cap card reveal d${i + 1}`}>
                <span className="ab-icon" aria-hidden="true">{CAP_ICONS[i % CAP_ICONS.length]}</span>
                <div className="ab-cap-top">
                  <h3 className="ab-cap-title">{c.heading}</h3>
                  {capabilityBlurbs[i] && <p className="ab-cap-blurb">{capabilityBlurbs[i]}</p>}
                </div>
                <ul className="ab-cap-list">
                  {c.items.map(item => (
                    <li key={item}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW I WORK ─────────────────────────── */}
      {principles.length > 0 && (
        <section className="section ab-tint" ref={r4}>
          <div className="container">
            <div className="ab-head reveal">
              <span className="eyebrow">How I work</span>
              <h2>{principlesHeading[0]} <em>{principlesHeading[1]}</em></h2>
            </div>
            <ol className="ab-prin-grid">
              {principles.map((p, i) => (
                <li key={p.title} className={`ab-prin reveal d${i + 1}`}>
                  <span className="ab-prin-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="ab-prin-title">{p.title}</h3>
                  <p className="ab-prin-body">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS (hidden until there are entries) ── */}
      {testimonials.length > 0 && (
        <section className="section" ref={r5}>
          <div className="container">
            <div className="ab-head reveal">
              <span className="eyebrow">In their words</span>
              <h2>What the people <em>I worked with say.</em></h2>
            </div>
            <div className="ab-quote-grid">
              {testimonials.map((t, i) => (
                <figure key={i} className={`ab-quote card reveal d${Math.min(i + 1, 5)}`}>
                  <span className="ab-quote-mark" aria-hidden="true">“</span>
                  <blockquote className="ab-quote-text">{t.quote}</blockquote>
                  <figcaption className="ab-quote-who">
                    <span className="ab-quote-name">{t.name}</span>
                    <span className="ab-quote-role">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── EDUCATION ──────────────────────────── */}
      <section className="section ab-edu-section" ref={r3}>
        <div className="container">
          <div className="ab-head reveal">
            <span className="eyebrow">Education</span>
            <h2>{educationHeading[0]} <em>{educationHeading[1]}</em></h2>
          </div>

          <div className="ab-edu-grid">
            {education.map((e, i) => (
              <article key={e.degree} className={`ab-edu card reveal d${i + 1}`}>
                <div className="ab-edu-top">
                  <span className="ab-edu-logo-tile">
                    <OrgMark name={e.institution} logo={e.logo} className="ab-edu-logo" />
                  </span>
                  <span className="chip chip-green ab-edu-years">{e.start} – {e.end}</span>
                </div>
                <h3 className="ab-edu-degree">{e.degree}</h3>
                <p className="ab-edu-inst">{e.institution}</p>
              </article>
            ))}
          </div>

          <Link to="/activities" className="ab-teaser card is-link reveal d2">
            <span className="ab-icon ab-teaser-icon" aria-hidden="true"><AwardIcon /></span>
            <span className="ab-teaser-text">
              <span className="ab-teaser-kicker">Credentials</span>
              <span className="ab-teaser-label">{certTeaser}</span>
            </span>
            <span className="ab-teaser-link">See all credentials <span aria-hidden="true">→</span></span>
          </Link>
        </div>
      </section>

      {/* ── WRITING (hidden until there are entries) ── */}
      {writing.length > 0 && (
        <section className="section ab-band" ref={r6}>
          <div className="container">
            <div className="ab-head reveal">
              <span className="eyebrow">Writing</span>
              <h2>Notes from <em>the work.</em></h2>
            </div>
            <div className="ab-write-list">
              {writing.map((w, i) => (
                <a key={i} href={w.href} target="_blank" rel="noreferrer" className={`ab-write card is-link reveal d${Math.min(i + 1, 5)}`}>
                  <span className="chip ab-write-date">{w.date}</span>
                  <span className="ab-write-title">{w.title}</span>
                  <span className="ab-write-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <LetsTalk />

    </main>
  )
}

/* ── Icons (decorative, stroke) ─────────────── */
function Svg({ children, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

const CAP_ICONS = [
  // Delivery: flag on a route
  <Svg key="d"><path d="M5 21V4" /><path d="M5 4h11l-2 4 2 4H5" /></Svg>,
  // Operations: sliders
  <Svg key="o"><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12" /><circle cx="16" cy="6" r="2" /><circle cx="10" cy="12" r="2" /><circle cx="18" cy="18" r="2" /></Svg>,
  // Tools and AI: sparkles
  <Svg key="t"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></Svg>,
]

function CheckIcon() {
  return (
    <svg className="ab-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

function AwardIcon() {
  return (
    <Svg><circle cx="12" cy="9" r="6" /><path d="M8.5 14l-1.5 7 5-2.5 5 2.5-1.5-7" /></Svg>
  )
}
