const express = require('express');

const userController = require('../controller/UserController');

const router = express.Router();

router.post('/', userController.upload);

module.exports = router;