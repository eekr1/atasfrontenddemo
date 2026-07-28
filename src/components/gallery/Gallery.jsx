import React, { useState, useCallback } from 'react';
import Lightbox from './Lightbox';

export default function Gallery({ images = [], title = 'Görsel Galerisi' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpen = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="gallery-component">
      <h3 className="gallery-title">{title}</h3>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            className="gallery-thumbnail-btn"
            onClick={() => handleOpen(index)}
            aria-label={`Görsel ${index + 1}'i Büyüt`}
          >
            <img
              src={img}
              alt={`Galeri Thumbnail ${index + 1}`}
              loading="lazy"
            />
            <div className="gallery-thumbnail-overlay">
              <span>Büyüt</span>
            </div>
          </button>
        ))}
      </div>

      {/* Kontrollü Presentation Lightbox Bileşeni */}
      <Lightbox
        images={images}
        isOpen={isOpen}
        activeIndex={activeIndex}
        onClose={handleClose}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}
