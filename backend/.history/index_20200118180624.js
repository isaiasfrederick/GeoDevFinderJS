const express = require('express');
const mongoose = require('mongoose');

const app = express();

str_conn = 'mongodb+srv://isaias:belinha@cluster0-rur3m.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(str_conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.listen(3333);