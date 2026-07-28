# Wave 04 — Manuel QA Test Dokümanı (Model Detay Sayfası & Controlled Lightbox)

> **Test Tarihi:** 2026-07-28  
> **Test Edilen Wave:** Wave 04 — Model Detay Sayfası & Controlled Lightbox (`frontend/`)  
> **Test Eden:** AI Agent (Antigravity) & Kullanıcı

---

## 1. Otomatik ve Build Testleri

| Test No | Test Adı | Açıklama | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **AUTO-01** | `npm.cmd run build` | Vite derleme kontrolü (`frontend/` dizininde) | 0 hata ve 0 uyarı ile tamamlanır | 🟢 BAŞARILI |
| **AUTO-02** | `npm.cmd run dev` | Dev server ve HMR kontrolü | Konsol hatası olmadan detay sayfası açılır | 🟢 BAŞARILI |

---

## 2. Dinamik Rota ve 404 Testleri

| Test No | Rota | Beklenen Davranış | Durum |
|---|---|---|---|
| **ROUTE-01** | `/modeller/atas-303` | Ataş 303 modeli detayları, galerisi ve teknik özellikleri doğru yüklenir | 🟢 BAŞARILI |
| **ROUTE-02** | `/modeller/atas-201` | Ataş 201 modeli detayları hatasız yüklenir | 🟢 BAŞARILI |
| **ROUTE-03** | `/modeller/gecersiz-slug` | Uygulama çökmez, `NotFoundPage` 404 bilgi mesajı gösterilir | 🟢 BAŞARILI |

---

## 3. Lightbox ve Galeri Testleri (Controlled Pattern Check)

| Test No | İşlem / Aksiyon | Beklenen Sonuç | Durum |
|---|---|---|---|
| **LIGHTBOX-01** | Thumbnail resmi tıklama | Modal açılır (`isOpen: true`), tıklanan resim ekrana gelir | 🟢 BAŞARILI |
| **LIGHTBOX-02** | Sağ / Sol Ok butonu veya Klavye Okları | Slayt ilerler/geriler, sayaç güncellenir (`2 / 4`) | 🟢 BAŞARILI |
| **LIGHTBOX-03** | `ESC` tuşuna basma veya `X` butonu | Modal kapanır (`isOpen: false`), body scroll çözülür | 🟢 BAŞARILI |
| **LIGHTBOX-04** | State mimarisi denetimi | `Lightbox.jsx` prop kontrollüdür, iç state barındırmaz | 🟢 BAŞARILI |

---

## 4. Sayfa İçeriği ve CTA Testleri

- [x] **Dinamik Breadcrumb:** Ana Sayfa → [Çelik Ev / Prefabrik Ev] → [Model Adı] doğru hiyerarşiyi gösteriyor.
- [x] **Kat Planı Görseli:** Mimari kat planı bloğu doğru render ediliyor.
- [x] **Teknik Özellikler:** `specs` tablosunda Oda Sayısı, Banyo, Veranda, Yapı Sistemi verileri listeleniyor.
- [x] **CTA Butonları:** "Teklif Al" `/iletisim` rotasına, "WhatsApp" butonu `wa.me` dış bağlantısına yönlendiriyor.
- [x] **Benzer Modeller Grid:** Aynı kategoriden 3 adet model `ModelCard` ile basılıyor ve tıklandığında kendi sayfalarına yönlendiriyor.
- [x] **Responsive (375px):** Mobilde 2fr/1fr layout dikey tek sütuna düşüyor, overflow oluşmuyor.
