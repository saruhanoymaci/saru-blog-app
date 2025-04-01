const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware'); 

router.post('/register', userController.register);
router.post('/login', userController.login);


router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({
    message: 'Korunan rotaya erişildi!',
    user: req.user
  });
});

module.exports = router;
