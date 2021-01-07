const conn = require('../database');
const { check, validationResult } = require('express-validator');

module.exports = {
    index: (req, res) => {
        var sql = 'SELECT * FROM tm_pedagang_alamats ORDER BY nm_toko ASC'
        conn.query(sql, (err, results) => {
            if (err) throw err
            res.send(results)
        })
    }, 

    show: (req, res) => {
        var sql = `SELECT * FROM tm_pedagang_alamats WHERE id = '${req.params.id} ORDER BY nm_toko ASC'`
        conn.query(sql, (err, result) => {
            if (result == false) {
                res.send('Data tidak ditemukan!')
            } else {
                res.send(result)
            }
        })
    },

    /** Filter */
    filterByPedagang: (req, res) => {
        var sql = `SELECT * FROM tm_pedagang_alamats WHERE tm_pedagang_id = '${req.params.pedagang} ORDER BY nm_toko ASC'`
        conn.query(sql, (err, result) => {
            if (result == false) {
                res.send('Data tidak ditemukan!')
            } else {
                res.send(result)
            }
        })
    },

    filterByJenisUsaha:(req, res) => {
        var sql = `SELECT * FROM tm_pedagang_alamats WHERE tm_jenis_usaha_id = '${req.params.jenisUsaha}' ORDER BY nm_toko ASC`
        conn.query(sql, (err, result) => {
            if (result == false) {
                res.send('Data tidak ditemukan!')
            } else {
                res.send(result)
            }
        })
    },

    validation: [
        check('pedagang').isNumeric().withMessage('data harus numerik!').isEmpty().withMessage('data tidak boleh kosong!'),
        check('jenisUsaha').isNumeric().withMessage('data harus numerik!')
    ],

    filter: (req, res) => {
        var sql = `SELECT * FROM tm_pedagang_alamats WHERE tm_pedagang_id = '${req.params.pedagang}' AND tm_jenis_usaha_id = '${req.params.jenisUsaha}' ORDER BY nm_toko`
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }
        conn.query(sql, (err, result) => {
            if (result == false) {
                res.send('Data tidak ditemukan!')
            } else {
                res.send(result)
            }
        })
    },

    /** Search by nm_toko, kd_toko */
    search: (req, res) => {
        var search = req.body;
        var sql = `SELECT * FROM tm_pedagang_alamats WHERE nm_toko LIKE '%${req.body.nm_toko}%' && kd_toko LIKE '%${req.body.kd_toko}%' ORDER BY nm_toko ASC`
        conn.query(sql, search, (err, result) => {
            if (result == false) {
                res.send('Data tidak ditemukan!')
            } else {
                res.send(result)
            }
        })
    }
}