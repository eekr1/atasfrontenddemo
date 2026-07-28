import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, PhoneCall, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/common/Breadcrumb';
import Gallery from '../../components/gallery/Gallery';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import { projects } from '../../data/projects';
import './project-detail.css';

export default function ProjectDetailPage() {
  const { slug } = useParams();

  // Slug ile eşleşen projeyi bul
  const project = projects.find((p) => p.slug === slug);

  // Proje bulunamazsa 404 göster
  if (!project) {
    return <NotFoundPage message="Aradığınız proje bulunamadı veya kaldırılmış olabilir." />;
  }

  const {
    name,
    category,
    location,
    coverImage,
    gallery = [],
    shortDescription,
    status
  } = project;

  const isCompleted = status === 'Tamamlandı';

  return (
    <div className="project-detail-page">
      {/* Breadcrumb Navigasyonu */}
      <Breadcrumb
        items={[
          { label: 'Projeler', to: '/projeler' },
          { label: name }
        ]}
      />

      {/* Kapak Görsel Banner'ı */}
      <section className="project-detail-cover">
        <img src={coverImage} alt={name} className="project-detail-cover-img" />
        <div className="project-detail-cover-overlay" />
        <div className="container project-detail-cover-content">
          <div className="project-detail-badges">
            <span className={`badge-status ${isCompleted ? 'badge-status--success' : 'badge-status--info'}`}>
              {status}
            </span>
            <span className="badge badge-category">{category}</span>
          </div>
          <h1 className="project-detail-title">{name}</h1>
          <div className="project-location-tag">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
      </section>

      {/* Proje Detay İçeriği */}
      <section className="project-detail-main">
        <div className="container">
          {/* Proje Açıklama Kartı */}
          <div className="project-info-card">
            <div className="project-info-header">
              <span className="project-category-tag">Proje Türü: {category}</span>
              <span className="project-location-tag">
                <MapPin size={14} />
                <span>{location}</span>
              </span>
            </div>
            <p className="project-description-text">{shortDescription}</p>
          </div>

          {/* Saha Görselleri Galerisi (Yeniden Kullanılan Gallery & Controlled Lightbox) */}
          <Gallery images={gallery} title="Proje Saha Uygulama Görselleri" />

          {/* Proje CTA Bloğu */}
          <div className="project-cta-block">
            <div>
              <h3 className="project-cta-title">Arsanıza Benzer Bir Proje İster mısınız?</h3>
              <p className="project-cta-desc">
                Tekirdağ ve çevre illerde tamamlanan saha uygulamalarımızın kalitesiyle siz de tanışın.
              </p>
            </div>
            <div className="project-cta-buttons">
              <Link to="/iletisim" className="btn-project-cta">
                <PhoneCall size={18} />
                <span>Proje Teklifi Alın</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
