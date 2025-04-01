const express = require('express');
const connectDB = require('./db.js'); // database.js dosyasını dahil et

const app = express();
const port = 5000;

// MongoDB bağlantısını başlat
connectDB();

app.get('/', (req, res) => {
  res.send('MongoDB ile bağlantı başarılı!');
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
