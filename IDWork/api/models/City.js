/**
 * City.js
 * @description :: A model definition that represents the main city in the USA
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    name: {
      type: 'string',
      required: true,
      unique: true,
      example: 'Austin'
    },

    country: {
      type: 'string',
      required: true,
      example: 'TX'
    },

    quality_of_life_index: {
      type: 'string',
      required: true
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

};

