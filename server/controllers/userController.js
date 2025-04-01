const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Kullanıcı kaydetme
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcı oluşturuluyor
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({
      message: 'Kullanıcı başarıyla oluşturuldu!',
      user: newUser
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Bir hata oluştu.' });
  }
};

const login= async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Kullanıcı bulunamadı!' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Geçersiz şifre!' });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' } 
    );

    res.status(200).json({
      message: 'Giriş başarılı!',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Bir hata oluştu.' });
  }
};

module.exports = { register, login };
