import { useEffect, useRef } from 'react'
import { images } from '../assets'
import NewsletterSection from '../components/home/NewsletterSection'

const services = [
  {
    id: 'gastronomy',
    num: '01',
    tag: 'Gastronomy',
    title: 'Traditional\nCarnic cuisine.',
    lead: 'Authentic flavours at 1552 m.',
    desc: 'Hand-made cjarsons, crispy frico, polenta on the fire, and local cured meats. Family recipes passed down through generations, served with the house wine.',
    details: ['Open Fri – Sun', 'Reservation recommended', 'Local · seasonal kitchen'],
    img: images.gastronomia,
    imgAlt: 'Gastronomy at Cason di Lanza',
    flip: false,
    bg: 'var(--cream)',
  },
  {
    id: 'dairy',
    num: '02',
    tag: 'Dairy',
    title: 'Alpine cheeses\naged in the cellar.',
    lead: 'Raw milk from the Lanza pastures.',
    desc: 'Skilled hands, time, and passion. We produce cheese, butter, ricotta, and fresh caciotta aged in our wooden cellar — born at 1552 m and sold directly at the refuge.',
    details: ['Direct sale at the refuge', 'Visit by appointment', 'Artisan ageing'],
    img: images.caseificio,
    imgAlt: 'Cason di Lanza dairy',
    flip: true,
    bg: 'var(--ink)',
  },
  {
    id: 'guesthouse',
    num: '03',
    tag: 'Refuge',
    title: 'Attic rooms\namong the mountains.',
    lead: 'The stream is your alarm clock.',
    desc: 'Private rooms and wooden dormitories, fresh linen, and windows open to the pastures. Generous breakfast with our own products. Half board available for full stays.',
    details: ['Private rooms & dormitories', 'Half board included', 'Breakfast with refuge products'],
    img: images.rifugio,
    imgAlt: 'Cason di Lanza refuge',
    flip: false,
    bg: 'var(--cream-2)',
  },
]

function useInView() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('av-visible'); io.unobserve(el) } },
      { threshold: 0.08 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

function ServiceBlock({ num, tag, title, lead, desc, details, img, imgAlt, flip, bg }) {
  const ref = useInView()
  const dark = bg === 'var(--ink)'

  return (
    <article
      className={`avb${flip ? ' avb--flip' : ''}${dark ? ' avb--dark' : ''}`}
      style={{ background: bg }}
      ref={ref}
    >
      {/* IMAGE PANEL */}
      <div className="avb__img-wrap">
        <img src={img} alt={imgAlt} className="avb__img" />
        <div className="avb__img-overlay" />
        <span className="avb__watermark">{tag}</span>
        <div className="avb__img-badge">
          <span className="avb__img-badge-num">{num}</span>
          <span className="avb__img-badge-label">/ 03</span>
        </div>
      </div>

      {/* CONTENT PANEL */}
      <div className="avb__body">
        <div className="avb__body-inner">
          <div className="avb__tag-row">
            <span className="avb__num-bg">{num}</span>
            <span className="avb__tag">{tag}</span>
          </div>

          <p className="avb__lead">{lead}</p>

          <h2 className="avb__title">
            {title.split('\n').map((l, i) => <span key={i} className="avb__title-line">{l}</span>)}
          </h2>

          <div className="avb__rule" />

          <p className="avb__desc">{desc}</p>

          <ul className="avb__details">
            {details.map(d => (
              <li key={d}>
                <span className="avb__details-dot" />
                {d}
              </li>
            ))}
          </ul>

          <div className="avb__actions">
            <a href="/#contatti" className="btn btn--gold">
              Book now <span className="arrow">→</span>
            </a>
            {!dark && (
              <a href="/#contatti" className="btn btn--outline">
                Info <span className="arrow">→</span>
              </a>
            )}
            {dark && (
              <a href="/#contatti" className="btn btn--ghost-dark">
                Info <span className="arrow">→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Attivita() {
  return (
    <>
      {/* ── PAGE TITLE ── */}
      <section className="av-title-section">
        <div className="av-title-inner">
          <div className="eyebrow"><span className="dot" /> Cason di Lanza · Carnia <span className="dot" /></div>
          <h1 className="av-title">Activities</h1>
          <p className="av-title-sub">
            Three authentic experiences at 1552 m — Carnic gastronomy, artisan cheeses, and family hospitality.
          </p>
          <div className="av-title-meta">
            <span><em>01</em> Gastronomy</span>
            <span><em>02</em> Dairy</span>
            <span><em>03</em> Refuge</span>
          </div>
        </div>
      </section>

      {/* ── BLOCKS ── */}
      <div className="av-blocks">
        {services.map(svc => <ServiceBlock key={svc.id} {...svc} />)}
      </div>

      {/* ── NEWSLETTER ── */}
      <NewsletterSection />
    </>
  )
}
