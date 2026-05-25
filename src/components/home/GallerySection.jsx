import { useReveal } from '../../hooks/useReveal'
import { images as imgs } from '../../assets'

const galleryItems = [
  { cls: 'gi--a', src: imgs.hero,        alt: 'Landscape',   cap: 'Landscape · Sella di Lanza' },
  { cls: 'gi--b', src: imgs.gastronomia, alt: 'Gastronomy',  cap: 'Gastronomy · Summer table' },
  { cls: 'gi--c', src: imgs.caseificio,  alt: 'Dairy',       cap: 'Dairy · Ageing cellar' },
  { cls: 'gi--d', src: imgs.rifugio,     alt: 'Rooms',       cap: 'Refuge · Rooms' },
  { cls: 'gi--e', src: imgs.family,      alt: 'Family',      cap: 'Family · Opening day' },
  { cls: 'gi--f', src: imgs.contact,     alt: 'Market',      cap: 'Market · Dairy products' },
]

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="wrap">
        <div className="section-head reveal" ref={useReveal()}>
          <div className="left">
            <div className="divider-num">— 03 / Moments</div>
            <h2>Moments at the <span className="italics">refuge.</span></h2>
          </div>
          <div className="right">
            <p>Images speak of the refuge better than words. Sunset dinners, wheels of cheese ageing in the cellar, and the alpine light of July.</p>
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
