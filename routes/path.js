const express = require('express');
const router = express.Router();

const register_controller = require('../controllers/register');

router.post('/register', register_controller.registration);
router.get('/reg', register_controller.grtdata);

module.exports = router;