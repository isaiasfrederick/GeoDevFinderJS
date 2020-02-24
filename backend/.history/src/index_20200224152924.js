const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const fs = require('fs');

const app = express();

str_conn = '';

fs.readFileSync('/home/isaias/uberdev.cfg', 'utf8', function(err, data) {
    if (err) throw err;
    console.log("Data: " + data);
    try {
        str_conn = data;
    } catch (e) {

    }
});

console.log('\n\nString conexao: ' + str_conn + '\n\n');

mongoose.connect(str_conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);