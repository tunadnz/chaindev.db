const db = require('chaindev.db');

db.set('Veri', 'Değer');
db.push('Veri', 'Değer');
db.add('Veri', 5); // --> Değeri Sayı Olarak Girmelisiniz.
db.get('Veri');
db.has('Veri');
db.fetch('Veri');
db.fetchAll();
db.includes('Veri');
db.deleteIncludes('Veri', 'Değer');
db.delete('Veri');
db.deleteAll();
db.destroy();
