const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const fs = require('fs');

const app = express();

fs.readFile('~/uberdev.cfg', 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    console.log(data);
    str_conn = data;
});

//str_conn = 'mongodb+srv://isaias:belinha@cluster0-rur3m.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(str_conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);