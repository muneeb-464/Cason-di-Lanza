import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/src/style.css'
import { images } from '../assets'
import NewsletterSection from '../components/home/NewsletterSection'

const PARTY_SIZES = [1, 2, 3, 4, 5, 6, 7, 8]
const TIMES = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']

const ALL_SLOTS = [
  '14:00', '14:15', '14:30', '14:45', '15:00',
  '15:15', '15:30', '15:45', '16:00', null,
  null,    null,    null,    null,    null,
]

function formatDate(d) {
  if (!d) return ''
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

export default function Reservations() {
  const [party,      setParty]      = useState('2')
  const [selected,   setSelected]   = useState(undefined)
  const [calOpen,    setCalOpen]     = useState(false)
  const [time,       setTime]        = useState('15:45')
  const [slot,       setSlot]        = useState('15:45')
  const [submitted,  setSubmitted]   = useState(false)

  const handleDaySelect = (day) => {
    setSelected(day)
    setCalOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selected) return
    setSubmitted(true)
  }

  return (
    <>
      <div className="res2">
        <div className="res2__bg" style={{ backgroundImage: `url(${images.gastronomia})` }} />
        <div className="res2__bg-overlay" />

        <div className="res2__card">
          {submitted ? (
            <div className="res2__success">
              <span className="res2__success-icon">✓</span>
              <h2>Request sent!</h2>
              <p>We will confirm within 24 hours. <em>— The Cason Family</em></p>
              <button className="btn btn--gold" style={{ marginTop: 28 }} onClick={() => setSubmitted(false)}>
                New booking <span className="arrow">→</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="res2__crumb">
                <Link to="/">Home</Link>
                <span className="res2__crumb-sep">›</span>
                <span>Book a table</span>
              </div>

              <h1 className="res2__title">Request a reservation</h1>
              <p className="res2__sub">Select your details and we'll try to get the best seats for you.</p>

              {/* FIELDS ROW */}
              <div className="res2__fields">
                <div className="res2__field">
                  <label htmlFor="res2-party">Party size</label>
                  <div className="res2__select-wrap">
                    <select id="res2-party" value={party} onChange={e => setParty(e.target.value)}>
                      {PARTY_SIZES.map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                      ))}
                      <option value="9+">9+ guests</option>
                    </select>
                    <span className="res2__chevron">▾</span>
                  </div>
                </div>

                {/* DATE — calendar picker */}
                <div className="res2__field res2__field--cal">
                  <label>Date</label>
                  <button
                    type="button"
                    className="res2__date-btn"
                    onClick={() => setCalOpen(o => !o)}
                  >
                    {selected ? formatDate(selected) : 'Pick a date'}
                    <span className="res2__chevron" style={{ position: 'static', transform: 'none', marginLeft: 'auto' }}>📅</span>
                  </button>
                  {calOpen && (
                    <div className="res2__cal-pop">
                      <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={handleDaySelect}
                        disabled={{ before: new Date() }}
                        showOutsideDays
                      />
                    </div>
                  )}
                </div>

                <div className="res2__field">
                  <label htmlFor="res2-time">Time</label>
                  <div className="res2__select-wrap">
                    <select id="res2-time" value={time} onChange={e => setTime(e.target.value)}>
                      {TIMES.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <span className="res2__chevron">▾</span>
                  </div>
                </div>
              </div>

              <div className="res2__divider" />

              <p className="res2__slots-label">Choose an available time slot:</p>
              <div className="res2__slots">
                {ALL_SLOTS.map((s, i) =>
                  s ? (
                    <button
                      key={s + i}
                      type="button"
                      className={`res2__slot${slot === s ? ' res2__slot--active' : ''}`}
                      onClick={() => setSlot(s)}
                    >
                      {s}
                    </button>
                  ) : (
                    <div key={i} className="res2__slot res2__slot--empty" />
                  )
                )}
              </div>

              <button type="submit" className="res2__cta">
                Book now
              </button>
            </form>
          )}
        </div>
      </div>

      <NewsletterSection />
    </>
  )
}
