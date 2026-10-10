import { site } from '../data/site'
import { clean } from '../lib/content'
import './LetsTalk.css'

// Closing band on Home and Contact: what she is looking for, beside the ways to reach her.
// "Book a 20-minute call" shows once `site.booking` holds a link.
export default function LetsTalk() {
  const lookingFor = site.lookingFor
    .map(([k, v]) => [k, clean(v)])
    .filter(([, v]) => v)

  return (
    <section className="lets-talk" id="contact">
      <div className="container">
        <div className="lt-head">
          <span className="eyebrow">Open to new roles</span>
          <h2 className="lt-headline">
            {site.ctaHeadline[0]} <em>{site.ctaHeadline[1]}</em>
          </h2>
        </div>

        <div className="lt-body">
          <div className="lt-looking">
            <h3 className="lt-subhead">What I'm looking for</h3>
            <dl className="lt-list">
              {lookingFor.map(([k, v]) => (
                <div key={k} className="lt-item">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lt-panel">
            <h3 className="lt-subhead">Let's talk</h3>
            {site.booking && (
              <a href={site.booking} target="_blank" rel="noreferrer" className="lt-btn lt-btn-solid">
                <CalendarIcon />
                Book a 20-minute call
              </a>
            )}
            <a href={`mailto:${site.email}`} className={`lt-btn ${site.booking ? 'lt-btn-line' : 'lt-btn-solid'}`}>
              <MailIcon />
              Send an email
            </a>
            <div className="lt-row">
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="lt-btn lt-btn-line lt-btn-sm">LinkedIn</a>
              {site.cv && (
                <a href={site.cv} download="Himali-Verma-CV.pdf" className="lt-btn lt-btn-line lt-btn-sm">Download CV</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}
