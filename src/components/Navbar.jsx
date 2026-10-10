import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import './Navbar.css'

const links = [
  { to: '/experience',  label: 'Experience' },
  { to: '/projects',    label: 'Projects' },
  { to: '/about',       label: 'About' },
  { to: '/activities',  label: 'Credentials' },
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
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-cta">Contact me</NavLink>
        </nav>

        <button
          className={`nav-ham${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
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
        <NavLink to="/contact" className="nav-mob-cta">
          Contact me ↗
        </NavLink>
      </div>
    </header>
  )
}
