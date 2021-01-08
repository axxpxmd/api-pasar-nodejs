var express = require('express');
var router = express.Router();
const { pedagangAlamatController } = require('../controllers');

var url = '/pedagang-alamat';
var validation = pedagangAlamatController.validation;

router.get(url, pedagangAlamatController.index);
router.get(url + '/:id', pedagangAlamatController.show);
router.get(url + '/pedagang/:pedagang', validation, pedagangAlamatController.filterByPedagang);  
router.get(url + '/jenis-usaha/:jenisUsaha', validation, pedagangAlamatController.filterByJenisUsaha);
router.get(url + '/filter/:pedagang/:jenisUsaha', validation, pedagangAlamatController.filter);
router.post(url + '/search', pedagangAlamatController.search);

module.exports = router;