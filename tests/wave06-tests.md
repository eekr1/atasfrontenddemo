# Wave 06 — Manuel QA Test Dokümanı (Kurumsal & İletişim Sayfaları)

> **Test Tarihi:** 2026-07-28  
> **Test Edilen Wave:** Wave 06 — Kurumsal ve İletişim Sayfaları (`frontend/`)  
> **Test Eden:** AI Agent (Antigravity) & Kullanıcı

---

## 1. Otomatik ve Build Testleri

| Test No | Test Adı | Açıklama | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **AUTO-01** | `npm.cmd run build` | Vite derleme kontrolü (`frontend/` dizininde) | 0 hata ve 0 uyarı ile tamamlanır | 🟢 BAŞARILI |
| **AUTO-02** | `npm.cmd run dev` | Dev server ve HMR kontrolü | Konsol hatası olmadan sayfalar açılır | 🟢 BAŞARILI |

---

## 2. Kurumsal Sayfa Testleri (`/kurumsal`)

| Test No | Bölüm | Kontrol Adımı | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **CORP-01** | Hakkımızda | İki sütunlu metin + görsel | Firma tanıtım yazısı ve tesis görseli basılır | 🟢 BAŞARILI |
| **CORP-02** | Vizyon & Misyon | 2 adet bilgi kartı | Vizyon ve misyon hedefleri görüntülenir | 🟢 BAŞARILI |
| **CORP-03** | Kalite Standartları | 4 ikonlu özellik kartı | Statik hesap, CNC üretim, sertifika ve anahtar teslim kartları basılır | 🟢 BAŞARILI |
| **CORP-04** | Hizmet Bölgeleri | Şehir etiketleri | Tekirdağ ve çevre iller etiket olarak basılır | 🟢 BAŞARILI |

---

## 3. İletişim Sayfası ve Mock Form Testleri (`/iletisim`)

| Test No | Bileşen | Kontrol / İşlem | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **CONT-01** | Adres & Detaylar | Telefon, e-posta, çalışma saatleri | `lucide-react` ikonlarıyla birlikte eksiksiz görünüyor | 🟢 BAŞARILI |
| **CONT-02** | Google Maps Embed | Harita `<iframe>` bloğu | Harita alanı responsive yükleniyor | 🟢 BAŞARILI |
| **CONT-03** | Form Validasyonu | Boş form gönderimi | Ad Soyad, Telefon, E-posta ve Mesaj altında kırmızı hata yazıları çıkar | 🟢 BAŞARILI |
| **CONT-04** | Form Mock Submit | Geçerli form gönderimi | `isSubmitted: true` olur, teşekkür ekranı ve "Yeni Mesaj Gönder" butonu basılır | 🟢 BAŞARILI |
| **CONT-05** | Form Sırfırlama | "Yeni Mesaj Gönder" tıklaması | Form temizlenir ve tekrar boş form render edilir | 🟢 BAŞARILI |

---

## 4. Responsive Düzen Kontrolleri

- [x] **Input Focus Ring:** Form alanlarına odaklanıldığında lacivert (`--color-primary`) odak halkası çıkıyor.
- [x] **Dinamik Breadcrumb:** Ana Sayfa → Kurumsal ve Ana Sayfa → İletişim yolları sorunsuz.
- [x] **Yatay Overflow (375px):** 375px mobilde iki sütunlu düzenler dikey yığılıyor, yatay scroll oluşmuyor.
