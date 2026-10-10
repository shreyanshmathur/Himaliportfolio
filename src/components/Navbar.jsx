import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import './Navbar.css'

const links = [
  { num: '01', to: '/experience',  label: 'Experience' },
  { num: '02', to: '/projects',    label: 'Projects' },
  { num: '03', to: '/about',       label: 'About' },
  { num: '04', to: '/activities',  label: 'Credentials' },
  { num: '05', to: '/contact',     label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className="navbar">
      <div className="container nav-inner">

        <NavLink to="/" className="nav-brand">
          <span className="nav-brand-name">{site.firstName} <em>{site.lastName}</em></span>
          <span className="nav-brand-role">{site.navTagline}</span>
        </NavLink>

        <nav className="nav-links">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            >
              <span className="nav-num">{l.num}</span>
              <span>{l.label}</span>
            </NavLink>
          ))}
          {site.cv && (
            <a href={site.cv} className="nav-cv" download="Himali-Verma-CV.pdf">CV ↓</a>
          )}
        </nav>

        <button
          className={`nav-ham${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        <NavLink to="/" className="nav-mob-link" end>Home</NavLink>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} className="nav-mob-link">{l.label}</NavLink>
        ))}
        {site.cv && (
          <a href={site.cv} className="nav-mob-link" download="Himali-Verma-CV.pdf">Download CV ↓</a>
        )}
        <a href={`mailto:${site.email}`} className="nav-mob-cta">
          Get in touch ↗
        </a>
      </div>
    </header>
  )
}
