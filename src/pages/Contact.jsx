import { site, displayUrl } from '../data/site'
import PageHero from '../components/PageHero'
import LetsTalk from '../components/LetsTalk'
import './Contact.css'

// One continuous green surface: a short hero with the direct details,
// then the shared LetsTalk band (its own headline is hidden here so the
// page doesn't repeat itself).
export default function Contact() {
  return (
    <main className="page-wrap ct-page">

      <PageHero
        eyebrow="Contact"
        title={['Get in', 'touch.']}
        kicker={site.contactBlurb}
      >
        <ul className="ct-direct">
          <li>
            <span className="ct-direct-k">Email</span>
            <a href={`mailto:${site.email}`} className="ct-direct-v">{site.email}</a>
          </li>
          <li>
            <span className="ct-direct-k">LinkedIn</span>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="ct-direct-v">{displayUrl(site.linkedin)}</a>
          </li>
          <li>
            <span className="ct-direct-k">Based</span>
            <span className="ct-direct-v">{site.location}</span>
          </li>
        </ul>
      </PageHero>

      <LetsTalk />

    </main>
  )
}
