const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const authService = require('../services/authService');

dotenv.config(); // .env 파일의 환경 변수 로드

const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

router.post('/login', async (req, res) => {
    const user = req.body;
    
    try {
        const response = await authService.login(user);
    
        // JWT 토큰 생성
        const token = jwt.sign(
        {
            user: {
            id: response.data.seq_id,
            code: response.data.code,
            },
        },
        secretKey,
        {
            expiresIn: '4h',
            issuer: 'admin.auth.service',
        }
        );
    
        res.status(200).json({ token });
    } catch (error) {
        console.error('로그인 실패:', error);
        res.status(400).json({ message: '로그인에 실패했습니다.' });
    }
});

router.post('/signUp', (req, res) => {
    const user = req.body;
    try {
        const response = authService.signUp(user);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('관리자 등록 실패:', error);
        res.status(400).json({ message: '관리자 등록에 실패했습니다.' });
    }
});

module.exports = router;