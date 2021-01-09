var express = require('express');
var router = express.Router();
const { jenisUsahaController } = require('../controllers');

router.get('/jenis-usaha', jenisUsahaController.index);
router.get('/jenis-usaha/:id', jenisUsahaController.show);
router.post('/jenis-usaha/search', jenisUsahaController.searchByName);

module.exports = router;