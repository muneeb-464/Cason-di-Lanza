import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'

export default function NewsletterSection() {
  const [done, setDone] = useState(false)

  return (
    <section className="news" id="news">
      <div className="news__inner reveal" ref={useReveal()}>
        <div className="eyebrow on-dark">
          <span className="dot" /> Lettera dalla malga <span className="dot" />
        </div>
        <h2>Iscriviti per <span className="it">aggiornamenti</span> esclusivi.</h2>
        <p>
          Una mail ogni due mesi, scritta dalla famiglia: nuove stagionature, eventi in malga, prime aperture e qualche fotografia dalla finestra. Niente promozioni, niente rumore.
        </p>
        <form
          className="news__form"
          onSubmit={(e) => { e.preventDefault(); setDone(true) }}
        >
          <input
            type="email"
            placeholder={done ? '✓ Iscritto, grazie!' : 'vostro@indirizzo.it'}
            required
            disabled={done}
          />
          {!done && (
            <button type="submit">Unisciti <span>→</span></button>
          )}
        </form>
      </div>
    </section>
  )
}
