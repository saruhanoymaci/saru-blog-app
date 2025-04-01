const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('MongoDB bağlantısı başarılı!');
  } catch (error) {
    console.error('MongoDB bağlantısı başarısız:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
