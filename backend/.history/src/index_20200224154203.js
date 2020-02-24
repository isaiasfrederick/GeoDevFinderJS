const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const fs = require('fs');

const app = express();

//str_conn = 'mongodb+srv://isaias:belinha@cluster0-rur3m.mongodb.net/test?retryWrites=true&w=majority';

fs.readFile('/home/isaias/uberdev.cfg', 'utf8', function(err, data) {
    if (!err) {
        console.log("Data: " + data);
        str_conn = data;
    } else {
        console.log(err);
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