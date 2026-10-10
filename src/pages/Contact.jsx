import { useReveal } from '../hooks/useReveal'
import { site, displayUrl } from '../data/site'
import './Contact.css'

const contacts = [
  { k: 'Email',    v: site.email,                 href: `mailto:${site.email}` },
  { k: 'LinkedIn', v: displayUrl(site.linkedin),  href: site.linkedin },
  ...(site.github ? [{ k: 'GitHub', v: displayUrl(site.github), href: site.github }] : []),
  { k: 'Location', v: site.location,              href: null },
]

export default function Contact() {
  const r1 = useReveal()

  return (
    <main className="page-wrap">

      {/* ── PAGE HERO ──────────────────────────── */}
      <div className="page-hero">
        <div className="container">
          <div className="ph-top">
            <span className="eyebrow">05 / Contact</span>
          </div>
          <h1 className="ph-title">Contact</h1>
        </div>
      </div>

      {/* ── CONTACT BLOCK ──────────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="contact-headline reveal">
                {site.ctaHeadline[0]}<br />
                <em>{site.ctaHeadline[1]}</em>
              </h2>
              <p className="contact-blurb reveal d2">{site.contactBlurb}</p>
              <div className="contact-actions reveal d3">
                <a href={`mailto:${site.email}`} className="btn-primary">
                  Send an email ↗
                </a>
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                  LinkedIn ↗
                </a>
                {site.cv && <a href={site.cv} className="btn-ghost" download="Himali-Verma-CV.pdf">Download CV ↓</a>}
              </div>
            </div>
            <div className="contact-list reveal d2">
              {contacts.map(c => (
                c.href ? (
                  <a key={c.k} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-row">
                    <span className="k">{c.k}</span>
                    <span className="v">{c.v}</span>
                    <span className="ext">↗</span>
                  </a>
                ) : (
                  <div key={c.k} className="contact-row no-link">
                    <span className="k">{c.k}</span>
                    <span className="v">{c.v}</span>
                    <span className="ext" />
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
