import { useReveal } from '../../hooks/useReveal'

export default function HoursBanner() {
  return (
    <section className="hours">
      <div className="hours__inner reveal" ref={useReveal()}>
        <div className="hours__label">Orari d'apertura · MMXXIV</div>
        <div className="hours__main">
          <span className="gold">Chiuso a partire dal 28 settembre.</span>
          <span className="divider" />
          <span className="when">Venerdì — Domenica · 9:00 – 21:00 · Cucina su prenotazione</span>
        </div>
        <a href="#contatti" className="btn btn--ghost-dark">
          Prenota un tavolo <span className="arrow">→</span>
        </a>
      </div>
    </section>
  )
}
