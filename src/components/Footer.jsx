import { site, displayUrl } from '../data/site'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-name">{site.firstName} <em>{site.lastName}</em></div>
            <div className="footer-meta">{site.footerTagline}</div>
          </div>
          <div className="footer-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">{displayUrl(site.linkedin)}</a>
            {site.cv && (
              <a href={site.cv} download="Himali-Verma-CV.pdf">Download CV ↓</a>
            )}
            {site.github && (
              <a href={site.github} target="_blank" rel="noreferrer">{displayUrl(site.github)}</a>
            )}
          </div>
        </div>
        <hr className="footer-rule" />
        <div className="footer-bottom">
          <span>© {year} {site.fullName}</span>
          <span>Set in Instrument Serif + DM Sans</span>
        </div>
      </div>
    </footer>
  )
}
