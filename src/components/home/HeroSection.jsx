import { images } from '../../assets'

export default function HeroSection() {
  return (
    <header className="hero" id="top">
      <div className="hero__bg" style={{ backgroundImage: `url(${images.hero})` }} />
      <div className="hero__overlay" />

      <div className="hero__grid">
        <div>
          <div className="eyebrow on-dark" style={{ marginBottom: 22 }}>
            <span className="dot" /> Alpi Carniche · Friuli‑Venezia Giulia <span className="dot" />
          </div>
          <h1 className="hero__title">
            <span className="line"><span>Cason</span></span>
            <span className="line"><span className="it">di</span></span>
            <span className="line"><span>Lanza.</span></span>
          </h1>
          <p className="hero__sub">
            "Dove accoglienza ed ospitalità sono di casa." Una malga di famiglia tra i pascoli alti, dal 1552 metri sul livello del mare.
          </p>
          <div className="hero__actions">
            <a href="#storia" className="btn btn--ghost-dark">Scopri di più <span className="arrow">→</span></a>
            <a href="#contatti" className="btn btn--gold">Contattaci <span className="arrow">→</span></a>
          </div>
        </div>

        <aside className="hero__meta">
          <span className="label">Quota</span>
          <div className="value">1552 m s.l.m.<small>Sella di Lanza, Paularo (UD)</small></div>
          <span className="label">Stagione</span>
          <div className="value">Venerdì – Domenica<small>9:00 – 21:00 · chiuso dal 28 sett.</small></div>
        </aside>
      </div>

      <div className="hero__scroll">
        <div className="bar" />
        Scroll
      </div>
      <div className="hero__ticker">
        46°33′N <span className="sep">/</span> 13°15′E <span className="sep">/</span> ALT. 1552m
      </div>
    </header>
  )
}
