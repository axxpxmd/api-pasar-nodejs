var express = require('express');
var router = express.Router();
const { pedagangAlamatController } = require('../controllers')

router.get('/pedagang-alamat', pedagangAlamatController.index);
router.get('/pedagang-alamat/:id', pedagangAlamatController.show);  

module.exports = router;