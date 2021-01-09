var express = require('express');
var router = express.Router();
const { jenisLapakController } = require('../controllers');

router.get('/jenis-lapak', jenisLapakController.index);
router.get('/jenis-lapak/:id', jenisLapakController.show);
router.post('/jenis-lapak/search', jenisLapakController.searchByName);

module.exports = router;