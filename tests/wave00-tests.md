# Wave 00 — Manuel QA Test Dokümanı (Frontend)

> **Test Tarihi:** 2026-07-28  
> **Test Edilen Wave:** Wave 00 — Proje Kurulumu ve Temel İskelet (`frontend/`)  
> **Test Eden:** AI Agent (Antigravity) & Kullanıcı

---

## 1. Otomatik ve Altyapı Testleri

| Test No | Test Adı | Açıklama | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **AUTO-01** | `npm install` | Bağımlılıkların yüklenmesi (`frontend/` dizininde) | Hatasız tamamlanır | 🟢 BAŞARILI |
| **AUTO-02** | `npm run build` | Vite production build işlemi (`frontend/` dizininde) | Sıfır hata / uyarısız dist çıktısı üretir | 🟢 BAŞARILI |
| **AUTO-03** | `npm run dev` | Geliştirici sunucusunun başlatılması | `http://localhost:5173` adresinde hatasız başlar | 🟢 BAŞARILI |

---

## 2. Rota Navigasyon ve Placeholder Testleri

| Test No | Rota (URL) | Beklenen Bileşen | Beklenen Ekran Metni | Durum |
|---|---|---|---|---|
| **ROUTE-01** | `/` | `HomePage.jsx` | "Ana Sayfa" | 🟢 BAŞARILI |
| **ROUTE-02** | `/kurumsal` | `CorporatePage.jsx` | "Kurumsal" | 🟢 BAŞARILI |
| **ROUTE-03** | `/celik-evler` | `SteelModelsPage.jsx` | "Çelik Ev Modelleri" | 🟢 BAŞARILI |
| **ROUTE-04** | `/prefabrik-evler` | `PrefabricModelsPage.jsx` | "Prefabrik Evler" | 🟢 BAŞARILI |
| **ROUTE-05** | `/modeller/atas-303` | `ModelDetailPage.jsx` | "Model Detayı" (Slug: atas-303) | 🟢 BAŞARILI |
| **ROUTE-06** | `/projeler` | `ProjectsPage.jsx` | "Projeler" | 🟢 BAŞARILI |
| **ROUTE-07** | `/projeler/tekirdag-saray` | `ProjectDetailPage.jsx` | "Proje Detayı" (Slug: tekirdag-saray) | 🟢 BAŞARILI |
| **ROUTE-08** | `/iletisim` | `ContactPage.jsx` | "İletişim" | 🟢 BAŞARILI |
| **ROUTE-09** | `/tanimsiz-adres-404` | `NotFoundPage.jsx` | "404 — Sayfa Bulunamadı" | 🟢 BAŞARILI |

---

## 3. Klasör Yapısı ve CSS Hizalama Testleri

- [x] **Dizin Uyumu:** `frontend/src/components/`, `frontend/src/data/`, `frontend/src/layouts/`, `frontend/src/pages/`, `frontend/src/styles/` dizinlerinin `PROJECT_PLAN.md` ile %100 örtüştüğü doğrulandı.
- [x] **CSS Yükleme Sırası:** `frontend/src/main.jsx` içinde import sırasının `tokens.css` → `base.css` → `layout.css` → `components.css` olduğu doğrulandı.
- [x] **Layout Bütünlüğü:** Tüm rotaların `<Header />` ve `<Footer />` placeholder'ları ile sarıldığı (`MainLayout.jsx`) teyit edildi.
