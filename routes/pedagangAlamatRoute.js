var express = require('express');
var router = express.Router();
const { pedagangAlamatController } = require('../controllers')

var url = '/pedagang-alamat'

router.get(url, pedagangAlamatController.index);
router.get(url+'/:id', pedagangAlamatController.show);
router.get(url+'/pedagang/:pedagang', pedagangAlamatController.filterByPedagang);  
router.get(url+'/jenis-usaha/:jenisUsaha', pedagangAlamatController.filterByJenisUsaha);

module.exports = router;