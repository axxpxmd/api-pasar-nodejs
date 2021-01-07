var express = require('express');
var router = express.Router();
const { pedagangAlamatController } = require('../controllers')
const { check } = require('express-validator')

var url = '/pedagang-alamat'

router.get(url, pedagangAlamatController.index);
router.get(url + '/:id', pedagangAlamatController.show);
router.get(url + '/pedagang/:pedagang', pedagangAlamatController.filterByPedagang);  
router.get(url + '/jenis-usaha/:jenisUsaha', pedagangAlamatController.filterByJenisUsaha);
router.get(url + '/filter/:pedagang/:jenisUsaha',pedagangAlamatController.validation, pedagangAlamatController.filter);
router.post(url + '/search', pedagangAlamatController.search);

module.exports = router;