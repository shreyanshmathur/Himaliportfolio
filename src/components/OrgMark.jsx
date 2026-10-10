import './OrgMark.css'

// An organisation's logo where we have one; otherwise a monogram tile (logo slots)
// or the name set as a small wordmark (the hero "Worked with" row).
const SKIP = new Set(['of', 'the', 'and', 'for', '&'])

export function monogram(name) {
  const words = name.replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(w => w && !SKIP.has(w.toLowerCase()))
  if (words.length === 1) {
    const w = words[0]
    return w.length <= 4 && w === w.toUpperCase() ? w : w.slice(0, 2).toUpperCase()
  }
  return (words[0][0] + words[1][0]).toUpperCase()
}

export default function OrgMark({ name, logo, mono, className = '', as = 'tile' }) {
  if (logo) return <img className={className} src={logo} alt={`${name} logo`} title={name} />
  if (as === 'text') return <span className={`org-word ${className}`} title={name}>{name}</span>
  return <span className={`org-mono ${className}`} title={name} aria-hidden="true">{mono || monogram(name)}</span>
}
