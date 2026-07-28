import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Maximize2, Layers } from 'lucide-react';

export default function ModelCard({ model }) {
  if (!model) return null;

  const { slug, name, category, floorType, sqm, coverImage, shortDescription, featured } = model;

  return (
    <article className="card-model">
      <div className="card-model-image-wrap">
        <img src={coverImage} alt={name} loading="lazy" />
        <div className="card-model-badges">
          <span className="badge badge-category">{category}</span>
          {featured && <span className="badge badge-accent">Öne Çıkan</span>}
        </div>
      </div>
      <div className="card-model-body">
        <h3 className="card-model-title">{name}</h3>
        <div className="card-model-meta">
          <span className="meta-item">
            <Maximize2 size={15} />
            <span>{sqm} m²</span>
          </span>
          <span className="meta-divider">•</span>
          <span className="meta-item">
            <Layers size={15} />
            <span>{floorType}</span>
          </span>
        </div>
        <p className="card-model-desc">{shortDescription}</p>
        <div className="card-model-footer">
          <Link to={`/modeller/${slug}`} className="btn-card-link">
            <span>Detayları İncele</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
