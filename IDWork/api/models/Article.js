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

        var key = `article:${category.replace(/ /g, '')}`;

        var articles;

        let value = await redis.leaseConnection(async (db) => {
            let found = await (util.promisify(db.get).bind(db))(key);

            if (found === null) {
                articles = await sails.helpers.globalScheme.articleInterface.with({
                    keyword: category,
                });

                let oggettoJSON = { 0: articles };

                let expiresIn = 1000 * 60 * 60 * 24; //One day in milliseconds

                // Convert `expiresIn` (which is expressed in milliseconds) to seconds,
                // because unlike JavaScript, Redis likes to work with whole entire seconds.
                let ttlInSeconds = Math.ceil(expiresIn / 1000);

                await (util.promisify(db.setex).bind(db))(key, ttlInSeconds, JSON.stringify(oggettoJSON));
            } else {
                //get articles from cache and parse the string into JSON
                articles = JSON.parse(await (util.promisify(db.get).bind(db))(key));

                //take the array
                articles = articles[0];
            }
        });
        return articles;
    }
}