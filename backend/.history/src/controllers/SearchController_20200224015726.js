const Dev = require('../models/Dev');

module.exports = {
    async index(request, response) {
        // foi
        return response.json({ devs: [] });
    }
}