import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  // Scroll dinleyicisi — 20px geçilince .header--scrolled ekler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rota değişince mobil menüyü otomatik kapat
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // ESC tuşu ve dışarı tıklama dinleyicisi
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      // Mobil menü açıkken body scroll engeli
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/kurumsal', label: 'Kurumsal' },
    { path: '/celik-evler', label: 'Çelik Evler' },
    { path: '/prefabrik-evler', label: 'Prefabrik Evler' },
    { path: '/projeler', label: 'Projeler' },
    { path: '/iletisim', label: 'İletişim' },
  ];

  return (
    <header
      ref={headerRef}
      className={`site-header ${isScrolled ? 'header--scrolled' : ''}`}
    >
      <div className="container">
        <div className="header-inner">
          {/* Marka Logo */}
          <Link to="/" className="site-logo" aria-label="Ataş Çelik Yapı Ana Sayfa">
            <div className="logo-badge">A</div>
            <div className="logo-text-group">
              <span className="logo-title">ATAŞ ÇELİK YAPI</span>
              <span className="logo-subtitle">MİMARİ & KONUT</span>
            </div>
          </Link>

          {/* Masaüstü Navigasyon */}
          <nav className="desktop-nav" aria-label="Masaüstü Navigasyon">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Header Aksiyonları (Telefon & CTA) */}
          <div className="header-actions">
            <a href="tel:+902820000000" className="phone-link" aria-label="Bizi Arayın: 0282 000 00 00">
              <Phone size={18} />
              <span>0282 000 00 00</span>
            </a>
            <Link to="/iletisim" className="btn-cta">
              <span>Teklif Al</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobil Hamburger Butonu */}
          <button
            type="button"
            className="hamburger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobil Menü Drawer ve Backdrop */}
      {isMenuOpen && (
        <>
          <div
            className="mobile-nav-backdrop"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <nav className="mobile-nav-drawer" aria-label="Mobil Navigasyon">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`
                }
              >
                <span>{item.label}</span>
                <ArrowRight size={16} />
              </NavLink>
            ))}

            <div className="mobile-actions">
              <a href="tel:+902820000000" className="mobile-phone-link">
                <Phone size={18} />
                <span>0282 000 00 00</span>
              </a>
              <Link to="/iletisim" className="mobile-cta-btn">
                <span>Teklif Al</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
