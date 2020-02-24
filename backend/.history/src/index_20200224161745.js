const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const fs = require('fs');

const app = express();

var str_conn = fs.readFileSync('/home/isaias/uberdev.cfg', 'utf8');
var cfg_json = JSON.parse(json)

console.log('\nString conexao: ' + str_conn);
console.log('Tipo: ' + typeof str_conn);

if (str_conn != '') {
    mongoose.connect(str_conn, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

app.use(express.json());
app.use(routes);

app.listen(3333);