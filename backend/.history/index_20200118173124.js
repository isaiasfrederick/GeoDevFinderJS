const express = require('express');
const mongoose = require('mongose');

const app = express();

mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTipology: true
});

app.use(express.json());

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: "Hello Omnistack!" });
});

app.listen(3333);