const express = require('express');
const mongoose = require('mongoose');

const app = express();

str_conn = 'mongodb+srv://isaias:belinha@cluster0-rur3m.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(str_conn, {
    useNewUrlParser: true,
    useUnifiedTipology: true
});

app.use(express.json());

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: "Hello Omnistack!" });
});

app.listen(3333);