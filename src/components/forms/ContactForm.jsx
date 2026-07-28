import React, { useState } from 'react';
import { Send, CheckCircle2, RefreshCw } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Çelik Ev Teklifi',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form girdi değişimi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Değişiklik yapıldığında ilgili hatayı temizle
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Form validasyonu
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Lütfen ad ve soyadınızı giriniz.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      newErrors.phone = 'Lütfen en az 10 haneli geçerli bir telefon numarası giriniz.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Lütfen geçerli bir e-posta adresi giriniz.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Lütfen en az 10 karakterlik mesajınızı yazınız.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form gönderimi (Mock Submit)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Mock gönderim: API çağrısı yapılmaz, sadece UI state'i güncellenir
      setIsSubmitted(true);
    }
  };

  // Formu sıfırlama
  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'Çelik Ev Teklifi',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  // Form Başarıyla Gönderildiğinde Gösterilecek Ekran
  if (isSubmitted) {
    return (
      <div className="contact-form-success" role="alert">
        <div className="success-icon-wrap">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="success-title">Talebiniz Başarıyla Alındı!</h3>
        <p className="success-desc">
          Mesajınız yetkili mimar ve mühendislerimize iletilmiştir. En kısa sürede
          belirttiğiniz iletişim kanallarından sizinle irtibata geçeceğiz.
        </p>
        <button type="button" className="btn-form-reset" onClick={handleReset}>
          <RefreshCw size={16} />
          <span>Yeni Mesaj Gönder</span>
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3 className="contact-form-title">Proje & Teklif Formu</h3>
      <p className="contact-form-subtitle">
        İhtiyacınıza uygun çelik ev veya prefabrik konut projeniz için bilgilerinizi bırakın.
      </p>

      {/* Ad Soyad */}
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Ad Soyad <span className="form-required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Örn: Ahmet Yılmaz"
          className={`form-input ${errors.name ? 'form-input--error' : ''}`}
          aria-invalid={!!errors.name}
        />
        {errors.name && <span className="form-error-text">{errors.name}</span>}
      </div>

      {/* Telefon ve E-posta (İki Sütun) */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Telefon <span className="form-required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="05XX XXX XX XX"
            className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <span className="form-error-text">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            E-posta Adresi <span className="form-required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ornek@eposta.com"
            className={`form-input ${errors.email ? 'form-input--error' : ''}`}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="form-error-text">{errors.email}</span>}
        </div>
      </div>

      {/* Konu Seçimi */}
      <div className="form-group">
        <label htmlFor="subject" className="form-label">
          İlgilendiğiniz Konu
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="form-select"
        >
          <option value="Çelik Ev Teklifi">Hafif Çelik Ev Teklifi</option>
          <option value="Prefabrik Konut">Prefabrik Konut Projesi</option>
          <option value="Özel Saha Projesi">Özel Çelik Konstrüksiyon Proje</option>
          <option value="Diğer / Genel Bilgi">Diğer / Genel Bilgi Talebi</option>
        </select>
      </div>

      {/* Mesaj */}
      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Mesajınız & Arsa Detayları <span className="form-required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Arsanızın bulunduğu il/ilçe, düşündüğünüz m² veya projeniz hakkında detaylar..."
          className={`form-textarea ${errors.message ? 'form-textarea--error' : ''}`}
          aria-invalid={!!errors.message}
        />
        {errors.message && <span className="form-error-text">{errors.message}</span>}
      </div>

      {/* Submit Butonu */}
      <button type="submit" className="btn-form-submit">
        <span>Teklif Talebini Gönder</span>
        <Send size={18} />
      </button>
    </form>
  );
}
