const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const fs = require('fs');

const app = express();

var str_conn = fs.readFileSync('/home/isaias/uberdev.cfg', 'utf8', function(err, data) {
    if (!err) {
        console.log("Data: " + data);
    } else {
        console.log(err);
    }
});

console.log('\n\nString conexao: ' + str_conn + '\n\n');
console.log('\nTipo: ' + typeof str_conn);

if (str_conn != '') {
    mongoose.connect(str_conn, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

app.use(express.json());
app.use(routes);

app.listen(3333);