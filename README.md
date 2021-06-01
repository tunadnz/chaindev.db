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
const { JsonDatabase, YamlDatabase } = require('chaindev.db');
const db = new JsonDatabase('./Database.json');
const yamlDB = new YamlDatabase('./Database.yaml');

db.set('Veri', 'Değer');
db.push('Veri', 'Değer');
db.add('Veri', 5);
db.substr('Veri', 5);
db.fetch('Veri');
db.fetchAll();
db.all(); || db.all(5);
db.has('Veri');
db.get('Veri');
db.includes('Veri');
db.type('Veri');
db.length();
db.startsWith('Veri');
db.endsWith('Veri');
db.hasArray('Veri', 'Değer');
db.valueArray();
db.keyArray();
db.delete('Veri');
db.deleteIncludes('Veri');
db.deleteAll();
db.destroy();
```
# Bug/Hata Bildirmek İçin Gerekli İletişim Bilgilerim
### Vodkâ#6421
[Discord](https://discord.gg/rVnKDGcRKR) 
