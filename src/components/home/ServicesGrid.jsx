import { useReveal } from '../../hooks/useReveal'
import { images } from '../../assets'

const services = [
  {
    id: 'caseificio',
    num: '— 01',
    tag: 'Caseificio',
    img: images.caseificio,
    title: ['Il sapore autentico', 'della montagna.'],
    desc: 'Formaggi di malga stagionati nella nostra cantina di legno: latte crudo dei pascoli di Lanza, mano artigiana, tempo che fa il suo lavoro.',
    cta: 'Visita il caseificio',
  },
  {
    id: 'gastronomia',
    num: '— 02',
    tag: 'Gastronomia',
    img: images.gastronomia,
    title: ['Cucina della', 'tradizione carnica.'],
    desc: 'Cjarsons, frico, polenta sul fuoco, salumi delle nostre vallate. Una tavola che racconta secoli di vita alpina.',
    cta: 'Guarda il menù',
  },
  {
    id: 'rifugio',
    num: '— 03',
    tag: 'Rifugio',
    img: images.rifugio,
    title: ['Dove semplicità', 'e comfort si incontrano.'],
    desc: 'Camere mansardate in legno, lenzuola fresche, finestre aperte sui monti. Il rumore del torrente è la sola sveglia che vi serve.',
    cta: 'Prenota una notte',
  },
]

export default function ServicesGrid() {
  const headRef = useReveal('reveal')
  const gridRef = useReveal('reveal-stagger')

  return (
    <section className="services" id="rifugio">
      <div className="wrap">
        <div className="section-head" ref={headRef}>
          <div className="left">
            <div className="divider-num">— 01 / Esperienze</div>
            <h2>Tre <span className="italics">modi</span> di vivere<br />la montagna.</h2>
          </div>
          <div className="right">
            <p>Una sola casa, tre tradizioni che si intrecciano: il latte dei pascoli, la cucina di famiglia, e le notti sotto il tetto in legno.</p>
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
                <h3>{svc.title[0]}<br />{svc.title[1]}</h3>
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
