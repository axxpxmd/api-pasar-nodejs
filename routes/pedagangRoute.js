var express = require('express');
var router = express.Router();
const { pedagangController } = require('../controllers');

router.get('/pedagang', pedagangController.index);
router.get('/pedagang/:id', pedagangController.show);

module.exports = router;