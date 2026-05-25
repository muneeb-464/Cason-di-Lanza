import { useTranslation } from 'react-i18next'
import { images } from '../../assets'

export default function HeroSection() {
  const { t } = useTranslation()
  return (
    <header className="hero" id="top">
      <div className="hero__bg" style={{ backgroundImage: `url(${images.hero})` }} />
      <div className="hero__overlay" />

      <div className="hero__grid">
        <div>
          <div className="eyebrow on-dark" style={{ marginBottom: 22 }}>
            <span className="dot" /> {t('hero.eyebrow')} <span className="dot" />
          </div>
          <h1 className="hero__title">
            <span className="line"><span>Cason</span></span>
            <span className="line"><span className="it">di</span></span>
            <span className="line"><span>Lanza.</span></span>
          </h1>
          <p className="hero__sub">{t('hero.sub')}</p>
          <div className="hero__actions">
            <a href="#storia" className="btn btn--ghost-dark">{t('hero.scopri')} <span className="arrow">→</span></a>
            <a href="#contatti" className="btn btn--gold">{t('hero.contattaci')} <span className="arrow">→</span></a>
          </div>
        </div>

        <aside className="hero__meta">
          <span className="label">Altitude</span>
          <div className="value">1552 m a.s.l.<small>Sella di Lanza, Paularo (UD)</small></div>
          <span className="label">Season</span>
          <div className="value">Friday – Sunday<small>9:00 – 21:00 · closed from 28 Sept.</small></div>
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
