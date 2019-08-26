/**
 * RecentSearches.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

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

  add: async(search) => {
    const util = require('util');
    const redis = sails.getDatastore('cache');

    const key = `recentsearches`;

    var value = await redis.leaseConnection(async (db) => {
      let listLength = await (util.promisify(db.llen).bind(db))(key);

      let lastAdded =  await (util.promisify(db.lrange).bind(db))(key, 0, 0);

      let searchStringfied = JSON.stringify(search);

      if(searchStringfied != lastAdded){
        
        if(listLength == 10){
          await (util.promisify(db.rpop).bind(db))(key);
        }

        await (util.promisify(db.lpush).bind(db))(key, searchStringfied);
      }
    });

  },

  get: async() => {
    const util = require('util');
    const redis = sails.getDatastore('cache');

    const key = `recentsearches`;

    var convertedSearches = [];

    var value = await redis.leaseConnection(async (db) => {
      let recentSearches = await (util.promisify(db.lrange).bind(db))(key, 0, 9);
      
      recentSearches.forEach((search) => {
        convertedSearches.push(JSON.parse(search));
      });
    });

    return convertedSearches;
  }

};

