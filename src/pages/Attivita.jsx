import { useEffect, useRef } from 'react'
import { images } from '../assets'
import NewsletterSection from '../components/home/NewsletterSection'

const services = [
  {
    id: 'gastronomy',
    num: '01',
    tag: 'Gastronomia',
    title: 'Cucina della\ntradizione carnica.',
    lead: 'Sapori autentici a 1552 m.',
    desc: 'Cjarsons fatti a mano, frico croccante, polenta sul fuoco e salumi delle nostre vallate. Ricette di famiglia tramandate di generazione in generazione, accompagnate dal vino di casa.',
    details: ['Aperto Ven – Dom', 'Prenotazione consigliata', 'Cucina locale · stagionale'],
    img: images.gastronomia,
    imgAlt: 'Gastronomia al Cason di Lanza',
    flip: false,
    bg: 'var(--cream)',
  },
  {
    id: 'dairy',
    num: '02',
    tag: 'Caseificio',
    title: 'Formaggi di malga\nstagionati in cantina.',
    lead: 'Latte crudo dei pascoli di Lanza.',
    desc: 'Mani artigiane, tempo e passione. Produciamo formaggio, burro, ricotta e caciotta fresca stagionati nella nostra cantina di legno — prodotti nati a 1552 m e venduti direttamente in malga.',
    details: ['Vendita diretta in malga', 'Visita su prenotazione', 'Stagionatura artigianale'],
    img: images.caseificio,
    imgAlt: 'Caseificio Cason di Lanza',
    flip: true,
    bg: 'var(--ink)',
  },
  {
    id: 'guesthouse',
    num: '03',
    tag: 'Rifugio',
    title: 'Camere mansardate\ntra i monti.',
    lead: 'Il torrente è la vostra sveglia.',
    desc: 'Camere private e dormitori in legno, lenzuola fresche e finestre aperte sui pascoli. Colazione abbondante con i nostri prodotti. Mezza pensione disponibile per soggiorni completi.',
    details: ['Camere private & dormitori', 'Mezza pensione inclusa', 'Colazione con prodotti della malga'],
    img: images.rifugio,
    imgAlt: 'Rifugio Cason di Lanza',
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
              Prenota ora <span className="arrow">→</span>
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
          <h1 className="av-title">Attività</h1>
          <p className="av-title-sub">
            Tre esperienze autentiche a 1552 m — gastronomia carnica, formaggi artigianali e ospitalità di famiglia.
          </p>
          <div className="av-title-meta">
            <span><em>01</em> Gastronomia</span>
            <span><em>02</em> Caseificio</span>
            <span><em>03</em> Rifugio</span>
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
