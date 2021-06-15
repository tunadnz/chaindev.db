![Image](https://img.shields.io/npm/v/chaindev.db?color=E2142D)
![Image](https://img.shields.io/npm/dt/chaindev.db.svg?color=E2142D&maxAge=3600) 
#
![Image](https://cdn.glitch.com/36cacdd9-ec87-4187-829d-b9b82de904c3%2Fchaindev-db.png?v=1614557240999)
#
# Yüklemek İçin
```npm
npm i chaindev.db
```

# Uyarı
```
Node Sürümü 12'den Büyük Olmalıdır.
```

# Örnek Kullanım
```javascript
-----------------------------JSON-----------------------------
const { JsonDatabase, YamlDatabase } = require('chaindev.db');
const db = new JsonDatabase('Database');
-----------------------------YAML-----------------------------
const { JsonDatabase, YamlDatabase } = require('chaindev.db');
const db = new YamlDatabase('Database');
--------------------------------------------------------------
```

# Methodlar
```javascript
db.set('Veri', 'Değer');
db.push('Veri', 'Değer');
db.add('Veri', 5); // ---> Değer Sayı Olmak Zorundadır.
db.substract('Veri', 5); // ---> Değer Sayı Olmak Zorundadır.
db.fetch('Veri');
db.fetchAll();
db.all(); || db.all(5); // ---> Limit Sayı Olmak Zorundadır.
db.has('Veri');
db.get('Veri');
db.includes('Veri');
db.math('Veri', '*', 5); // ---> Değer Sayı Olmak Zorundadır.
db.type('Veri');
db.length();
db.startsWith('Veri');
db.endsWith('Veri');
db.hasArray('Veri');
db.keyArray();
db.valueArray();
db.delete('Veri');
db.deleteIncludes('Veri');
db.deleteAll();
db.destroy();
```
# İletişim Bilgilerim
[Discord](https://discord.gg/rVnKDGcRKR) 
