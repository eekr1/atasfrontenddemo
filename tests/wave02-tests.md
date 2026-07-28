# Wave 02 — Manuel QA Test Dokümanı (Ana Sayfa & Reusable Kartlar)

> **Test Tarihi:** 2026-07-28  
> **Test Edilen Wave:** Wave 02 — Ana Sayfa & Reusable Kartlar (`frontend/`)  
> **Test Eden:** AI Agent (Antigravity) & Kullanıcı

---

## 1. Otomatik ve Build Testleri

| Test No | Test Adı | Açıklama | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **AUTO-01** | `npm.cmd run build` | Vite derleme kontrolü (`frontend/` dizininde) | 0 hata ve 0 uyarı ile tamamlanır | 🟢 BAŞARILI |
| **AUTO-02** | `npm.cmd run dev` | Dev server ve HMR kontrolü | Konsol hatası olmadan ana sayfa açılır | 🟢 BAŞARILI |

---

## 2. Mock Data Doğrulama Testleri

| Test No | Veri Dosyası | Kontrol Kriteri | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **DATA-01** | `data/slides.js` | Slayt Sayısı | Tam 3 adet hero slider kaydı | 🟢 BAŞARILI |
| **DATA-02** | `data/models.js` | Toplam & Featured Model | Toplam 7 model tanımlı, 6 tanesi `featured: true` | 🟢 BAŞARILI |
| **DATA-03** | `data/projects.js` | Proje Sayısı & Durumu | Toplam 4 proje (2 Tamamlandı, 2 Devam Ediyor) | 🟢 BAŞARILI |

---

## 3. Ana Sayfa ve Bileşen Testleri

| Test No | Bileşen | Senaryo / Adım | Beklenen Davranış | Durum |
|---|---|---|---|---|
| **HOME-01** | `HeroSlider` | Slayt geçişleri | 3 slayt görünüyor, oklar ve noktalar çalışıyor | 🟢 BAŞARILI |
| **HOME-02** | `HeroSlider` | Reduced Motion testi | `prefers-reduced-motion: reduce` ayarında otomatik interval durur | 🟢 BAŞARILI |
| **HOME-03** | `CategoryCard` | Yapı kategorileri bölümü | 3 adet kategori kartı render edilir | 🟢 BAŞARILI |
| **HOME-04** | `ModelCard` | Öne çıkan modeller grid | 6 model 16:9 görseller, m², kat tipi ve badge'ler ile görünür | 🟢 BAŞARILI |
| **HOME-05** | `ProjectCard` | Son projeler grid | 4 proje 3:2 görseller ve durum badge'leri ile görünür | 🟢 BAŞARILI |
| **HOME-06** | "Neden Ataş Çelik" | İkonlu özellik kartları | 4 adet kurumsal özellik kartı dikey/yatay grid ile basılır | 🟢 BAŞARILI |
| **HOME-07** | `CTABanner` | Teklif banner'ı | Koyu mavi arka planlı banner 2 buton ile görüntülenir | 🟢 BAŞARILI |

---

## 4. Responsive ve Navigasyon Testleri

- [x] **Kart Hover & Animasyon:** Model ve proje kartlarına gelindiğinde `translateY(-4px)` ve gölge artışı gerçekleşiyor.
- [x] **Link Yönlendirmeleri:** Kartlardaki "Detayları İncele" butonları `/modeller/:slug` ve `/projeler/:slug` rotalarına doğru yönlendiriyor.
- [x] **Yatay Overflow (375px):** 375px mobil genişlikte tüm gridler dikey tek sütuna düşüyor, yatay kaydırma çubuğu oluşmuyor.
- [x] **WCAG AA Kontrast:** Hero görseli üzerindeki koyu gradyan katmanı metin okunabilirliğini sağlııyor.
