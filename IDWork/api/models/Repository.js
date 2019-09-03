module.exports = {

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    },



    findByKeyword: async (category) => {

        const util = require('util');
        const redis = sails.getDatastore('cache');

        var key = `repository:${category.replace(/ /g, '')}`;

        var repositories;

        let value = await redis.leaseConnection(async (db) => {
            let found = await (util.promisify(db.get).bind(db))(key);

            if (found === null) {
                repositories = await sails.helpers.globalScheme.repositoryInterface.with({
                    keyword: category,
                });

                let oggettoJSON = { 0: repositories };

                let expiresIn = 1000 * 60 * 60; //One hour in milliseconds

                // Convert `expiresIn` (which is expressed in milliseconds) to seconds,
                // because unlike JavaScript, Redis likes to work with whole entire seconds.
                let ttlInSeconds = Math.ceil(expiresIn / 1000);

                await (util.promisify(db.setex).bind(db))(key, ttlInSeconds, JSON.stringify(oggettoJSON));
            } else {
                //get repository from cache and parse the string into JSON
                repositories = JSON.parse(await (util.promisify(db.get).bind(db))(key));

                //take the array
                repositories = repositories[0];
            }
        });
        return repositories;
    }
}