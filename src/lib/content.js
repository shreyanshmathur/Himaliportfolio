// ─────────────────────────────────────────────────────────────────────
// Unfinished-content handling.
// In development (npm run dev) TODO markers stay visible so missing
// content is easy to spot. In production builds, any text from "TODO:"
// onwards is dropped, along with "(TODO: ...)" asides, so unfinished
// fields never show on the live site. A field that is only a TODO
// renders as nothing, and the section that holds it is skipped.
// ─────────────────────────────────────────────────────────────────────
const SHOW_TODO = import.meta.env.DEV

export function clean(text) {
  if (typeof text !== 'string' || SHOW_TODO) return text
  const t = text.replace(/\s*\(TODO:[^)]*\)/g, '').replace(/\s*TODO:[\s\S]*$/, '').trim()
  return t || null
}

export const cleanList = (items = []) => items.map(clean).filter(Boolean)
