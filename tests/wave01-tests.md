# Wave 01 — Manuel QA Test Dokümanı (Design System, MainLayout, Header & Footer)

> **Test Tarihi:** 2026-07-28  
> **Test Edilen Wave:** Wave 01 — Design System, MainLayout, Header & Footer (`frontend/`)  
> **Test Eden:** AI Agent (Antigravity) & Kullanıcı

---

## 1. Otomatik Doğrulama ve Build Testleri

| Test No | Test Adı | Açıklama | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **AUTO-01** | `npm.cmd run build` | Vite derleme kontrolü (`frontend/` dizininde) | 0 hata ve 0 uyarı ile tamamlanır | 🟢 BAŞARILI |
| **AUTO-02** | `npm.cmd run dev` | Dev server ve HMR kontrolü | Konsol hatası olmadan başlar | 🟢 BAŞARILI |

---

## 2. Design System ve CSS Token Testleri

| Test No | Konu | Kontrol Noktası | Beklenen Değer / Davranış | Durum |
|---|---|---|---|---|
| **DS-01** | Renk Değişkenleri | `tokens.css` | `--color-primary: #1A3E6E`, `--color-accent: #E8A020` vb. `DESIGN_RULES.md` ile birebir | 🟢 BAŞARILI |
| **DS-02** | Google Fonts | `base.css` | `Plus Jakarta Sans` ve `Inter` fontları Google Fonts üzerinden yüklendi | 🟢 BAŞARILI |
| **DS-03** | Spacing Sistemi | `tokens.css` | 4px tabanlı spacing ölçeği (`--space-1` … `--space-24`) | 🟢 BAŞARILI |
| **DS-04** | Container | `layout.css` | Max 1200px genişlik, responsive padding | 🟢 BAŞARILI |

---

## 3. Header Bileşen Testleri

| Test No | Özellik | Adım / Senaryo | Beklenen Davranış | Durum |
|---|---|---|---|---|
| **HDR-01** | Sticky & Scroll | Sayfa 20px aşağı kaydırılır | Header üstte sabit kalır ve `.header--scrolled` sınıfı ile gölge eklenir | 🟢 BAŞARILI |
| **HDR-02** | Aktif NavLink | Farklı rotalara tıklanır (`/kurumsal`, `/celik-evler` vb.) | İlgili link `nav-link--active` vurgusunu alır | 🟢 BAŞARILI |
| **HDR-03** | Mobil Hamburger Toggle | Ekran 1024px altına düşürülüp hamburger ikona tıklanır | Mobil menü drawer açılır/kapanır | 🟢 BAŞARILI |
| **HDR-04** | Dışarı Tıklama / ESC | Mobil menü açıkken dış alana tıklanır veya `ESC` basılır | Mobil menü otomatik kapanır | 🟢 BAŞARILI |
| **HDR-05** | Masaüstü Aksiyonlar | Masaüstü görünümde (1024px+) | Telefon linki ve "Teklif Al" CTA butonu görünür | 🟢 BAŞARILI |

---

## 4. Footer Bileşen Testleri

| Test No | Özellik | Adım / Senaryo | Beklenen Davranış | Durum |
|---|---|---|---|---|
| **FTR-01** | 4 Sütun Grid | Masaüstü ekran genişliğinde (1024px+) | 4 sütunlu kurumsal düzen (Marka, Hızlı Linkler, Yapı Kategorileri, İletişim) | 🟢 BAŞARILI |
| **FTR-02** | Mobil Yığılma | 375px mobil ekranda | Sütunlar tek sütun halinde dikey yığılır | 🟢 BAŞARILI |
| **FTR-03** | Rota Linkleri | Footer linklerine tıklanır | Doğru rotaya yumuşak geçiş yapılır | 🟢 BAŞARILI |
| **FTR-04** | Telif Çizgisi | Sayfa en altı | © 2026 Ataş Çelik Yapı telif yazısı görünür | 🟢 BAŞARILI |

---

## 5. Responsive ve Erişilebilirlik Testleri

- [x] **Yatay Overflow:** 375px, 768px ve 1280px genişliklerinde yatay scroll bar oluşmadığı teyit edildi.
- [x] **Reduced Motion:** `prefers-reduced-motion: reduce` medya sorgusunda CSS animasyonlarının ve scroll davranışının anlık moda geçtiği doğrulandı.
- [x] **WCAG AA Kontrast:** Koyu mavi arka plan üstündeki beyaz metinlerin okunabilirliği teyit edildi.
