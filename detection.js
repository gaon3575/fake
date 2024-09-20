const express = require('express');
const multer = require('multer');
const Detection = require('../models/Detection');
const router = express.Router();

// Multer 설정 (파일을 로컬 uploads 폴더에 저장)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

// 파일 업로드 및 딥페이크 탐지 처리
router.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'File upload failed' });
  }

  // 딥페이크 탐지 모델을 호출하는 부분 (임의로 딥페이크 여부 설정)
  const isDeepfake = Math.random() < 0.5;  // 임의로 50% 확률로 딥페이크

  // 탐지 결과 데이터베이스에 저장
  const detection = new Detection({
    filename: req.file.filename,
    status: 'Success',
    isDeepfake: isDeepfake,
  });

  try {
    await detection.save();
    res.json({
      status: detection.status,
      isDeepfake: detection.isDeepfake,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error saving detection result' });
  }
});

module.exports = router;
