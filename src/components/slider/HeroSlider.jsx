import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function HeroSlider({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Reduced motion kontrolü & Otomatik geçiş
  useEffect(() => {
    if (!slides.length) return;

    // WCAG accessibility: reduced motion tercihi aktifse otomatik slider durdurulur
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, nextSlide]);

  if (!slides || slides.length === 0) return null;

  return (
    <section className="hero-slider" aria-label="Hero Görsel Slider">
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id || index}
            className={`hero-slide ${isActive ? 'hero-slide--active' : ''}`}
            aria-hidden={!isActive}
          >
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="hero-slide-overlay" />
            <div className="container hero-slide-container">
              <div className="hero-slide-content">
                <span className="hero-badge">ATAŞ ÇELİK YAPI</span>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-actions">
                  <Link to={slide.buttonHref || '/celik-evler'} className="btn-hero-primary">
                    <span>{slide.buttonText || 'Modelleri İncele'}</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link to="/iletisim" className="btn-hero-ghost">
                    <span>İletişime Geçin</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Ok Navigasyonu */}
      <button
        type="button"
        className="hero-arrow hero-arrow--prev"
        onClick={prevSlide}
        aria-label="Önceki Slayt"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        className="hero-arrow hero-arrow--next"
        onClick={nextSlide}
        aria-label="Sonraki Slayt"
      >
        <ChevronRight size={24} />
      </button>

      {/* Nokta (Dot) Navigasyonu */}
      <div className="hero-dots" aria-label="Slayt Seçimi">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-dot ${index === currentIndex ? 'hero-dot--active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
