const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', SearchController.index);
routes.get('/devs', DevController.store);

routes.get('/search');

module.exports = routes;