export default function MarqueeSection() {
  const items = [
    'Artisan Dairy',
    'Traditional Carnic Cuisine',
    'Family Refuge',
    'Trails & Panoramas',
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
