![Image](https://img.shields.io/npm/v/chaindev.db?color=E2142D)
![Image](https://img.shields.io/npm/dt/chaindev.db.svg?color=E2142D&maxAge=3600) 
#
![Image](https://cdn.glitch.com/36cacdd9-ec87-4187-829d-b9b82de904c3%2Fchaindev-db.png?v=1614557240999)
#
# Yüklemek İçin
```npm
npm i chaindev.db
```

# Yenilikler
```
[ Hata / Bug Giderme ]
- math Methodu Düzeltildi
- hasArray Methodu Düzeltildi.
```

# Uyarı
```
- Node Sürümü 12 Ve Üstü Olmalıdır.
```

# Database Kullanımı
```javascript
//-----------------------------JSON-----------------------------\\

const { JsonDatabase, YamlDatabase } = require('chaindev.db');
const db = new JsonDatabase('Database');

//-----------------------------YAML-----------------------------\\

const { JsonDatabase, YamlDatabase } = require('chaindev.db');
const db = new YamlDatabase('Database');

//--------------------------------------------------------------\\
```

# Methodlar
```javascript
// ---> Kaydetme & Çekme Methodları
db.set('Veri', 'Değer'); // --> Veriyi Kaydeder
db.push('Veri', 'Değer'); // --> Veriyi Array Olarak Kaydeder
db.fetch('Veri'); // --> Veriyi Çeker
db.get('Veri'); // --> Veriyi Çeker

// ---> Silme Methodları
db.delete('Veri'); // --> Kaydedilmiş Olan Veriyi Siler
db.deleteIncludes('Veri'); // --> Girdiğiniz Verinin Adını İçeren Bütün Verileri Siler
db.deleteAll(); // --> Veritabanında Bulunan Bütün Verileri Siler
db.destroy(); // --> Veritabanı Dosyasını Siler


// ---> Boolean Methodları
db.has('Veri'); // --> Veri Varmı/Yokmu Kontrol Eder
db.hasArray('Veri'); // --> Veri Arraymı Değilmi Kontrol Eder

// ---> Veri Bulma Methodları
db.fetchAll(); // --> Veritabanında Bulunan Bütün Verileri Array İçine Ekler
db.all() || db.all(5); // --> Veritabanında Bulunan Bütün Verileri Array İçine Ekler
db.includes('Veri'); // --> Girdiğiniz Verinin Adını İçeren Bütün Verileri Array İçine Ekler
db.startsWith('Veri'); // --> Girdiğiniz Verinin Adı İle Başlayan Bütün Verileri Array İçine Ekler
db.endsWith('Veri'); // --> Girdiğiniz Verinin Adı İle Biten Bütün Verileri Array İçine Ekler
db.keyArray(); // --> Veritabanında Bulunan Bütün Verileri Değersiz Array İçine Ekler
db.valueArray(); // --> Veritabanında Bulunan Bütün Verilerin Değerini Array İçine Ekler

// ---> Matematik Methodları
db.add('Veri', 5); // --> Veriyi Sayı Olarak Kaydeder
db.substract('Veri', 5); // --> Kaydedilmiş Olan Veriden Girdiğiniz Sayıyı Çıkarır
db.math('Veri', '*', 5); // --> Kaydedilmiş Olan Veride Matematik İşlemi Yapar

// ---> Bilgi Methodları
db.type('Veri'); // --> Verinin Tipini Gösterir
db.length(); // --> Veritabanında Bulunan Toplam Veri Sayısını Gösterir
```
# İletişim Bilgilerim
[Discord](https://discord.gg/rVnKDGcRKR) 
