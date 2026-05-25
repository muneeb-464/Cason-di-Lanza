export default function MarqueeSection() {
  const items = [
    'Caseificio Artigianale',
    'Cucina Tradizionale Carnica',
    'Rifugio di Famiglia',
    'Sentieri & Panorami',
  ]

  const repeated = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <span>
          {repeated.map((item, i) => (
            <span key={i}>
              {item} <em className="star">✦</em>
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}
