const mongoose = require('mongoose');

// Kullanıcı şeması
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,  
    unique: true,    
    trim: true,      
    minlength: [3, 'Kullanıcı adı en az 3 karakter olmalı'],
    maxlength: [30, 'Kullanıcı adı en fazla 30 karakter olabilir']
  },
  email: {
    type: String,
    required: true,
    unique: true,    
    match: [/^\S+@\S+\.\S+$/, 'Geçerli bir e-posta adresi girin']
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Şifre en az 6 karakter olmalı']  
  },
  createdAt: {
    type: Date,
    default: Date.now  
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;
