const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Header'dan token'ı al
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'Token gereklidir.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(401).json({ message: 'Geçersiz token.' });
  }
};

module.exports = { verifyToken };
