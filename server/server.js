const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // .env 파일의 환경 변수 로드

const app = express();
app.set('port', process.env.PORT || 8080);

// CORS 설정
app.use(cors({
  origin: process.env.CLIENT_URL, // .env 파일에서 가져온 CLIENT_URL 사용
  credentials: true
}));

// 서버 실행
app.listen(app.get('port'), () => {
  console.log(`${app.get('port')}번 포트에서 서버가 실행 중입니다.`);
});