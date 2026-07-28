import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Maximize2, Layers, MessageSquare, PhoneCall, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/common/Breadcrumb';
import SectionTitle from '../../components/common/SectionTitle';
import Gallery from '../../components/gallery/Gallery';
import ModelCard from '../../components/models/ModelCard';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import { models } from '../../data/models';
import './model-detail.css';

export default function ModelDetailPage() {
  const { slug } = useParams();

  // Slug ile eşleşen modeli bul
  const model = models.find((m) => m.slug === slug);

  // Model bulunamazsa 404 göster
  if (!model) {
    return <NotFoundPage message="Aradığınız ev modeli bulunamadı veya kaldırılmış olabilir." />;
  }

  const {
    name,
    category,
    floorType,
    sqm,
    coverImage,
    gallery = [],
    planImage,
    shortDescription,
    specs = []
  } = model;

  // Kategoriye göre breadcrumb bağlantısı
  const categoryTo = category === 'Çelik Ev' ? '/celik-evler' : '/prefabrik-evler';

  // Benzer Modeller (aynı kategoriden mevcut model hariç 3 model)
  const similarModels = models
    .filter((m) => m.category === category && m.id !== model.id)
    .slice(0, 3);

  // Fallback: aynı kategoriden yeterli model yoksa tüm modellerden tamamla
  const finalSimilarModels =
    similarModels.length >= 3
      ? similarModels
      : models.filter((m) => m.id !== model.id).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Merhaba, ${name} (${sqm} m², ${floorType}) modeliniz hakkında detaylı bilgi ve teklif almak istiyorum.`
  );

  return (
    <div className="model-detail-page">
      {/* Breadcrumb Navigasyonu */}
      <Breadcrumb
        items={[
          { label: category, to: categoryTo },
          { label: name }
        ]}
      />

      {/* Kapak Görsel Banner'ı */}
      <section className="model-detail-cover">
        <img src={coverImage} alt={name} className="model-detail-cover-img" />
        <div className="model-detail-cover-overlay" />
        <div className="container model-detail-cover-content">
          <div className="model-detail-badges">
            <span className="badge badge-category">{category}</span>
            <span className="badge badge-accent">{floorType}</span>
          </div>
          <h1 className="model-detail-title">{name}</h1>
        </div>
      </section>

      {/* İki Sütunlu Detay İçeriği */}
      <section className="model-detail-main">
        <div className="container">
          <div className="detail-layout">
            {/* Sol Sütun: Galeri ve Kat Planı */}
            <div className="detail-content-col">
              {/* Görsel Galerisi */}
              <Gallery images={gallery} title="Model Görsel Galerisi" />

              {/* Kat Planı */}
              {planImage && (
                <div className="floor-plan-section">
                  <h3 className="floor-plan-title">Mimari Kat Planı</h3>
                  <div className="floor-plan-img-wrap">
                    <img src={planImage} alt={`${name} Kat Planı`} loading="lazy" />
                  </div>
                </div>
              )}
            </div>

            {/* Sağ Sidebar: Bilgi Paneli & CTA */}
            <aside className="detail-sidebar">
              <div className="detail-info-card">
                <div className="detail-meta-group">
                  <div className="detail-meta-box">
                    <Maximize2 size={20} />
                    <span>{sqm} m² Net</span>
                  </div>
                  <div className="detail-meta-box">
                    <Layers size={20} />
                    <span>{floorType}</span>
                  </div>
                </div>

                <p className="detail-desc">{shortDescription}</p>

                {/* Teknik Özellikler Tablosu */}
                {specs && specs.length > 0 && (
                  <>
                    <h4 className="specs-title">Teknik Detaylar</h4>
                    <div className="specs-list">
                      {specs.map((spec, index) => (
                        <div key={index} className="specs-item">
                          <span className="specs-label">{spec.label}</span>
                          <span className="specs-value">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* CTA Butonları */}
                <div className="detail-actions">
                  <Link to="/iletisim" className="btn-detail-primary">
                    <PhoneCall size={18} />
                    <span>Özel Teklif İste</span>
                  </Link>

                  <a
                    href={`https://wa.me/902820000000?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-detail-whatsapp"
                  >
                    <MessageSquare size={18} />
                    <span>WhatsApp İle Sorun</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Benzer Modeller */}
      {finalSimilarModels && finalSimilarModels.length > 0 && (
        <section className="similar-models-section">
          <div className="container">
            <SectionTitle
              subtitle="Alternatif Tasarımlar"
              title="İlginizi Çekebilecek Benzer Modeller"
            />
            <div className="card-grid">
              {finalSimilarModels.map((simModel) => (
                <ModelCard key={simModel.id} model={simModel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
