/**
 * Job.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    title: {
      type: 'string',
      required: true
    },

    job_category: {
      type: 'string'
    },

    category: {
      type: 'string'
    },

    company_name: {
      type: 'string'
    },

    small_description: {
      type: 'string'
    },

    full_description: {
      type: 'string'
    },

    city: {
      type: 'string'
    },

    nation: {
      type: 'string'
    },

    latitude: {
      type: 'string'
    },

    longitude: {
      type: 'string'
    },

    salary: {
      type: 'string'
    },

    url: {
      type: 'string'
    },

    min_salary: {
      type: 'string'
    },

    avg_salary: {
      type: 'string'
    },

    max_salaries: {
      type: 'string'
    },

  },

  findByCategoryAndPlace: async (category, place) => {

    const util = require('util');
    const redis = sails.getDatastore('cache');

    var key = `job:${place.replace(/ /g, '')}:${category.replace(/ /g, '')}`;

    var jobs;

    let value = await redis.leaseConnection(async (db) => {
      let found = await (util.promisify(db.get).bind(db))(key);

      if (found === null) {
        jobs = await sails.helpers.globalScheme.jobInterface.with({
          keyword: category,
          city: place
        });

        let oggettoJSON = { 0: jobs };

        let expiresIn = 1000 * 60 * 60; //One hour in milliseconds

        // Convert `expiresIn` (which is expressed in milliseconds) to seconds,
        // because unlike JavaScript, Redis likes to work with whole entire seconds.
        let ttlInSeconds = Math.ceil(expiresIn / 1000);

        await (util.promisify(db.setex).bind(db))(key, ttlInSeconds, JSON.stringify(oggettoJSON));

      } else {
        //get articles from cache and parse the string into JSON
        jobs = JSON.parse(await (util.promisify(db.get).bind(db))(key));

        //take the array
        jobs = jobs[0];
      }
    });
    return jobs;
  },

  datastore: 'mongodb',
};

