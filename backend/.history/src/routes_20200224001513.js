const { Router } = require('express');
const DevController = require('./controllers/DevController');
const axios = require('axios');
const Dev = require('./models/Dev');

routes = Router();

module.exports = routes;