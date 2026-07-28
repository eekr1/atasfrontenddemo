# Wave 07 — Manuel QA Test Dokümanı (Responsive, Erişilebilirlik & Polish)

> **Test Tarihi:** 2026-07-28  
> **Test Edilen Wave:** Wave 07 — Responsive Düzenlemeler, Erişilebilirlik ve Görsel Polish (`frontend/`)  
> **Test Eden:** AI Agent (Antigravity) & Kullanıcı

---

## 1. Otomatik ve Build Testleri

| Test No | Test Adı | Açıklama | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **AUTO-01** | `npm.cmd run build` | Vite derleme kontrolü (`frontend/` dizininde) | 0 hata ve 0 uyarı ile tamamlanır | 🟢 BAŞARILI |
| **AUTO-02** | `npm.cmd run dev` | Dev server ve HMR kontrolü | Tüm route'lar konsol hatası olmadan açılır | 🟢 BAŞARILI |

---

## 2. Cross-Breakpoint Responsive & Overflow Testleri

| Route | 375px (Mobil) | 768px (Tablet) | 1280px (Masaüstü) | Yatay Overflow | Durum |
|---|---|---|---|---|---|
| `/` (Ana Sayfa) | Slayt, 1 sütun kartlar | 2 sütun grid | 3 sütun grid | ❌ YOK | 🟢 BAŞARILI |
| `/kurumsal` | Dikey tek sütun | 2 sütun V/M | 2 sütun hakkımızda | ❌ YOK | 🟢 BAŞARILI |
| `/celik-evler` | 1 sütun model kartları | 2 sütun grid | 3 sütun grid | ❌ YOK | 🟢 BAŞARILI |
| `/prefabrik-evler` | 1 sütun model kartları | 2 sütun grid | 3 sütun grid | ❌ YOK | 🟢 BAŞARILI |
| `/modeller/:slug` | Tek sütun layout | 2 sütun galeri | 2fr / 1fr detay | ❌ YOK | 🟢 BAŞARILI |
| `/projeler` | 1 sütun proje kartları | 2 sütun grid | 3 sütun grid | ❌ YOK | 🟢 BAŞARILI |
| `/projeler/:slug` | Tek sütun layout | 2 sütun galeri | Kapak & Galeri | ❌ YOK | 🟢 BAŞARILI |
| `/iletisim` | Tek sütun harita + form | 2 sütun form | 1fr / 1.2fr düzen | ❌ YOK | 🟢 BAŞARILI |
| `*` (404 Bulunamadı) | Ortalı 404 mesajı | Ortalı 404 | Ortalı 404 | ❌ YOK | 🟢 BAŞARILI |

---

## 3. WCAG AA Erişilebilirlik ve Klavye Navigasyonu Testleri

| Test No | Kriter | Kontrol Adımı | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **ACC-01** | Keyboard Focus | `Tab` / `Shift+Tab` ile gezinme | Tüm interaktif elemanlarda sarı odak halkası (`:focus-visible`) belirir | 🟢 BAŞARILI |
| **ACC-02** | Reduced Motion | `prefers-reduced-motion: reduce` aktif etme | Hero slider otomatik durur, CSS transition süreleri `0s` olur | 🟢 BAŞARILI |
| **ACC-03** | Image Alt Props | Tüm `<img>` etiketleri denetimi | Boş veya eksik `alt` etiketi yok, tüm görseller tanımlı | 🟢 BAŞARILI |
| **ACC-04** | Kontrast (WCAG AA) | Hero metin ve zemin kontrastı | Koyu mavi zemin üzeri beyaz/sarı metinler okunabilir kontrasta sahip | 🟢 BAŞARILI |
| **ACC-05** | Form Labels | `ContactForm` girdi alanları | `<label htmlFor>` ile `<input id>` ve `<textarea id>` tam eşleşiyor | 🟢 BAŞARILI |

---

## 4. Görsel Polish ve Tasarım Sistemi Standartları

- [x] **Radius Eşitliği:** Tüm kartlarda `--radius-lg` (12px), thumbnail'lerde `--radius-md` (8px) tutarlılığı sağlandı.
- [x] **Spacing Standartları:** Bölümler arası dikey mesafeler `--space-20` (80px) ve `--space-24` (96px) standartlarına sabitlendi.
- [x] **Hover Efektleri:** Kart hover `translateY(-4px)` ve buton hover renk geçişleri performanslı CSS transition ile sağlandı.
- [x] **Mobil Hamburger Menü:** 1024px altında hamburger butonu açılıyor, `aria-expanded` güncelleniyor, ESC ve dışarı tıklama menüyü kapatıyor.
