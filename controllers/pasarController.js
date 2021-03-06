const conn = require('../database')

module.exports = {
    index: (req, res) => {
        var sql = 'SELECT * FROM tm_pasars ORDER BY nm_pasar'
        conn.query(sql, (err, results) => {
            if (err) throw err
            res.send(results)
        })
    }, 

    show: (req, res) => {
        var sql = `SELECT * FROM tm_pasars WHERE id = '${req.params.id}' ORDER BY nm_pasar`
        conn.query(sql, (err, result) => {
            if (result == false) {
                res.send('Data tidak ditemukan !')
            } else {
                res.send(result)
            }
        })
    },

    /** Search */
    searchByName: (req, res) => {
        var sql = `SELECT * FROM tm_pasars WHERE id = '${req.params.id}' ORDER BY nm_pasar`
        conn.query(sql, (err, result) => {
            if (result == false) {
                res.send('Data tidak ditemukan !')
            } else {
                res.send(result)
            }
        })
    }
}