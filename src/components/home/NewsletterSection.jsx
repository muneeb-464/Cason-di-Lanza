import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../../hooks/useReveal'

export default function NewsletterSection() {
  const [done, setDone] = useState(false)
  const { t } = useTranslation()

  return (
    <section className="news" id="news">
      <div className="news__inner reveal" ref={useReveal()}>
        <div className="eyebrow on-dark">
          <span className="dot" /> {t('newsletter.eyebrow')} <span className="dot" />
        </div>
        <h2>{t('newsletter.title')}</h2>
        <p>{t('newsletter.desc')}</p>
        <form
          className="news__form"
          onSubmit={(e) => { e.preventDefault(); setDone(true) }}
        >
          <input
            type="email"
            placeholder={done ? '✓' : t('newsletter.placeholder')}
            required
            disabled={done}
          />
          {!done && (
            <button type="submit">{t('newsletter.btn')} <span>→</span></button>
          )}
        </form>
      </div>
    </section>
  )
}
