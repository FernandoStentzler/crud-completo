var express = require('express');
var router = express.Router();
var apiAxiosController = require('../controllers/apiAxiosController');

/* GET home page. */
router.get('/', apiAxiosController.getStates);

module.exports = router;
