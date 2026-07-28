import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({
  images = [],
  isOpen = false,
  activeIndex = 0,
  onClose,
  onNext,
  onPrevious
}) {
  // ESC ve Klavye Ok tuşları dinleyicisi
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      } else if (e.key === 'ArrowRight') {
        onNext?.();
      } else if (e.key === 'ArrowLeft') {
        onPrevious?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Modal açıkken arkadaki body scroll'unu dondur
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[activeIndex] || images[0];

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Görsel Galerisi">
      {/* Modal Arka Plan Karartma (Backdrop) */}
      <div className="lightbox-backdrop" onClick={onClose} aria-hidden="true" />

      <div className="lightbox-container">
        {/* Üst Çubuk (Sayaç & Kapat Butonu) */}
        <div className="lightbox-header">
          <span className="lightbox-counter">
            {activeIndex + 1} / {images.length}
          </span>
          <button
            type="button"
            className="lightbox-btn-close"
            onClick={onClose}
            aria-label="Galeriyi Kapat (ESC)"
          >
            <X size={28} />
          </button>
        </div>

        {/* Ana Görsel */}
        <div className="lightbox-main-content">
          <img
            src={currentImage}
            alt={`Galeri Görseli ${activeIndex + 1}`}
            className="lightbox-image"
          />
        </div>

        {/* Sol Ok Butonu */}
        {images.length > 1 && (
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow--prev"
            onClick={onPrevious}
            aria-label="Önceki Görsel (Sol Ok)"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        {/* Sağ Ok Butonu */}
        {images.length > 1 && (
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow--next"
            onClick={onNext}
            aria-label="Sonraki Görsel (Sağ Ok)"
          >
            <ChevronRight size={32} />
          </button>
        )}
      </div>
    </div>
  );
}
