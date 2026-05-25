import { useTranslation } from 'react-i18next'
import { useReveal } from '../../hooks/useReveal'

export default function HoursBanner() {
  const { t } = useTranslation()

  return (
    <section className="hours">
      <div className="hours__inner reveal" ref={useReveal()}>
        <div className="hours__label">{t('hours.label')}</div>
        <div className="hours__main">
          <span className="gold">{t('hours.closed')}</span>
          <span className="divider" />
          <span className="when">{t('hours.when')}</span>
        </div>
        <a href="#contatti" className="btn btn--ghost-dark">
          {t('hours.cta')} <span className="arrow">→</span>
        </a>
      </div>
    </section>
  )
}
