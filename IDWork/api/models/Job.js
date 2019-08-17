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
  datastore: 'mongodb',
};

