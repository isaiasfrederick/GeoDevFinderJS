const { Router } = require('express');
const DevController = require('./controllers/DevController');
const axios = require('axios');
const Dev = require('./models/Dev');

routes = Router();

routes.post('/devs', (request, response) => {
    return response.send('Saida do POST');
});

routes.gest('/devs', (request, response) => {
    return response.send('Saida do POST');
});

module.exports = routes;