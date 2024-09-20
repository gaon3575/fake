const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const detectionRoutes = require('./routes/detection');
const app = express();
const port = 5000;

// CORS 설정 (프론트엔드와의 통신을 허용)
app.use(cors());

// JSON 요청 파싱
app.use(express.json());

// MongoDB 연결 설정
mongoose.connect('mongodb://localhost:27017/deepfake', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// 탐지 라우트
app.use('/upload', detectionRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
