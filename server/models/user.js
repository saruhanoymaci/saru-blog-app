const mongoose = require('mongoose');

// Kullanıcı şeması
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,  // Bu alan zorunlu olacak
    unique: true,    // Kullanıcı adı benzersiz olmalı
    trim: true,      // Başındaki ve sonundaki boşlukları keser
    minlength: [3, 'Kullanıcı adı en az 3 karakter olmalı'],  // Minimum uzunluk
    maxlength: [30, 'Kullanıcı adı en fazla 30 karakter olabilir']  // Maksimum uzunluk
  },
  email: {
    type: String,
    required: true,
    unique: true,    // E-posta adresi benzersiz olmalı
    match: [/^\S+@\S+\.\S+$/, 'Geçerli bir e-posta adresi girin']  // Geçerli bir e-posta formatı
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Şifre en az 6 karakter olmalı']  // Minimum uzunluk
  },
  createdAt: {
    type: Date,
    default: Date.now  // Varsayılan olarak şu anki zaman
  }
});

// Kullanıcı modelini oluşturuyoruz
const User = mongoose.model('User', userSchema);

module.exports = User;
