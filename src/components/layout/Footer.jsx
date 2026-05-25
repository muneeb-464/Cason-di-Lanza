export default function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="foot__brand">
          <div className="wordmark">
            Cason di Lanza
            <small>Carnia · dal 1952</small>
          </div>
          <p>Rifugio di famiglia, caseificio di malga e cucina carnica nelle Alpi Carniche, Friuli‑Venezia Giulia.</p>
        </div>

        <div className="foot__col">
          <h4>Esperienze</h4>
          <ul>
            <li><a href="#caseificio">Caseificio</a></li>
            <li><a href="#gastronomia">Gastronomia</a></li>
            <li><a href="#rifugio">Rifugio</a></li>
            <li><a href="#storia">La nostra storia</a></li>
          </ul>
        </div>

        <div className="foot__col">
          <h4>Contatti</h4>
          <ul>
            <li><a href="tel:+390428909329">+39 0428 909 329</a></li>
            <li><a href="https://wa.me/393382255818">WhatsApp · 338 225 5818</a></li>
            <li><a href="mailto:info@casondilanza.it">info@casondilanza.it</a></li>
            <li><a href="#contatti">Modulo prenotazione</a></li>
          </ul>
        </div>

        <div className="foot__col">
          <h4>Seguici</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TripAdvisor</a></li>
            <li><a href="#news">Newsletter</a></li>
          </ul>
        </div>
      </div>

      <div className="foot__bot">
        <span>© MMXXIV · Cason di Lanza · Tutti i diritti riservati</span>
        <span>P.IVA · 02XXXXXXXXX</span>
        <span>
          <a href="#">Privacy</a> · <a href="#">Cookie</a> · <a href="#">Credits</a>
        </span>
      </div>
    </footer>
  )
}
