import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/src/style.css'

import room1 from '../assets/rooms/room 1.jpg'
import room2 from '../assets/rooms/room 2.jpg'
import room3 from '../assets/rooms/room 3.jpg'
import room4 from '../assets/rooms/room 4.jpg'
import room5 from '../assets/rooms/room 5.jpg'
import room6 from '../assets/rooms/room 6.jpg'

const ROOM_IMAGES = [room1, room2, room3, room4, room5, room6]

function formatDate(d) {
  if (!d) return ''
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

function Counter({ label, value, onChange, min = 0 }) {
  return (
    <div className="rm-counter">
      <span className="rm-counter__label">{label}</span>
      <div className="rm-counter__ctrl">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min}>−</button>
        <span>{value}</span>
        <button type="button" onClick={() => onChange(value + 1)}>+</button>
      </div>
    </div>
  )
}

export default function RoomModal({ room, onClose }) {
  const [activeImg,  setActiveImg]  = useState(0)
  const [checkin,    setCheckin]    = useState(undefined)
  const [checkout,   setCheckout]   = useState(undefined)
  const [calMode,    setCalMode]    = useState(null) // 'in' | 'out' | null
  const [adults,     setAdults]     = useState(2)
  const [children,   setChildren]   = useState(0)
  const [submitted,  setSubmitted]  = useState(false)

  // Pick images for this room (cycle through available)
  const roomIdx   = room.imageIndex ?? 0
  const imgSet    = ROOM_IMAGES.slice(roomIdx, roomIdx + 3).concat(
    ROOM_IMAGES.slice(0, Math.max(0, (roomIdx + 3) - ROOM_IMAGES.length))
  ).slice(0, 3)

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const nights = checkin && checkout
    ? Math.max(0, Math.round((checkout - checkin) / 86400000))
    : null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!checkin || !checkout || nights < 1) return
    setSubmitted(true)
  }

  return (
    <div className="rm-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="rm-modal" role="dialog" aria-modal="true">

        {/* CLOSE */}
        <button className="rm-close" onClick={onClose} aria-label="Close">✕</button>

        {submitted ? (
          <div className="rm-submitted">
            <div className="rm-submitted__icon">✓</div>
            <h2>Booking request sent!</h2>
            <p>
              <strong>{room.name}</strong> · {adults} adult{adults !== 1 ? 's' : ''}
              {children > 0 ? `, ${children} child${children !== 1 ? 'ren' : ''}` : ''}<br />
              {formatDate(checkin)} → {formatDate(checkout)} · {nights} night{nights !== 1 ? 's' : ''}
            </p>
            <p className="rm-submitted__note">We'll confirm within 24 hours. <em>— The Cason Family</em></p>
            <button className="rm-submit-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <div className="rm-layout">

            {/* LEFT — GALLERY */}
            <div className="rm-gallery">
              <div className="rm-gallery__main">
                <img src={imgSet[activeImg]} alt={room.name} />
              </div>
              <div className="rm-gallery__thumbs">
                {imgSet.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`rm-thumb${activeImg === i ? ' rm-thumb--active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img src={src} alt={`${room.name} view ${i + 1}`} />
                  </button>
                ))}
              </div>

              {/* ROOM DETAILS BELOW GALLERY */}
              <div className="rm-details">
                <div className="rm-details__section">
                  <h4>Properties</h4>
                  <ul>
                    <li><span>Accommodates</span><span>{room.capacity} guests</span></li>
                    <li><span>Beds</span><span>{room.beds}</span></li>
                    <li><span>Bathroom</span><span>{room.amenities.includes('private') ? 'Private' : 'Shared'}</span></li>
                    <li><span>Board</span><span>{room.amenities.includes('halfboard') ? 'Half board' : 'Breakfast only'}</span></li>
                  </ul>
                </div>

                <div className="rm-details__section">
                  <h4>Check-in & Check-out</h4>
                  <ul>
                    <li><span>Check-In</span><span>03:00 PM</span></li>
                    <li><span>Check-Out</span><span>10:00 AM</span></li>
                  </ul>
                </div>

                <div className="rm-details__section">
                  <h4>Amenities</h4>
                  <div className="rm-amenities">
                    {room.amenities.map(key => (
                      <span key={key} className="rm-amenity-chip">
                        {key === 'wifi' && '⚡ WiFi'}
                        {key === 'breakfast' && '☕ Breakfast'}
                        {key === 'halfboard' && '🍽 Half board'}
                        {key === 'private' && '🚿 Private bath'}
                        {key === 'shared' && '🚿 Shared bath'}
                        {key === 'mountain' && '🏔 Mountain view'}
                        {key === 'lockers' && '🔒 Lockers'}
                        {key === 'towels' && '🛌 Linen & towels'}
                      </span>
                    ))}
                    <span className="rm-amenity-chip">🐾 Pets (surcharge)</span>
                  </div>
                </div>

                <p className="rm-policy-link">
                  <Link to="#" onClick={onClose}>Read our policies →</Link>
                </p>
              </div>
            </div>

            {/* RIGHT — BOOKING FORM */}
            <div className="rm-booking">
              <div className="rm-booking__head">
                <span className="rm-booking__type">{room.type}</span>
                <h2 className="rm-booking__name">{room.name}</h2>
                <p className="rm-booking__tagline">{room.tagline}</p>
                <p className="rm-booking__desc">{room.desc}</p>
              </div>

              <div className="rm-booking__price">
                <span>From</span>
                <strong>€{room.price}</strong>
                <span>/ person / night</span>
              </div>

              <form className="rm-form" onSubmit={handleSubmit} noValidate>
                {/* DATES */}
                <div className="rm-dates">
                  <div className="rm-date-field">
                    <label>Check-in</label>
                    <button
                      type="button"
                      className={`rm-date-btn${calMode === 'in' ? ' rm-date-btn--open' : ''}`}
                      onClick={() => setCalMode(calMode === 'in' ? null : 'in')}
                    >
                      {checkin ? formatDate(checkin) : 'Select date'}
                      <span>📅</span>
                    </button>
                  </div>
                  <div className="rm-dates-arrow">→</div>
                  <div className="rm-date-field">
                    <label>Check-out</label>
                    <button
                      type="button"
                      className={`rm-date-btn${calMode === 'out' ? ' rm-date-btn--open' : ''}`}
                      onClick={() => setCalMode(calMode === 'out' ? null : 'out')}
                    >
                      {checkout ? formatDate(checkout) : 'Select date'}
                      <span>📅</span>
                    </button>
                  </div>
                </div>

                {/* CALENDAR POPUP */}
                {calMode && (
                  <div className="rm-cal-pop">
                    <DayPicker
                      mode="single"
                      selected={calMode === 'in' ? checkin : checkout}
                      onSelect={(day) => {
                        if (calMode === 'in') {
                          setCheckin(day)
                          if (checkout && day >= checkout) setCheckout(undefined)
                          setCalMode('out')
                        } else {
                          if (checkin && day <= checkin) return
                          setCheckout(day)
                          setCalMode(null)
                        }
                      }}
                      disabled={calMode === 'out'
                        ? { before: checkin ? new Date(checkin.getTime() + 86400000) : new Date() }
                        : { before: new Date() }
                      }
                      showOutsideDays
                    />
                    <button type="button" className="rm-cal-close" onClick={() => setCalMode(null)}>Done</button>
                  </div>
                )}

                {nights > 0 && (
                  <div className="rm-nights">
                    {nights} night{nights !== 1 ? 's' : ''} · €{room.price * (adults + Math.ceil(children * 0.5))} estimated total
                  </div>
                )}

                {/* GUESTS */}
                <div className="rm-guests">
                  <Counter label="Adults"   value={adults}   onChange={setAdults}   min={1} />
                  <Counter label="Children" value={children} onChange={setChildren} min={0} />
                </div>

                {/* ROOM DETAILS SUMMARY */}
                <div className="rm-summary">
                  <span>Max {room.capacity} guests</span>
                  <span>·</span>
                  <span>{room.beds}</span>
                  <span>·</span>
                  <span>{room.amenities.includes('private') ? 'Private bath' : 'Shared bath'}</span>
                </div>

                <button
                  type="submit"
                  className="rm-submit-btn"
                  disabled={!checkin || !checkout || nights < 1}
                >
                  {checkin && checkout && nights >= 1
                    ? `Confirm booking · ${nights} night${nights !== 1 ? 's' : ''}`
                    : 'Select dates to book'
                  }
                </button>

                <p className="rm-terms">
                  By booking you agree to our <Link to="#" onClick={onClose}>terms & policies</Link>.
                  Half board (breakfast + dinner) included in all room prices.
                  Pets welcome with a €10/night surcharge.
                </p>
              </form>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}
