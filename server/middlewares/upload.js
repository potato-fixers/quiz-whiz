const multer = require('multer');

// Create a multer instance with the desired configuration
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      cb(new Error('File type not supported. Please upload an image file.'));
    } else {
      cb(null, true);
    }
  },
});

module.exports = upload;