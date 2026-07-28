import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Sütun 1: Marka ve Açıklama */}
          <div className="footer-col">
            <div className="footer-brand">
              <Link to="/" className="footer-logo" aria-label="Ataş Çelik Yapı Ana Sayfa">
                <div className="footer-logo-badge">A</div>
                <span className="footer-logo-title">ATAŞ ÇELİK YAPI</span>
              </Link>
              <p className="footer-desc">
                Modern çelik evler, prefabrik konutlar ve ticari çelik yapılarda yüksek kalite,
                mimari yetkinlik ve ferah yaşam alanları sunan kurumsal yapı ortağınız.
              </p>
            </div>
            <div className="social-links" aria-label="Sosyal Medya Bağlantıları">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Sütun 2: Hızlı Bağlantılar */}
          <div className="footer-col">
            <h3 className="footer-heading">Hızlı Bağlantılar</h3>
            <ul className="footer-links">
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/kurumsal">Hakkımızda</Link></li>
              <li><Link to="/celik-evler">Çelik Evler</Link></li>
              <li><Link to="/prefabrik-evler">Prefabrik Evler</Link></li>
              <li><Link to="/projeler">Projelerimiz</Link></li>
              <li><Link to="/iletisim">İletişim</Link></li>
            </ul>
          </div>

          {/* Sütun 3: Modellerimiz */}
          <div className="footer-col">
            <h3 className="footer-heading">Yapı Kategorileri</h3>
            <ul className="footer-links">
              <li><Link to="/celik-evler">Çift Katlı Çelik Evler</Link></li>
              <li><Link to="/celik-evler">Tek Katlı Çelik Evler</Link></li>
              <li><Link to="/prefabrik-evler">Prefabrik Konutlar</Link></li>
              <li><Link to="/projeler">Tamamlanan Projeler</Link></li>
              <li><Link to="/iletisim">Özel Proje Teklifi</Link></li>
            </ul>
          </div>

          {/* Sütun 4: İletişim Detayları */}
          <div className="footer-col">
            <h3 className="footer-heading">İletişim</h3>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <MapPin size={18} />
                <span>Velimeşe OSB Mah. Çelik Sanayi Cad. No:14, Tekirdağ / Türkiye</span>
              </li>
              <li className="contact-item">
                <Phone size={18} />
                <a href="tel:+902820000000">0282 000 00 00</a>
              </li>
              <li className="contact-item">
                <Mail size={18} />
                <a href="mailto:info@atascelikyapi.com">info@atascelikyapi.com</a>
              </li>
              <li className="contact-item">
                <Clock size={18} />
                <span>Pzt - Cmt: 08:30 - 18:30</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Alt Telif Çizgisi */}
        <div className="footer-bottom">
          <p>© {currentYear} Ataş Çelik Yapı San. ve Tic. Ltd. Şti. Tüm hakları saklıdır.</p>
          <p>Ferah & Güvenli Yapı Teknolojileri</p>
        </div>
      </div>
    </footer>
  );
}
