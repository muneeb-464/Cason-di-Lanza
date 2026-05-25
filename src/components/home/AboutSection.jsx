import { useTranslation } from 'react-i18next'
import { useReveal } from '../../hooks/useReveal'
import { images } from '../../assets'

export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <section className="about" id="storia">
      <div className="wrap">
        <div className="about__grid">
          <div className="about__media reveal" ref={useReveal()}>
            <span className="alt-tag">Family · since 1952</span>
            <img src={images.family} alt="The Cason di Lanza family" />
            <div className="stamp">
              <div>
                <strong>72</strong>
                years of<br />hospitality
              </div>
            </div>
          </div>

          <div className="about__text reveal" ref={useReveal()}>
            <div className="divider-num">— {t('about.eyebrow')}</div>
            <h2>{t('about.title')}</h2>
            <p className="lead">{t('about.lead')}</p>
            <p className="body">{t('about.body')}</p>

            <div className="about__stats">
              <div className="stat"><span className="n">1552</span><span className="l">{t('about.stat_quota')}</span></div>
              <div className="stat"><span className="n">3</span><span className="l">{t('about.stat_gen')}</span></div>
              <div className="stat"><span className="n">4.9</span><span className="l">{t('about.stat_rec')}</span></div>
            </div>

            <div style={{ marginTop: 50 }}>
              <a href="#contatti" className="btn btn--gold">{t('hero.contattaci')} <span className="arrow">→</span></a>
            </div>

            <div className="about__sign">
              <span className="line" />
              <span>— {t('about.sign')}</span>
              <span className="line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
