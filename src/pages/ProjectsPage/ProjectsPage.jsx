import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import SectionTitle from '../../components/common/SectionTitle';
import ProjectCard from '../../components/projects/ProjectCard';
import CTABanner from '../../components/common/CTABanner';

import { projects } from '../../data/projects';
import './projects.css';

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      {/* Breadcrumb Navigasyonu */}
      <Breadcrumb items={[{ label: 'Saha Projelerimiz' }]} />

      {/* Sayfa Banner'ı */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">Saha Projelerimiz</h1>
          <p className="page-banner-desc">
            Türkiye genelinde anahtar teslim başarıyla tamamlanan hafif çelik villa,
            müstakil konut ve şantiye alanı saha uygulamalarımızı inceleyin.
          </p>
        </div>
      </section>

      {/* Projeler Grid */}
      <section className="projects-listing-section">
        <div className="container">
          <SectionTitle
            subtitle="Referans Çalışmalarımız"
            title="Tamamlanan ve Devam Eden Tüm Projeler"
          />

          {projects && projects.length > 0 ? (
            <div className="card-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="projects-empty-state">
              <p>Henüz kayıtlı saha projesi bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </section>

      {/* Teklif Banner'ı */}
      <CTABanner
        title="Sizin Arsanıza da Benzer Bir Proje Uygulayalım"
        subtitle="Mimar ve mühendis ekibimizle hayalinizdeki çelik yapıyı hemen projelendirelim."
      />
    </div>
  );
}
