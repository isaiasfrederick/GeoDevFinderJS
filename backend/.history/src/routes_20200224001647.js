const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.get('/devs', DevController.store);

routes.get('/search');

module.exports = routes;