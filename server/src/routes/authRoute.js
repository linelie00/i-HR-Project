const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware'); 

const router = express.Router();

router.use('/auth', authController);

module.exports = router;
