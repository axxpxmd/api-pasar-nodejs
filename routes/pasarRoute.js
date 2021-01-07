var express = require('express');
var router = express.Router();
const { pasarController }= require('../controllers');

var url = '/pasar';

router.get(url, pasarController.index);
router.get(url + '/:id', pasarController.show);

module.exports = router;