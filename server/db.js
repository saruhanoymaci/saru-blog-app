const mongoose = require('mongoose');

// .env dosyasındaki çevresel değişkeni kullanmak için dotenv paketi
require('dotenv').config();

// MongoDB bağlantısı için URL
const dbURI = process.env.MONGO_URI;

// Bağlantı fonksiyonu
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('MongoDB bağlantısı başarılı!');
  } catch (error) {
    console.error('MongoDB bağlantısı başarısız:', error.message);
    process.exit(1); // Bağlantı hatası durumunda uygulamayı sonlandır
  }
};

module.exports = connectDB;
