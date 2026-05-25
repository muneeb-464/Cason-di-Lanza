import { useReveal } from '../../hooks/useReveal'

export default function MapSection() {
  return (
    <section className="map">
      <div className="wrap">
        <div className="map__grid">
          <div className="map__panel reveal" ref={useReveal()}>
            <div className="divider-num">— 05 / Location</div>
            <h2>Where to <span className="italics">find us.</span></h2>
            <p style={{ marginTop: 24, maxWidth: '42ch' }}>
              On the Sella di Lanza pass, between Paularo and Pontebba, at 1552 m altitude. Reachable by car, motorbike, or — best of all — on foot along the Carnia trails.
            </p>
            <div className="address">
              Sella di Lanza<br />
              33027 Paularo (UD)<br />
              Friuli‑Venezia Giulia
            </div>
            <div className="coord">
              <div>LAT <span>46° 33′ 12″ N</span></div>
              <div>LON <span>13° 15′ 04″ E</span></div>
              <div>ALT <span>1552 m s.l.m.</span></div>
            </div>
            <div style={{ marginTop: 36 }}>
              <a href="https://maps.google.com/?q=Cason+di+Lanza+Paularo" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                Open in maps <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <div className="map__visual reveal" ref={useReveal()}>
            <svg className="topo" viewBox="0 0 600 480" preserveAspectRatio="none" aria-hidden="true">
              <g fill="none" stroke="#F5EDD6" strokeWidth=".7">
                <path d="M0,420 C100,380 200,400 300,360 C400,320 480,340 600,300" />
                <path d="M0,380 C100,340 220,360 320,310 C420,260 500,290 600,250" />
                <path d="M0,340 C120,300 220,310 320,260 C420,210 500,240 600,200" />
                <path d="M0,300 C120,260 240,270 320,210 C420,160 500,190 600,150" />
                <path d="M0,260 C140,220 260,230 330,170 C430,110 500,140 600,100" />
                <path d="M0,220 C140,180 260,190 330,130 C430,70 500,100 600,60" />
                <path d="M0,180 C140,140 260,150 340,90 C440,30 500,60 600,20" />
              </g>
              <g stroke="#C8921A" strokeWidth="1" fill="none" strokeDasharray="4 6">
                <path d="M30,460 C150,420 230,400 312,390 L420,360" />
              </g>
            </svg>
            <div className="compass">N ↑</div>
            <div className="marker-label">Cason di Lanza · 1552 m</div>
            <div className="pin"><span className="pulse" /></div>
            <div className="alt-badge">Altitude<strong>1552 m</strong></div>
          </div>
        </div>
      </div>
    </section>
  )
}
