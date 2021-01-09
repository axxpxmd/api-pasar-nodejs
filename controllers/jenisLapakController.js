const conn = require('../database');

module.exports = {
    index: (req, res) => {
        var sql = 'SELECT * FROM tm_jenis_lapaks ORDER BY nm_jenis_lapak ASC'
        conn.query(sql, (err, results) => {
            if (err) throw err
            res.send(results)
        })
    },

    show: (req, res) => {
        var sql = `SELECT * FROM tm_jenis_lapaks WHERE id = '${req.params.id}' ORDER BY nm_jenis_lapak ASC`
        conn.query(sql, (err, result) => {
            if (result == false) {
                res.send('Data tidak ditemukan')
            } else {
                res.send(result)
            }   
        })
    },

    /**
     * Search
     */
    searchByName: (req, res) => {
        var sql = `SELECT * FROM tm_jenis_lapaks WHERE nm_jenis_lapak LIKE '%${req.params.nm_jenis_lapak}%' ORDER BY nm_jenis_lapak`
        conn.query(sql, (err, result) => {
            if (result == false) {
                res.send('Data tidak ditemukan')
            } else {
                res.send(result)
            }
        })
    }
}