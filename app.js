/**
 * Disini tidak mengimport body-parser karna untuk express js
 * versi 4.16.0 body-parser sudah include kedalamnya
 */

const express = require('express'); // express sebagai framework dari node js

const app = express();
const { port } = require('./config');
const {
    jenisLapakRoute,
    jenisUsahaRoute,
    pedagangRoute,
    pedagangAlamatRoute, 
    pasarRoute
} = require('./routes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Selamat Datang di API Pasar, dibuat menggunakan nodejs dan database MySQL.');
});

app.use('/master-jenis', [jenisUsahaRoute, jenisLapakRoute]);
app.use('/master-pedagang', [pedagangRoute, pedagangAlamatRoute]);
app.use('/master-pasar', pasarRoute);

app.listen(port, () => console.log('Node is running, API active at port: ' + port));