const express = require('express');
const router = express.Router();
const multer = require('multer');
//import from Authentication
const auth = require('../Auth/Authentication');

//impport from Controller
const ScreamController = require('../Controllers/ScreamController');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString() + file.originalname)
  }
});

const fileFilter = function(req, file, cb) {
   if(!file.filename.match(/\.(jpg|jpeg|png|gif)$/)){ //images ext
      return cb(new Error('Only image allowed this case'), false)
  }
  return cb(null, true)
}
const uploads = multer({ storage: storage, filter: fileFilter, limits: {
  fileSize: 1024 * 1024 * 5
}});

router.post('/', auth, uploads.single('image'), ScreamController.createScream);

router.get('/', ScreamController.getAllScream);

router.get('/myscreams', auth, ScreamController.getAllUserScream);

router.get('/:_id', auth, ScreamController.getByScreamID);

router.patch('/:_id', auth, ScreamController.updateScream)

module.exports = router;