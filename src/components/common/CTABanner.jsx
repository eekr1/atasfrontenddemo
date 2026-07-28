import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTABanner({
  title = "Hayalinizdeki Yapıyı Birlikte Planlayalım",
  subtitle = "Uzman mimar ve mühendis kadromuzla projelerinizi hızlı, güvenli ve ekonomik olarak hayata geçiriyoruz.",
  primaryBtnText = "Hemen Teklif Alın",
  primaryBtnHref = "/iletisim"
}) {
  return (
    <div className="cta-banner">
      <div className="container">
        <div className="cta-banner-inner">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">{title}</h2>
            <p className="cta-banner-subtitle">{subtitle}</p>
          </div>
          <div className="cta-banner-actions">
            <Link to={primaryBtnHref} className="btn-cta-primary">
              <span>{primaryBtnText}</span>
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+902820000000" className="btn-cta-secondary">
              <Phone size={18} />
              <span>0282 000 00 00</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
