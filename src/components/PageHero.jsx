import { Link } from 'react-router-dom'
import CountUp from './CountUp'

// Deep green header used by every inner page.
// title: [plain, italic]; stats: [{ num, label }]; aside: optional node on the right;
// back: optional { to, label } link above the eyebrow.
export default function PageHero({ eyebrow, title, kicker, stats, aside, back, children }) {
  return (
    <header className="page-hero">
      <div className="container">
        <div className="ph-grid">
          <div className="ph-main">
            {back && <Link to={back.to} className="ph-back">← {back.label}</Link>}
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="ph-title">
              {title[0]}{title[1] && <> <em>{title[1]}</em></>}
            </h1>
            {kicker && <p className="ph-kicker">{kicker}</p>}
            {children}
          </div>
          {aside && <div className="ph-aside">{aside}</div>}
        </div>
        {stats && stats.length > 0 && (
          <div className="ph-stats">
            {stats.map(s => (
              <div key={s.label} className="ph-stat">
                <CountUp value={s.num} className="ph-stat-num" />
                <span className="ph-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
