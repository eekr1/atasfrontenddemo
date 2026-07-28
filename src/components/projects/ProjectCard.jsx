import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  if (!project) return null;

  const { slug, name, category, location, coverImage, status } = project;
  const isCompleted = status === 'Tamamlandı';

  return (
    <article className="card-project">
      <div className="card-project-image-wrap">
        <img src={coverImage} alt={name} loading="lazy" />
        <span className={`badge-status ${isCompleted ? 'badge-status--success' : 'badge-status--info'}`}>
          {status}
        </span>
      </div>
      <div className="card-project-body">
        <div className="card-project-location">
          <MapPin size={14} />
          <span>{location}</span>
        </div>
        <h3 className="card-project-title">{name}</h3>
        <span className="card-project-category">{category}</span>
        <div className="card-project-footer">
          <Link to={`/projeler/${slug}`} className="btn-card-link">
            <span>Projeyi İncele</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
