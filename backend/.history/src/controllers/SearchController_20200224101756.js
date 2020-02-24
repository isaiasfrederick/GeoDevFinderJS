const Dev = require('../models/Dev');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: { $in: techsArray },
        });

        console.log(request.query);
        return response.json({ devs: [] });
    }
}