import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import SectionTitle from '../../components/common/SectionTitle';
import ModelCard from '../../components/models/ModelCard';
import CTABanner from '../../components/common/CTABanner';

import { models } from '../../data/models';
import './prefabric.css';

export default function PrefabricModelsPage() {
  // Tek Katlı Prefabrik Evler
  const singleStoryPrefab = models.filter(
    (m) => m.category === 'Prefabrik Ev' && m.floorType === 'Tek Katlı'
  );

  // Çift Katlı Prefabrik Evler (Dubleks)
  const doubleStoryPrefab = models.filter(
    (m) => m.category === 'Prefabrik Ev' && m.floorType === 'Çift Katlı'
  );

  return (
    <div className="prefabric-page">
      {/* Breadcrumb Navigasyonu */}
      <Breadcrumb items={[{ label: 'Prefabrik Evler' }]} />

      {/* Sayfa Banner'ı */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">Prefabrik Ev Çözümlerimiz</h1>
          <p className="page-banner-desc">
            Hızlı kurulum süresi, ekonomik fiyat avantajı ve yüksek yalıtım teknolojisiyle
            üretilen tek katlı ve çift katlı hazır prefabrik konut modellerimizi keşfedin.
          </p>
        </div>
      </section>

      {/* Bölüm 1: Tek Katlı Prefabrik Evler */}
      <section className="prefabric-section">
        <div className="container">
          <SectionTitle
            subtitle="Pratik ve Ekonomik"
            title="Tek Katlı Prefabrik Evler"
          />

          {singleStoryPrefab && singleStoryPrefab.length > 0 ? (
            <div className="card-grid">
              {singleStoryPrefab.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          ) : (
            <div className="prefabric-empty-state">
              <p>Tek katlı prefabrik ev modeli bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bölüm 2: Çift Katlı Prefabrik Evler */}
      <section className="prefabric-section prefabric-section-alt">
        <div className="container">
          <SectionTitle
            subtitle="Ferah Yaşam Alanları"
            title="Çift Katlı (Dubleks) Prefabrik Evler"
          />

          {doubleStoryPrefab && doubleStoryPrefab.length > 0 ? (
            <div className="card-grid">
              {doubleStoryPrefab.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          ) : (
            <div className="prefabric-empty-state">
              <p>Çift katlı prefabrik ev modeli bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </section>

      {/* Teklif Banner'ı */}
      <CTABanner
        title="Arsanıza Uygun Prefabrik Ev Teklifi Alın"
        subtitle="Hızlı montaj imkanı ve uygun fiyat seçenekleriyle hayalinizdeki hazır konuta hemen kavuşun."
      />
    </div>
  );
}
