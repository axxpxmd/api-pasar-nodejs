const conn = require('../database');

module.exports = {
    index: (req, res) => {
        var sql = 'SELECT * FROM tm_jenis_usaha ORDER BY nm_kategori ASC'
        conn.query(sql, (err, results) => {
            if (err) throw err
            res.send(results)
        })
    }, 
    show: (req, res) => {
        var sql = `SELECT * FROM tm_jenis_usaha WHERE id = '${req.params.id}' ORDER BY nm_kategori ASC`
        conn.query(sql, (err, result) => {
            if (result == false) {
                res.send('Data tidak ditemukan')
            } else {
                res.send(result)
            }  
        })
    }
}