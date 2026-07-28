import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ title, description, image, to, badgeText }) {
  return (
    <Link to={to} className="category-card">
      <div className="category-card-image-wrap">
        <img src={image} alt={title} loading="lazy" />
        {badgeText && <span className="category-card-badge">{badgeText}</span>}
      </div>
      <div className="category-card-content">
        <h3 className="category-card-title">{title}</h3>
        {description && <p className="category-card-desc">{description}</p>}
        <span className="category-card-link-text">
          <span>Modelleri İncele</span>
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
