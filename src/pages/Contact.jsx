import { site } from '../data/site'
import LetsTalk from '../components/LetsTalk'
import './Contact.css'

export default function Contact() {
  return (
    <main className="page-wrap">

      {/* ── PAGE HERO ──────────────────────────── */}
      <div className="page-hero contact-hero">
        <div className="container">
          <div className="ph-top">
            <span className="eyebrow">Contact</span>
          </div>
          <h1 className="ph-title">Get in <em>touch.</em></h1>
          <p className="ph-kicker">{site.contactBlurb}</p>
        </div>
      </div>

      <LetsTalk />

    </main>
  )
}
