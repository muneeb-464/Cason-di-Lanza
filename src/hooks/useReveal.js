import { useEffect, useRef } from 'react'

export function useReveal(extraClass = 'reveal') {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add(extraClass === 'reveal-stagger' ? 'reveal-stagger' : 'reveal')

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          // trigger any .hl children too
          entry.target.querySelectorAll('.hl').forEach(hl => hl.classList.add('in'))
          io.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [extraClass])

  return ref
}
