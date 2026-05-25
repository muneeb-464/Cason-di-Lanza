import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useReveal } from '../../hooks/useReveal'
import { images } from '../../assets'

const channels = [
  {
    href: 'tel:+390428909329',
    label: 'Phone',
    value: '+39 0428 909 329',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    href: 'https://wa.me/393382255818',
    label: 'WhatsApp',
    value: '+39 338 225 5818',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 3.5A10 10 0 0 0 4 16.4L3 21l4.7-1.2A10 10 0 1 0 20.5 3.5zM12 19a7 7 0 0 1-3.6-1l-.3-.2-2.8.7.8-2.7-.2-.3a7 7 0 1 1 6.1 3.5z" />
      </svg>
    ),
  },
  {
    href: 'mailto:info@casondilanza.it',
    label: 'Email',
    value: 'info@casondilanza.it',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="M3 7l9 7 9-7" />
      </svg>
    ),
  },
  {
    href: 'https://maps.google.com/?q=Cason+di+Lanza+Paularo',
    label: 'Address',
    value: 'Sella di Lanza · Paularo (UD)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s-7-7-7-13a7 7 0 1 1 14 0c0 6-7 13-7 13z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const { t } = useTranslation()

  return (
    <section className="contact" id="contatti">
      <div className="wrap">
        <div className="contact__top reveal" ref={useReveal()}>
          <div>
            <div className="divider-num">— {t('contact.eyebrow')}</div>
            <h2>{t('contact.title')}</h2>
          </div>
          <div>
            <p>{t('contact.desc')}</p>
            <div className="meta">
              <span>{t('contact.reply')}</span>
              <span>Italian · German · English</span>
              <span>No online booking required</span>
            </div>
          </div>
        </div>

        <div className="contact__layout">
          <div className="contact__left reveal" ref={useReveal()} style={{ '--contact-bg': `url(${images.contact})` }}>
            <div className="corner-tag">
              <span>Cason di Lanza · Carnia</span>
              <span className="live"><span className="dot" /> Open today</span>
            </div>

            <div className="contact__channels">
              <p className="contact__lead">
                Four ways to reach us. <span className="gold">The phone</span> is still grandma's favourite.
              </p>

              {channels.map(({ href, label, value, icon }) => (
                <a key={label} href={href} className="chan" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <span className="chan__icon">{icon}</span>
                  <span className="chan__body">
                    <span className="label">{label}</span>
                    <span className="value">{value}</span>
                  </span>
                  <span className="chan__arrow">→</span>
                </a>
              ))}

              <div className="contact__socials">
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2.2C16.4 2.1 15 2 13.6 2 10.7 2 8.5 3.7 8.5 7v3H5v4h3.5v8H13z" /></svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                </a>
                <a href="https://wa.me/393382255818" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A10 10 0 0 0 4 16.4L3 21l4.7-1.2A10 10 0 1 0 20.5 3.5zM12 19a7 7 0 0 1-3.6-1l-.3-.2-2.8.7.8-2.7-.2-.3a7 7 0 1 1 6.1 3.5z" /></svg>
                </a>
              </div>
            </div>
          </div>

          <form
            className="contact__form reveal"
            ref={useReveal()}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
          >
            <div className="form__stamp">
              <div><strong>1552</strong> m s.l.m.</div>
            </div>

            <div className="form__head">
              <div>
                <div className="divider-num" style={{ marginBottom: 6 }}>— Booking form</div>
                <h3>Drop us a message.</h3>
                <p className="sub">All fields optional except email. We reply within 24 hours.</p>
              </div>
              <div className="step">Step 1 / 2</div>
            </div>

            <div className="reasons">
              <span className="label">Reason for enquiry</span>
              {['A room', 'A table', 'Dairy visit', 'Groups & events', 'Other'].map((r, i) => (
                <label key={r} className="reason">
                  <input type="radio" name="motivo" value={r.toLowerCase()} defaultChecked={i === 0} />
                  <span className="ric" /><span>{r}</span>
                </label>
              ))}
            </div>

            <div className="fgrid">
              <div className="fld">
                <input type="text" id="nome" placeholder=" " />
                <label htmlFor="nome">First name</label>
              </div>
              <div className="fld">
                <input type="text" id="cognome" placeholder=" " />
                <label htmlFor="cognome">Last name</label>
              </div>
              <div className="fld fld--full">
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Email *</label>
              </div>
              <div className="fld">
                <input type="text" id="ospiti" placeholder=" " />
                <label htmlFor="ospiti">Number of guests</label>
              </div>
              <div className="fld">
                <input type="date" id="data" placeholder=" " />
                <label htmlFor="data">Preferred date</label>
              </div>
              <div className="fld fld--full">
                <textarea id="messaggio" placeholder=" " />
                <label htmlFor="messaggio">Message</label>
              </div>
              <label className="fld--check">
                <input type="checkbox" />
                <span>I consent to my data being used to be contacted. No marketing, refuge's word.</span>
              </label>
              <div className="fsubmit">
                <span className="note">
                  {submitted ? '✓' : t('contact.reply')}
                </span>
                <button type="submit" className="btn btn--gold">
                  {t('contact.send')} <span className="arrow">→</span>
                </button>
              </div>
            </div>

            <div className="form__ps">
              <span className="ps">P.S.</span>
              <span>If you need a table for tonight, call directly — I check email the next day, once the dishes are done. <em>— The Cason Family</em></span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
