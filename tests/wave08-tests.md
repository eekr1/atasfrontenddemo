# Wave 08 — Manuel QA & Sunum Hazırlığı Dokümanı

> **Test Tarihi:** 2026-07-28  
> **Test Edilen Wave:** Wave 08 — Demo Doğrulama, Temizlik ve Sunuma Hazırlık (`frontend/`)  
> **Test Eden:** AI Agent (Antigravity) & Kullanıcı

---

## 1. Otomatik ve Build Testleri

| Test No | Test Adı | Açıklama | Beklenen Sonuç | Durum |
|---|---|---|---|---|
| **AUTO-01** | `npm.cmd run build` | Production Vite derlemesi (`frontend/` dizininde) | 0 hata ve 0 uyarı ile tamamlanır | 🟢 BAŞARILI |
| **AUTO-02** | `npm.cmd run preview` | Production build önizleme kontrolü | Konsol hatası olmadan tüm route'lar açılır | 🟢 BAŞARILI |

---

## 2. Uçtan Uca 4 Kullanıcı Akışı Doğrulaması

| Akış No | Senaryo / Akış Adımları | Beklenen Davranış | Durum |
|---|---|---|---|
| **FLOW-01** | **Ana Sayfa → Çelik Evler → Model Detay → Teklif Al**<br/>1. Ana Sayfadan "Çelik Evler" menüsüne tıkla.<br/>2. "Ataş 303" model kartından "Detayları İncele"ye bas.<br/>3. Detay sayfasındaki galeri, kat planı ve teknik verileri incele.<br/>4. "Özel Teklif İste" butonuna basarak `/iletisim` sayfasına geç. | 4 adım da kesintisiz ve hatasız tamamlanır, URL doğru güncellenir. | 🟢 BAŞARILI |
| **FLOW-02** | **Ana Sayfa → Prefabrik Evler → Model Detay → WhatsApp**<br/>1. Ana Sayfadan "Prefabrik Evler" menüsüne tıkla.<br/>2. Tek Katlı bölümünden "Ataş Prefabrik 101" kartına tıkla.<br/>3. Model detayında "WhatsApp İle Sorun" butonuna bas. | WhatsApp bağlantısı (`wa.me/902820000000`) yeni sekmede mesaj taslağıyla açılır. | 🟢 BAŞARILI |
| **FLOW-03** | **Ana Sayfa → Saha Projeleri → Proje Detay**<br/>1. "Projeler" menüsünden tüm saha uygulamalarını gör.<br/>2. "Tekirdağ Saray Çelik Ev" kartına bas.<br/>3. Proje detay sayfasında saha galerisini büyütüp gez. | `Gallery` ve kontrollü `Lightbox` klavye okları ve ESC ile hatasız çalışır. | 🟢 BAŞARILI |
| **FLOW-04** | **Ana Sayfa → İletişim → Mock Form Gönderimi**<br/>1. "İletişim" sayfasına git.<br/>2. Form alanlarını doldur ve "Teklif Talebini Gönder"e bas.<br/>3. Başarı ekranını gör ve "Yeni Mesaj Gönder" ile formu sıfırla. | Controlled form validasyon ve `isSubmitted` başarı ekranını hatasız yönetir. | 🟢 BAŞARILI |

---

## 3. Müşteri Satış Görüşmesi Sunum Akışı Sırası

1. **Giriş (Ana Sayfa):** Hero slider görsel şöleni, 3 yapı kategorisi, öne çıkan 6 çelik model ve firmamızın kurumsal avantajları.
2. **Katalog (Çelik Evler & Prefabrik Evler):** Çelik ve prefabrik konutların m², kat tipi ve filtre hiyerarşisinde sergilenmesi.
3. **Ürün Detayı (Model Detay Sayfası):** 16:9 büyük görseller, 4:3 kontrollü galeri lightbox'ı, mimari kat planı ve teknik özellikler tablosu.
4. **Saha Referansları (Projeler):** Tamamlanan/devam eden projeler, konum bilgileri ve şantiye görselleri.
5. **Kurumsal & Teklif Alma (İletişim):** Harita konumu, adres detayları ve canlı validasyonlu teklif başvuru formu.
