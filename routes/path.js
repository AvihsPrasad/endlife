const express = require('express');
const router = express.Router();

const register_controller = require('../controllers/register');
const uploadfile = require('../controllers/filesupload');

router.post('/register', register_controller.registration);
router.get('/reg', register_controller.grtdata);
router.post('/upload', uploadfile.upload);

module.exports = router;