import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, PhoneCall } from 'lucide-react';
import Breadcrumb from '../../components/common/Breadcrumb';
import ContactForm from '../../components/forms/ContactForm';

import './contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Breadcrumb Navigasyonu */}
      <Breadcrumb items={[{ label: 'İletişim' }]} />

      {/* Sayfa Banner'ı */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">İletişime Geçin</h1>
          <p className="page-banner-desc">
            Çelik ev ve prefabrik konut projeleriniz için bize ulaşabilir, fabrikamızı ziyaret edebilir
            veya teklif formunu doldurarak hemen fiyat sorgulayabilirsiniz.
          </p>
        </div>
      </section>

      {/* İletişim İçeriği (İki Sütun) */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout">
            {/* Sol Sütun: Adres & Harita */}
            <div className="contact-info-col">
              {/* İletişim Detay Kartı */}
              <div className="contact-info-card">
                <h2 className="contact-info-title">Fabrika & Satış Ofisi</h2>
                <div className="contact-info-list">
                  {/* Adres */}
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <MapPin size={22} />
                    </div>
                    <div className="contact-info-text-group">
                      <span className="contact-info-label">Adres</span>
                      <span className="contact-info-val">
                        Zafer Mahallesi, Sanayi Bulvarı No:42, Çorlu / Tekirdağ
                      </span>
                    </div>
                  </div>

                  {/* Telefon */}
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <Phone size={22} />
                    </div>
                    <div className="contact-info-text-group">
                      <span className="contact-info-label">Telefon</span>
                      <a href="tel:+902820000000" className="contact-info-val">
                        0282 000 00 00
                      </a>
                      <span className="contact-info-subtext">Hafta içi & Cumartesi</span>
                    </div>
                  </div>

                  {/* E-posta */}
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <Mail size={22} />
                    </div>
                    <div className="contact-info-text-group">
                      <span className="contact-info-label">E-posta</span>
                      <a href="mailto:info@atascelik.com.tr" className="contact-info-val">
                        info@atascelik.com.tr
                      </a>
                    </div>
                  </div>

                  {/* Çalışma Saatleri */}
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <Clock size={22} />
                    </div>
                    <div className="contact-info-text-group">
                      <span className="contact-info-label">Çalışma Saatleri</span>
                      <span className="contact-info-val">Pzt - Cmt: 08:30 - 18:30</span>
                      <span className="contact-info-subtext">Pazar: Randevu İle Açık</span>
                    </div>
                  </div>
                </div>

                {/* Hızlı Aksiyon Butonları */}
                <div className="contact-direct-actions">
                  <a href="tel:+902820000000" className="btn-contact-call">
                    <PhoneCall size={16} />
                    <span>Hemen Arayın</span>
                  </a>
                  <a
                    href="https://wa.me/902820000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact-wa"
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp Hattı</span>
                  </a>
                </div>
              </div>

              {/* Google Maps Harita Embed */}
              <div className="contact-map-card">
                <div className="contact-map-header">
                  <MapPin size={16} />
                  <span>Harita ve Konum Tarifi</span>
                </div>
                <iframe
                  title="Ataş Çelik Yapı Konum Haritası"
                  className="contact-map-iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48083.56475727763!2d27.78!3d41.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b5377f0a82b4a5%3A0x6b801a2f1b4c9e0!2zw4dvcmx1LCBUZWtpcmRhxJ8!5e0!3m2!1str!2str!4v1600000000000!5m2!1str!2str"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Sağ Sütun: Validasyonlu Mock İletişim Formu */}
            <div className="contact-form-col">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
