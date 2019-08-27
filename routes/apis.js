var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.route('/test').post(userController.test);

module.exports = router;
