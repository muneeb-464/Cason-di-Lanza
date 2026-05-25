import { useReveal } from '../../hooks/useReveal'
import { images as imgs } from '../../assets'

const galleryItems = [
  { cls: 'gi--a', src: imgs.hero,        alt: 'Paesaggi',    cap: 'Paesaggi · Sella di Lanza' },
  { cls: 'gi--b', src: imgs.gastronomia, alt: 'Gastronomia', cap: 'Gastronomia · Tavola estiva' },
  { cls: 'gi--c', src: imgs.caseificio,  alt: 'Caseificio',  cap: 'Caseificio · Stagionatura' },
  { cls: 'gi--d', src: imgs.rifugio,     alt: 'Camere',      cap: 'Rifugio · Camere' },
  { cls: 'gi--e', src: imgs.family,      alt: 'Famiglia',    cap: 'Famiglia · Inaugurazione' },
  { cls: 'gi--f', src: imgs.contact,     alt: 'Mercato',     cap: 'Mercato · Prodotti caseari' },
]

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="wrap">
        <div className="section-head reveal" ref={useReveal()}>
          <div className="left">
            <div className="divider-num">— 03 / Momenti</div>
            <h2>Momenti al <span className="italics">rifugio.</span></h2>
          </div>
          <div className="right">
            <p>Le immagini parlano della malga meglio delle parole. Tavolate al tramonto, forme di formaggio in stagionatura, e la luce alpina di luglio.</p>
          </div>
        </div>

        <div className="gallery__grid reveal" ref={useReveal()}>
          {galleryItems.map(({ cls, src, alt, cap }) => (
            <figure key={cls} className={`gi ${cls}`}>
              <img src={src} alt={alt} />
              <figcaption className="cap">{cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
