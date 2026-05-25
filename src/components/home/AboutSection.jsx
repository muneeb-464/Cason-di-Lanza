import { useReveal } from '../../hooks/useReveal'
import { images } from '../../assets'

export default function AboutSection() {
  return (
    <section className="about" id="storia">
      <div className="wrap">
        <div className="about__grid">
          <div className="about__media reveal" ref={useReveal()}>
            <span className="alt-tag">Famiglia · dal 1952</span>
            <img src={images.family} alt="La famiglia Cason di Lanza" />
            <div className="stamp">
              <div>
                <strong>72</strong>
                anni di<br />ospitalità
              </div>
            </div>
          </div>

          <div className="about__text reveal" ref={useReveal()}>
            <div className="divider-num">— 02 / La nostra storia</div>
            <h2>Una <span className="italics">malga</span><br />che è una casa.</h2>
            <p className="lead">
              Da tre generazioni custodiamo questa malga tra le Alpi Carniche: i pascoli, gli animali, la cucina di nonna, e i visitatori che lasciano un nome sul registro e tornano l'estate dopo.
            </p>
            <p className="body">
              Cason di Lanza nasce come pascolo d'alpeggio e si è trasformato, nei decenni, in un rifugio di famiglia dove la montagna si mangia, si dorme e si ascolta. Nessuno qui è di passaggio per davvero — anche chi resta una sola notte porta a casa qualcosa.
            </p>

            <div className="about__stats">
              <div className="stat"><span className="n">1552</span><span className="l">metri di quota</span></div>
              <div className="stat"><span className="n">3</span><span className="l">generazioni</span></div>
              <div className="stat"><span className="n">4.9</span><span className="l">recensioni ★</span></div>
            </div>

            <div style={{ marginTop: 50 }}>
              <a href="#contatti" className="btn btn--gold">Contattaci <span className="arrow">→</span></a>
            </div>

            <div className="about__sign">
              <span className="line" />
              <span>— Famiglia Cason</span>
              <span className="line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
