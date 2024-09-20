const mongoose = require('mongoose');

const detectionSchema = new mongoose.Schema({
  filename: { type: String, required: true },  // 업로드된 파일 이름
  status: { type: String, required: true },    // 탐지 상태 (성공, 실패 등)
  isDeepfake: { type: Boolean, required: true }, // 딥페이크 여부
  date: { type: Date, default: Date.now },     // 탐지된 날짜
});

const Detection = mongoose.model('Detection', detectionSchema);

module.exports = Detection;
