import { useState } from 'react'
import { Link } from 'react-router-dom'

import NewsletterSection from '../components/home/NewsletterSection'
import RoomModal from '../components/ui/RoomModal'

import room1 from '../components/assets/rooms/room 1.jpg'
import room2 from '../components/assets/rooms/room 2.jpg'
import room3 from '../components/assets/rooms/room 3.jpg'
import room4 from '../components/assets/rooms/room 4.jpg'
import room5 from '../components/assets/rooms/room 5.jpg'
import room6 from '../components/assets/rooms/room 6.jpg'

const FILTERS = ['All', 'Double', 'Triple', 'Dormitory', 'Family']

const AMENITY_ICONS = {
  wifi:      { icon: '⚡', label: 'WiFi' },
  breakfast: { icon: '☕', label: 'Breakfast' },
  halfboard: { icon: '🍽', label: 'Half board' },
  private:   { icon: '🚿', label: 'Private bath' },
  shared:    { icon: '🚿', label: 'Shared bath' },
  mountain:  { icon: '🏔', label: 'View' },
  lockers:   { icon: '🔒', label: 'Lockers' },
  towels:    { icon: '🛌', label: 'Linen' },
}

const rooms = [
  {
    id: 'double',
    type: 'Double',
    name: 'Double Room',
    tagline: 'Intimate alpine retreat',
    desc: 'Cosy double room under the wooden eaves with shared bathroom. Half board included — breakfast and dinner. Bed linen and towels provided. Pets allowed with surcharge.',
    amenities: ['wifi', 'breakfast', 'halfboard', 'shared', 'towels'],
    price: 67,
    img: room1,
    capacity: 2,
    beds: '1 Queen bed',
    imageIndex: 0,
  },
  {
    id: 'triple-shared',
    type: 'Triple',
    name: 'Triple Room',
    tagline: 'Perfect for small groups',
    desc: 'Triple room with shared bathroom. Half board included (breakfast and 3-course dinner). Timber ceiling and mountain-facing window.',
    amenities: ['wifi', 'breakfast', 'halfboard', 'shared', 'towels'],
    price: 67,
    img: room2,
    capacity: 3,
    beds: '1 Double + 1 Single',
    imageIndex: 1,
  },
  {
    id: 'triple-private',
    type: 'Triple',
    name: 'Triple — Ensuite',
    tagline: 'Extra comfort, same mountain',
    desc: 'Triple room with private ensuite bathroom. Half board included. The quietest corner of the refuge with panoramic mountain view.',
    amenities: ['wifi', 'breakfast', 'halfboard', 'private', 'mountain', 'towels'],
    price: 70,
    img: room3,
    capacity: 3,
    beds: '1 Double + 1 Single',
    imageIndex: 2,
  },
  {
    id: 'family',
    type: 'Family',
    name: 'Family Room',
    tagline: 'Room for everyone',
    desc: 'Quadruple room with private bathroom. Bunk beds for the kids, double for adults. Half board included. Breakfast with our own dairy products.',
    amenities: ['wifi', 'breakfast', 'halfboard', 'private', 'towels'],
    price: 67,
    img: room4,
    capacity: 4,
    beds: '1 Double + 2 Singles',
    imageIndex: 3,
  },
  {
    id: 'dormitory-5',
    type: 'Dormitory',
    name: 'Dormitory X5',
    tagline: 'For hikers & trail runners',
    desc: 'Shared dormitory with 5 beds and shared bathroom. Ideal for solo trekkers and trail groups. Arrive tired, leave rested.',
    amenities: ['wifi', 'shared', 'lockers', 'towels'],
    price: 35,
    img: room5,
    capacity: 5,
    beds: '5 Single beds',
    imageIndex: 4,
  },
  {
    id: 'dormitory-6',
    type: 'Dormitory',
    name: 'Dormitory X6',
    tagline: 'Social sleeping, alpine style',
    desc: 'Six-bed dormitory with shared bathroom on the same floor. Full mountain panorama from the common balcony.',
    amenities: ['wifi', 'shared', 'lockers', 'mountain', 'towels'],
    price: 35,
    img: room6,
    capacity: 6,
    beds: '6 Single beds',
    imageIndex: 5,
  },
]

export default function BookRoom() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [modalRoom,    setModalRoom]    = useState(null)

  const filtered = activeFilter === 'All'
    ? rooms
    : rooms.filter(r => r.type === activeFilter)

  return (
    <>
      {/* HERO */}
      <section className="br-hero">
        <div className="br-hero__bg" style={{ backgroundImage: `url(${room1})` }} />
        <div className="br-hero__overlay" />
        <div className="br-hero__content">
          <div className="eyebrow on-dark"><span className="dot" /> Cason di Lanza · 1552 m <span className="dot" /></div>
          <h1 className="br-hero__title">Stay with us</h1>
          <p className="br-hero__sub">
            Wooden attic rooms, fresh linen, windows open to the Alps.
            Half board included — breakfast from our dairy, dinner from the kitchen.
          </p>
          <div className="br-hero__badges">
            <span>🛏 6 room types</span>
            <span>☕ Breakfast included</span>
            <span>🏔 1552 m altitude</span>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <div className="br-strip">
        <div className="br-strip__inner">
          <span>From <strong>€35</strong> / person / night</span>
          <span className="br-strip__div" />
          <span>Half board available</span>
          <span className="br-strip__div" />
          <span>Open Fri – Sun · Closes 28 Sept.</span>
          <Link to="/reservations" className="br-strip__cta">
            Book now →
          </Link>
        </div>
      </div>

      {/* ROOMS */}
      <section className="br-section">
        <div className="wrap">

          {/* FILTERS */}
          <div className="br-filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`br-filter${activeFilter === f ? ' br-filter--active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
            <span className="br-filter-count">{filtered.length} room{filtered.length !== 1 ? 's' : ''}</span>
          </div>

          {/* GRID */}
          <div className="br-grid">
            {filtered.map(room => (
              <article key={room.id} className="br-card">

                <div className="br-card__img-wrap">
                  <img src={room.img} alt={room.name} className="br-card__img" />
                  <div className="br-card__img-overlay" />
                  <div className="br-card__img-meta">
                    <span className="br-card__type-badge">{room.type}</span>
                    <span className="br-card__cap">{'●'.repeat(Math.min(room.capacity, 5))} {room.capacity} guests</span>
                  </div>
                </div>

                <div className="br-card__body">
                  <div className="br-card__top">
                    <div>
                      <h2 className="br-card__name">{room.name}</h2>
                      <p className="br-card__tagline">{room.tagline}</p>
                    </div>
                    <div className="br-card__price">
                      <span className="br-card__price-from">from</span>
                      <span className="br-card__price-num">€{room.price}</span>
                    </div>
                  </div>

                  <p className="br-card__desc">{room.desc}</p>

                  <div className="br-card__amenities">
                    {room.amenities.map(key => (
                      <span key={key} className="br-amenity">
                        {AMENITY_ICONS[key].icon} {AMENITY_ICONS[key].label}
                      </span>
                    ))}
                  </div>

                  <button type="button" className="br-card__cta" onClick={() => setModalRoom(room)}>
                    Book this room →
                  </button>
                </div>

              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="br-empty">No rooms match this filter.</p>
          )}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="br-includes">
        <div className="wrap">
          <div className="br-includes__head">
            <div className="divider-num">— What's included</div>
            <h2>Every night, <span className="italics">everything</span> covered.</h2>
          </div>
          <div className="br-includes__grid">
            {[
              { icon: '☕', title: 'Alpine breakfast', desc: 'Our own dairy cheeses, fresh bread, cold cuts, homemade jam — every morning at 8:00.' },
              { icon: '🍽', title: 'Half board dinner', desc: 'Three-course Carnic dinner: soup, main, dessert. Vegetarian on request.' },
              { icon: '🛌', title: 'Linen & towels', desc: 'Fresh linen and towels provided. Changed every two nights.' },
              { icon: '🚗', title: 'Free parking', desc: 'Unlimited parking at the refuge. EV charging point available on request.' },
              { icon: '🏔', title: 'Trail access', desc: 'Direct access to marked trails. Maps and route advice at reception.' },
              { icon: '🧀', title: 'Dairy visit', desc: 'Guided visit to our artisan dairy — included for all overnight guests.' },
            ].map(item => (
              <div key={item.title} className="br-inc-card">
                <span className="br-inc-card__icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="br-cta">
        <div className="br-cta__inner">
          <div className="eyebrow on-dark"><span className="dot" /> Direct booking <span className="dot" /></div>
          <h2>Questions?<br />Call us directly.</h2>
          <p>For same-day availability or group bookings, the phone is always faster.</p>
          <div className="br-cta__actions">
            <a href="tel:+390428909329" className="br-cta__phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>
              +39 0428 909 329
            </a>
            <Link to="/reservations" className="btn btn--gold">
              Book online <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />

      {modalRoom && (
        <RoomModal room={modalRoom} onClose={() => setModalRoom(null)} />
      )}
    </>
  )
}
