import { useEffect, useRef, useState } from 'react'

// Animates the number inside a figure like "AED 1.7M", "₹20 Cr+", "25%" or "1,000+"
// from zero when it scrolls into view. Text without a number renders as is.
const NUM = /(\d[\d,]*(?:\.\d+)?)/

export default function CountUp({ value, duration = 1100, className }) {
  const ref = useRef(null)
  const found = typeof value === 'string' ? value.match(NUM) : null
  // A bare 4+ digit number is a name or year ("ISO 9001"), not a figure: leave it still.
  const match = found && !(found[1].length >= 4 && !found[1].includes(',')) ? found : null
  const target = match ? parseFloat(match[1].replace(/,/g, '')) : 0
  const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0
  const grouped = match ? match[1].includes(',') : false
  // Starts at the final value, so the figure is right even if the animation never runs.
  const [shown, setShown] = useState(target)

  useEffect(() => {
    if (!match) return
    const el = ref.current
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) return

    let raf
    const run = () => {
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration)
        setShown(target * (1 - Math.pow(1 - t, 3)))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    // Already on screen: count up now. Below the fold: zero it and count up when it arrives.
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      run()
      return () => cancelAnimationFrame(raf)
    }
    setShown(0)
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { run(); io.disconnect() }
    }, { threshold: 0.2 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [target, duration, Boolean(match)])

  if (!match) return <span className={className}>{value}</span>

  const n = shown.toFixed(decimals)
  const text = grouped ? Number(n).toLocaleString('en-US', { minimumFractionDigits: decimals }) : n
  const [before, after] = [value.slice(0, match.index), value.slice(match.index + match[1].length)]

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden="true">{before}{text}{after}</span>
    </span>
  )
}
