/**
 * City.js
 * @description :: A model definition that describe an important city in the USA
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    name: {
      type: 'string',
      required: true,
      example: 'Austin'
    },

    country: {
      type: 'string',
      required: true,
      example: 'TX'
    },

    quality_of_life_index: {
      type: 'string'
    },

    rent_index: {
      type: 'string'
    },

    crime_index: {
      type: 'string'
    },

    health_care_index: {
      type: 'string'
    },

    transportation_price: {
      type: 'string'
    },

    restaurants_price: {
      type: 'string'
    },

    apartment_single_center: {
      type: 'string'
    },

    apartment_single_suburbs: {
      type: 'string'
    },

    apartment_multiple_center: {
      type: 'string'
    },

    bills_avg_cost: {
      type: 'string'
    },

    internet_cost: {
      type: 'string'
    },

    average_salary_NU: {
      type: 'string'
    },

    population: {
      type: 'string'
    },

    average_salary_USN: {
      type: 'string'
    },

    temperature: {
      type: 'string'
    },

    median_age: {
      type: 'string'
    },

    median_home_price: {
      type: 'string'
    },

    average_annual_rainfalls: {
      type: 'string'
    },

    unemployment_rate: {
      type: 'string'
    },

    median_monthly_rate: {
      type: 'string'
    },

    average_commute_time: {
      type: 'string'
    },

    whats_like: {
      type: 'string'
    },

    cost_of_living: {
      type: 'string'
    },

    weather: {
      type: 'string'
    },

    commuting: {
      type: 'string'
    },

    who_lives: {
      type: 'string'
    },

    what_to_do: {
      type: 'string'
    },
  },

  findByPlace: async (place) => {

    const util = require('util');
    const redis = sails.getDatastore('cache');

    var key = `city:${place}`;

    var city;

    let value = await redis.leaseConnection(async (db) => {
      let found = await (util.promisify(db.get).bind(db))(key);

      if (found === null) {
        let city_name = place.split(", ")[0];
        city = await City.find({ name: city_name });

        let oggettoJSON = { 0: city };

        let expiresIn = 1000 * 60 * 60 * 24; //One day in milliseconds

        // Convert `expiresIn` (which is expressed in milliseconds) to seconds,
        // because unlike JavaScript, Redis likes to work with whole entire seconds.
        let ttlInSeconds = Math.ceil(expiresIn / 1000);

        await (util.promisify(db.setex).bind(db))(key, ttlInSeconds, JSON.stringify(oggettoJSON));

      } else {
        //get articles from cache and parse the string into JSON
        city = JSON.parse(await (util.promisify(db.get).bind(db))(key));

        //take the array
        city = city[0];
      }
    });
    return city;
  },

  datastore: 'mongodb',

};

