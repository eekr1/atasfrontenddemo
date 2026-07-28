# Wave 05 — Manuel QA Test Dokümanı (Projeler & Proje Detay Sayfası)

> **Test Tarihi:** 2026-07-28  
> **Test Edilen Wave:** Wave 05 — Projeler ve Proje Detay Sayfası (`frontend/`)  
> **Test Eden:** AI Agent (Antigravity) & Kullanıcı

---

## 1. Otomatik ve Build Testleri

| Test No | Test Adı | Açıklama | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **AUTO-01** | `npm.cmd run build` | Vite derleme kontrolü (`frontend/` dizininde) | 0 hata ve 0 uyarı ile tamamlanır | 🟢 BAŞARILI |
| **AUTO-02** | `npm.cmd run dev` | Dev server ve HMR kontrolü | Konsol hatası olmadan projeler sayfası açılır | 🟢 BAŞARILI |

---

## 2. Dinamik Rota ve Proje Detay Testleri

| Test No | Rota | Beklenen Davranış | Durum |
|---|---|---|---|
| **PROJ-01** | `/projeler` | 4 adet saha projesi 3:2 oranlı görseller ve durum badge'leri ile listelenir | 🟢 BAŞARILI |
| **PROJ-02** | `/projeler/tekirdag-saray-celik-ev` | Saray projesi detayları, konumu (📍 Tekirdağ / Saray) ve galerisi yüklenir | 🟢 BAŞARILI |
| **PROJ-03** | `/projeler/gecersiz-slug` | Uygulama çökmez, `NotFoundPage` 404 mesajı gösterilir | 🟢 BAŞARILI |

---

## 3. Yeniden Kullanılan Lightbox & Görsel Galerisi Testleri

| Test No | Bileşen | Kontrol Adımı | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **GAL-01** | `Gallery` & `Lightbox` | Saha görseline tıklama | Lightbox modalı açılır, `Gallery` prop ile sorunsuz çalışır | 🟢 BAŞARILI |
| **GAL-02** | Status Badge | "Tamamlandı" vs "Devam Ediyor" | Yeşil (`--color-success`) veya mavi (`--color-info`) renk basılır | 🟢 BAŞARILI |
| **GAL-03** | CTA Butonu | Proje teklifi alma butonu | `/iletisim` rotasına sorunsuz yönlendirir | 🟢 BAŞARILI |

---

## 4. Responsive Düzen Kontrolleri

- [x] **3:2 Görsel Oranı:** Proje kartları `aspect-ratio: 3/2` oranını koruyor.
- [x] **Dinamik Breadcrumb:** Ana Sayfa → Projeler → [Proje Adı] hiyerarşisi doğru basılıyor.
- [x] **Yatay Overflow (375px):** 375px mobilde gridler dikey tek sütuna düşüyor, yatay scroll oluşmuyor.
