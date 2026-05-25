import { useTranslation } from 'react-i18next'
import { useReveal } from '../../hooks/useReveal'
import { images } from '../../assets'

export default function ServicesGrid() {
  const { t } = useTranslation()
  const headRef = useReveal('reveal')
  const gridRef = useReveal('reveal-stagger')

  const services = [
    {
      id: 'caseificio',
      num: '— 01',
      tag: 'Caseificio',
      img: images.caseificio,
      title: t('services.caseificio_title'),
      desc: t('services.caseificio_desc'),
      cta: t('services.caseificio_cta'),
    },
    {
      id: 'gastronomia',
      num: '— 02',
      tag: 'Gastronomia',
      img: images.gastronomia,
      title: t('services.gastro_title'),
      desc: t('services.gastro_desc'),
      cta: t('services.gastro_cta'),
    },
    {
      id: 'rifugio',
      num: '— 03',
      tag: 'Rifugio',
      img: images.rifugio,
      title: t('services.rifugio_title'),
      desc: t('services.rifugio_desc'),
      cta: t('services.rifugio_cta'),
    },
  ]

  return (
    <section className="services" id="rifugio">
      <div className="wrap">
        <div className="section-head" ref={headRef}>
          <div className="left">
            <div className="divider-num">— {t('services.eyebrow')}</div>
            <h2>{t('services.title')}</h2>
          </div>
          <div className="right">
            <p>{t('services.desc')}</p>
          </div>
        </div>

        <div className="services__grid" ref={gridRef}>
          {services.map((svc) => (
            <article className="svc" key={svc.id} id={svc.id}>
              <div className="svc__img" style={{ backgroundImage: `url('${svc.img}')` }} />
              <div className="svc__shade" />
              <span className="svc__num">{svc.num}</span>
              <span className="svc__tag">{svc.tag}</span>
              <div className="svc__content">
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <span className="svc__cta">{svc.cta} <span>→</span></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
