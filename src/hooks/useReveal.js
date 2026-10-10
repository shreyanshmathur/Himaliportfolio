import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = [
      ...el.querySelectorAll('.reveal, .reveal-l, .reveal-r, .skc-card'),
    ]
    if (targets.length === 0) return

    const belowFold = []

    // Any element already in the viewport: reveal immediately, no IO needed
    targets.forEach((t) => {
      const rect = t.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        t.classList.add('up')
      } else {
        belowFold.push(t)
      }
    })

    if (belowFold.length === 0) return

    // Only observe elements that are genuinely below the fold
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    belowFold.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

export function useSingleReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('up')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('up')
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
