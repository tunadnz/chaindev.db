![Image](https://img.shields.io/npm/v/chaindev.db?color=f)
![Image](https://img.shields.io/npm/dt/chaindev.db.svg?color=E2142D&maxAge=3600) 
![Image](https://discordapp.com/api/guilds/814149645970046996/embed.png?style=shield) 
#
![Image](https://nodei.co/npm/chaindev.db.png?downloads=true&downloadRank=true&stars=true&stars=true)
#
![Image](https://cdn.glitch.com/36cacdd9-ec87-4187-829d-b9b82de904c3%2Fchaindev-db.png?v=1614557240999)
#
# Yüklemek İçin
```npm
npm i chaindev.db
```

# Örnek Kullanım
```javascript
const db = require('chaindev.db');

db.set('Veri', 'Değer');
db.push('Veri', 'Değer');
db.add('Veri', 5); // --> Değeri Sayı Olarak Girmelisiniz.
db.get('Veri');
db.has('Veri');
db.fetch('Veri');
db.fetchAll();
db.all(5); // --> Değeri Sayı Olarak Girmelisiniz.
db.includes('Veri');
db.deleteIncludes('Veri');
db.delete('Veri');
db.deleteAll();
db.destroy();
```
# Bug/Hata Bildirmek İçin Gerekli İletişim Bilgilerim
### Vodkâ#6421
[Discord](https://discord.gg/rVnKDGcRKR) 
