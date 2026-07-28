import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import SectionTitle from '../../components/common/SectionTitle';
import ModelCard from '../../components/models/ModelCard';
import CTABanner from '../../components/common/CTABanner';

import { models } from '../../data/models';
import './models.css';

export default function SteelModelsPage() {
  // Çelik Ev kategorisine ait modeller
  const steelModels = models.filter((m) => m.category === 'Çelik Ev');

  return (
    <div className="models-page">
      {/* Breadcrumb Navigasyonu */}
      <Breadcrumb items={[{ label: 'Çelik Ev Modelleri' }]} />

      {/* Sayfa Banner'ı */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">Çelik Ev Modellerimiz</h1>
          <p className="page-banner-desc">
            Yüksek deprem dayanımı, A sınıfı ısı yalıtımı ve modern mimari tasarımlarla
            ürettiğimiz hafif çelik müstakil ve dubleks konut projelerimizi inceleyin.
          </p>
        </div>
      </section>

      {/* Model Listeleme Grid */}
      <section className="models-listing-section">
        <div className="container">
          <SectionTitle
            subtitle="Hafif Çelik Yapı Kataloğu"
            title="Tüm Çelik Konut Tasarımları"
          />

          {steelModels && steelModels.length > 0 ? (
            <div className="card-grid">
              {steelModels.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          ) : (
            <div className="models-empty-state">
              <p>Henüz tanımlanmış çelik ev modeli bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </section>

      {/* Teklif Banner'ı */}
      <CTABanner
        title="Hayalinizdeki Çelik Evi Birlikte Tasarlayalım"
        subtitle="Mevcut arsanıza uygun hafif çelik konut projelerimiz için hemen uzmanlarımızla iletişime geçin."
      />
    </div>
  );
}
