const mysql = require('mysql');
const { host, user, password, database } = require('../config');

const conn = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
});

conn.connect(function (err) {
    if (err) {
        throw err
    } else {
        console.log('connected to database mysql')   
    }
});

module.exports = conn;