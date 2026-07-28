# Wave 03 — Manuel QA Test Dokümanı (Model Veri Yapısı & Listeleme Sayfaları)

> **Test Tarihi:** 2026-07-28  
> **Test Edilen Wave:** Wave 03 — Model Veri Yapısı ve Model Listeleme Sayfaları (`frontend/`)  
> **Test Eden:** AI Agent (Antigravity) & Kullanıcı

---

## 1. Otomatik ve Build Testleri

| Test No | Test Adı | Açıklama | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **AUTO-01** | `npm.cmd run build` | Vite derleme kontrolü (`frontend/` dizininde) | 0 hata ve 0 uyarı ile tamamlanır | 🟢 BAŞARILI |
| **AUTO-02** | `npm.cmd run dev` | Dev server ve HMR kontrolü | Konsol hatası olmadan sayfalar açılır | 🟢 BAŞARILI |

---

## 2. Sayfa ve Filtreleme Testleri

| Test No | Rota | Filtre Kriteri | Beklenen Model Sayısı | Durum |
|---|---|---|---|---|
| **PAGE-01** | `/celik-evler` | `category === "Çelik Ev"` | Tam 3 adet Çelik Ev kartı (`ModelCard`) render edilir | 🟢 BAŞARILI |
| **PAGE-02** | `/prefabrik-evler` (Bölüm 1) | `floorType === "Tek Katlı"` | Tam 2 adet Tek Katlı Prefabrik Ev kartı render edilir | 🟢 BAŞARILI |
| **PAGE-03** | `/prefabrik-evler` (Bölüm 2) | `floorType === "Çift Katlı"` | Tam 2 adet Çift Katlı Prefabrik Ev kartı render edilir | 🟢 BAŞARILI |

---

## 3. Bileşen ve Navigasyon Testleri

| Test No | Bileşen | Kontrol Adımı | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **NAV-01** | `Breadcrumb` | `/celik-evler` & `/prefabrik-evler` | Ana Sayfa linki ve aktif sayfa adı hiyerarşik gösterilir | 🟢 BAŞARILI |
| **NAV-02** | `ModelCard` | "Detayları İncele" butonuna tıklama | `/modeller/:slug` rotasına yönlendirir (Wave 04'e hazır) | 🟢 BAŞARILI |
| **NAV-03** | `CTABanner` | "Hemen Teklif Alın" butonuna tıklama | `/iletisim` rotasına yönlendirir | 🟢 BAŞARILI |

---

## 4. Responsive ve Görsel Düzen Testleri

- [x] **16:9 Görsel Oranı:** Tüm model kartlarında kapak görseli `aspect-ratio: 16/9` oranını koruyor.
- [x] **Kategori & Feature Badge:** Çelik Ev ve Prefabrik Ev badge'leri sol üstte doğru renklerle basılıyor.
- [x] **Yatay Overflow (375px):** 375px mobil genişlikte listeleme gridleri dikey tek sütuna düşüyor, yatay scroll oluşmuyor.
