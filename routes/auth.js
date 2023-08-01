const {Router} = require('express');
const googleAuthController = require('../conttrollers/auth');
const router = Router();

router.post('/google', googleAuthController);

module.exports = router;