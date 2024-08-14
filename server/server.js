const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./src/routes/authRoute.js');

dotenv.config(); // .env 파일의 환경 변수 로드

const app = express();
app.set('port', process.env.PORT || 8080);

// 데이터베이스 연결
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error('데이터베이스 연결 실패:', err);
  });

// CORS 설정
app.use(cors({
  origin: process.env.CLIENT_URL, // .env 파일에서 가져온 CLIENT_URL 사용
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//라우터 설정
app.use('/api', authRoutes);

// 서버 실행
app.listen(app.get('port'), () => {
  console.log(`${app.get('port')}번 포트에서 서버가 실행 중입니다.`);
});