import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { images } from '../../assets'

const langMap = { IT: 'it', DE: 'de', EN: 'en' }
const DARK_HERO_ROUTES = ['/']

export default function Navbar() {
  const location  = useLocation()
  const { t, i18n } = useTranslation()
  const [scrolled,   setScrolled]   = useState(false)
  const [moreOpen,   setMoreOpen]   = useState(false)
  const [langOpen,   setLangOpen]   = useState(false)
  const [activeLang, setActiveLang] = useState('IT')
  const moreRef = useRef(null)
  const langRef = useRef(null)

  const hasDarkHero = DARK_HERO_ROUTES.includes(location.pathname)
  const isDark = hasDarkHero && !scrolled

  const mainLinks = [
    { key: 'nav.home',           href: '/' },
    { key: 'nav.attivita',       href: '/attivita' },
    { key: 'nav.reservations',   href: '/reservations' },
    { key: 'nav.prenota_camera', href: '/book-room' },
    { key: 'nav.nuova_pagina',   href: '#' },
  ]

  const moreLinks = [
    { key: 'nav.contatti',  href: '/#contatti' },
    { key: 'nav.nuova_pagina', href: '#' },
    { key: 'nav.piani',     href: '#' },
    { key: 'nav.esperienze', href: '/attivita' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false)
      if (langRef.current  && !langRef.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleLang = (lang) => {
    setActiveLang(lang)
    i18n.changeLanguage(langMap[lang])
    setLangOpen(false)
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}${isDark ? ' nav--dark-hero' : ' nav--light'}`} id="nav">

      {/* LOGO */}
      <Link to="/" className="nav__logo">
        <picture>
          <source srcSet={images.logoAvif} type="image/avif" />
          <img src={images.logoPng} alt="Cason di Lanza" style={{ width: 38, height: 38, objectFit: 'contain' }} />
        </picture>
        <div className="wordmark">
          Cason di Lanza
          <small>Carnia · 1552 m</small>
        </div>
      </Link>

      {/* MAIN LINKS */}
      <div className="nav__links">
        {mainLinks.map(({ key, href }) => (
          <Link key={key} to={href} className={location.pathname === href ? 'active' : ''}>
            {t(key)}
          </Link>
        ))}

        {/* MORE DROPDOWN */}
        <div className="nav__dropdown" ref={moreRef}>
          <button className="nav__more-btn" onClick={() => setMoreOpen(o => !o)} aria-expanded={moreOpen}>
            {t('nav.more')} <span className={`nav__chevron${moreOpen ? ' open' : ''}`}>▾</span>
          </button>
          {moreOpen && (
            <div className="nav__dropdown-menu">
              {moreLinks.map(({ key, href }) => (
                <Link key={key} to={href} onClick={() => setMoreOpen(false)}>
                  {t(key)}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="nav__right">
        {/* LANGUAGE SELECTOR */}
        <div className="nav__dropdown" ref={langRef}>
          <button className="nav__lang-btn" onClick={() => setLangOpen(o => !o)} aria-label="Select language">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {activeLang}
            <span className={`nav__chevron${langOpen ? ' open' : ''}`}>▾</span>
          </button>
          {langOpen && (
            <div className="nav__dropdown-menu nav__dropdown-menu--right">
              {Object.keys(langMap).map(lang => (
                <button
                  key={lang}
                  className={`nav__lang-opt${lang === activeLang ? ' active' : ''}`}
                  onClick={() => handleLang(lang)}
                >
                  {lang === 'IT' ? '🇮🇹 Italiano' : lang === 'DE' ? '🇩🇪 Deutsch' : '🇬🇧 English'}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <Link to="/reservations" className="nav__cta">
          {t('nav.prenota_ora')} <span className="nav__cta-arrow">→</span>
        </Link>
      </div>

      {/* BURGER */}
      <button className="nav__burger" aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
