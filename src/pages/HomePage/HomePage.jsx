import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Sparkles, Award, ArrowRight } from 'lucide-react';
import HeroSlider from '../../components/slider/HeroSlider';
import SectionTitle from '../../components/common/SectionTitle';
import CategoryCard from '../../components/common/CategoryCard';
import ModelCard from '../../components/models/ModelCard';
import ProjectCard from '../../components/projects/ProjectCard';
import CTABanner from '../../components/common/CTABanner';

import { slides } from '../../data/slides';
import { models } from '../../data/models';
import { projects } from '../../data/projects';
import './home.css';

export default function HomePage() {
  // Öne çıkan modeller (max 6 adet)
  const featuredModels = models.filter((m) => m.featured).slice(0, 6);

  const categories = [
    {
      id: 'cat-celik',
      title: 'Çelik Ev Modelleri',
      description: 'Yüksek deprem emniyetli, uzun ömürlü ve mimari özgürlük sunan hafif çelik evler.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      to: '/celik-evler',
      badgeText: 'Çelik Yapı'
    },
    {
      id: 'cat-prefabrik',
      title: 'Prefabrik Konutlar',
      description: 'Hızlı montaj avantajı, ekonomik maliyeti ve yüksek yalıtımı ile öne çıkan hazır evler.',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
      to: '/prefabrik-evler',
      badgeText: 'Prefabrik'
    },
    {
      id: 'cat-proje',
      title: 'Saha Projelerimiz',
      description: 'Türkiye genelinde başarıyla teslim ettiğimiz ve devam eden çelik ev uygulamaları.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      to: '/projeler',
      badgeText: 'Saha Uygulamaları'
    }
  ];

  const whyUsFeatures = [
    {
      id: 'feat-1',
      icon: <ShieldCheck size={28} />,
      title: 'Yüksek Deprem Güvenliği',
      description: 'Hafif ve ağır çelik karkas yapılarla deprem riskine karşı üst düzey koruma ve esneklik.'
    },
    {
      id: 'feat-2',
      icon: <Clock size={28} />,
      title: 'Hızlı & Zamanında Teslim',
      description: 'Fabrika ortamında milimetrik üretim ve sahada kısa süreli hızlı montaj süreci.'
    },
    {
      id: 'feat-3',
      icon: <Sparkles size={28} />,
      title: 'Üstün Isı & Ses Yalıtımı',
      description: 'A sınıfı izolasyon malzemeleri ile yazın serin, kışın sıcak ve tasarruflu yaşam.'
    },
    {
      id: 'feat-4',
      icon: <Award size={28} />,
      title: 'Mühendislik & Garanti',
      description: 'Statik hesaplamaları yapılmış onaylı projeler ve satış sonrası kurumsal garanti desteği.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <HeroSlider slides={slides} />

      {/* Yapı Kategorileri */}
      <section className="home-section">
        <div className="container">
          <SectionTitle
            subtitle="Üretim Yelpazemiz"
            title="Hangi Yapıyı Hayal Ediyorsunuz?"
          />
          <div className="card-grid">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Öne Çıkan Ev Modelleri */}
      <section className="home-section home-section-gray">
        <div className="container">
          <SectionTitle
            subtitle="Popüler Tasarımlar"
            title="Öne Çıkan Konut Modellerimiz"
          />
          {featuredModels && featuredModels.length > 0 ? (
            <div className="card-grid">
              {featuredModels.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          ) : (
            <p>Öne çıkan model bulunmamaktadır.</p>
          )}

          <div className="section-footer-action">
            <Link to="/celik-evler" className="btn-view-all">
              <span>Tüm Modelleri İnceleyin</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Neden Ataş Çelik Yapı? */}
      <section className="home-section">
        <div className="container">
          <SectionTitle
            subtitle="Kurumsal Kalite"
            title="Neden Ataş Çelik Yapı?"
            centered
          />
          <div className="why-us-grid">
            {whyUsFeatures.map((feat) => (
              <div key={feat.id} className="why-us-card">
                <div className="why-us-icon-wrap">{feat.icon}</div>
                <h3 className="why-us-title">{feat.title}</h3>
                <p className="why-us-desc">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Son Sah Projelerimiz */}
      <section className="home-section home-section-gray">
        <div className="container">
          <SectionTitle
            subtitle="Gerçekleştirilen İşler"
            title="Tamamlanan ve Devam Eden Projeler"
          />
          {projects && projects.length > 0 ? (
            <div className="card-grid">
              {projects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          ) : (
            <p>Proje kaydı bulunmamaktadır.</p>
          )}

          <div className="section-footer-action">
            <Link to="/projeler" className="btn-view-all">
              <span>Tüm Projeleri İnceleyin</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
