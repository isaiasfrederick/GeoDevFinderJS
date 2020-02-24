const Dev = require('../models/Dev');

module.exports = {
    async index(request, response) {
        return response.json({ devs: [] });
    }
}