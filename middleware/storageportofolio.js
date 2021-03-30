const multer = require('multer');
const path = require('path');

const storagePortofolio = multer.diskStorage({
  destination: './upload/images/portofolio',
  filename: (req, file, cb) => {
    return cb (null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const uploadPortofolio = multer({
  storage: storagePortofolio
})

module.exports = uploadPortofolio