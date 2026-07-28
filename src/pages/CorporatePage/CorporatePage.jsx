import React from 'react';
import { Target, Compass, ShieldCheck, Cpu, Award, Building, MapPin } from 'lucide-react';
import Breadcrumb from '../../components/common/Breadcrumb';
import SectionTitle from '../../components/common/SectionTitle';
import CTABanner from '../../components/common/CTABanner';

import './corporate.css';

export default function CorporatePage() {
  const standards = [
    {
      id: 'std-1',
      icon: <ShieldCheck size={32} />,
      title: 'Statik Hesap Garantisi',
      description: 'Tüm yapılarımız deprem yönetmeliğine uygun mühendislik statik hesaplamalarıyla üretilir.'
    },
    {
      id: 'std-2',
      icon: <Cpu size={32} />,
      title: 'CNC Robot Üretim',
      description: 'Fabrika ortamında milimetrik hassasiyetle kesilen hafif çelik profiller sahada sorunsuz birleşir.'
    },
    {
      id: 'std-3',
      icon: <Award size={32} />,
      title: 'TSE & ISO Belgeli Malzeme',
      description: 'Kullanılan tüm çelik, yalıtım ve kaplama malzemeleri uluslararası sertifikalıdır.'
    },
    {
      id: 'std-4',
      icon: <Building size={32} />,
      title: 'Anahtar Teslim Hizmet',
      description: 'Projeden ruhsata, karkas kurulumundan ince işçiliğe kadar tek muhatap güvencesi.'
    }
  ];

  const serviceCities = [
    'Tekirdağ',
    'İstanbul',
    'Kırklareli',
    'Edirne',
    'Çanakkale',
    'Balıkesir',
    'Bursa',
    'Kocaeli',
    'Tüm Türkiye'
  ];

  return (
    <div className="corporate-page">
      {/* Breadcrumb Navigasyonu */}
      <Breadcrumb items={[{ label: 'Kurumsal' }]} />

      {/* Sayfa Banner'ı */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">Kurumsal Profilimiz</h1>
          <p className="page-banner-desc">
            Ataş Çelik Yapı; depreme dayanıklı, ekolojik ve modern yaşam alanları inşa eden
            yenilikçi çelik konstrüksiyon üretim ve uygulama merkezidir.
          </p>
        </div>
      </section>

      {/* Hakkımızda / Biz Kimiz? */}
      <section className="corporate-section">
        <div className="container">
          <div className="corporate-about-grid">
            <div className="corporate-about-text">
              <span className="section-subtitle">Ataş Çelik Yapı Hakkında</span>
              <h3>Geleceğin Güvenli Mimarisini Çelikle İnşa Ediyoruz</h3>
              <p>
                Tekirdağ merkezli üretim tesislerimizde, gelişmiş soğuk şekillendirilmiş hafif çelik
                teknolojisi ile müstakil ev, villa, prefabrik konut ve ticari yapılar üretiyoruz.
              </p>
              <p>
                Yılların getirdiği mühendislik birikimi ve tecrübeli usta kadromuzla, hayalinizdeki
                yaşam alanını fabrika ortamında milimetrik hassasiyetle üretiyor ve arsanız üzerinde
                kısa sürede anahtar teslim kuruyoruz.
              </p>
            </div>
            <div className="corporate-about-image">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Ataş Çelik Yapı Üretim Fabrikası"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="corporate-section corporate-section-gray">
        <div className="container">
          <SectionTitle
            subtitle="Kurumsal Değerlerimiz"
            title="Vizyonumuz ve Misyonumuz"
            centered
          />
          <div className="vision-mission-grid">
            <div className="vm-card">
              <div className="vm-icon-wrap">
                <Target size={28} />
              </div>
              <h3 className="vm-title">Vizyonumuz</h3>
              <p className="vm-desc">
                Türkiye genelinde depreme dayanıklı hafif çelik mimarinin öncü markası olmak,
                geleneksel betonarme yapılara kıyasla daha güvenli, estetik ve çevre dostu
                konut standartlarını her bütçeye ulaştırmak.
              </p>
            </div>

            <div className="vm-card">
              <div className="vm-icon-wrap">
                <Compass size={28} />
              </div>
              <h3 className="vm-title">Misyonumuz</h3>
              <p className="vm-desc">
                Müşterilerimizin ihtiyaçlarına özel estetik ve dayanıklı çelik yapılar tasarlamak;
                üretimden montaja kadar şeffaf mühendislik süreçleri ve tam zamanında teslimat
                ilkesiyle koşulsuz müşteri memnuniyeti sağlamak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Üretim Standartları */}
      <section className="corporate-section">
        <div className="container">
          <SectionTitle
            subtitle="Mühendislik Disiplini"
            title="Üretim ve Kalite Standartlarımız"
          />
          <div className="standards-grid">
            {standards.map((std) => (
              <div key={std.id} className="standard-card">
                <div className="standard-icon-wrap">{std.icon}</div>
                <h4 className="standard-title">{std.title}</h4>
                <p className="standard-desc">{std.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmet Bölgeleri */}
      <section className="corporate-section corporate-section-gray">
        <div className="container">
          <div className="regions-box">
            <MapPin size={36} />
            <h3 className="regions-title">Hizmet Verdiğimiz Bölgeler</h3>
            <p className="regions-desc">
              Fabrikamız Tekirdağ'da bulunmakla birlikte, başta tüm Trakya ve Marmara Bölgesi
              olmak üzere Türkiye'nin her iline sevkiyat ve saha montaj hizmeti sunmaktayız.
            </p>
            <div className="regions-tags">
              {serviceCities.map((city, idx) => (
                <span key={idx} className="region-tag">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Projenizi Kurumsal Güvence İle İnşa Edelim"
        subtitle="Ataş Çelik Yapı'nın mühendislik tecrübesiyle hayalinizdeki evi hemen planlayın."
      />
    </div>
  );
}
