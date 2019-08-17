/**
 * Udacity.js
 *
 * @description :: A model definition that describe a course from audacity site
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    title: {
      type: 'string',
      required: true,
      example: 'Introduction to python programming'
    },

    subtitle: {
      type: 'string'
    },

    syllabus: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    difficulty: {
      type: 'string'
    },

    url_image: {
      type: 'string'
    },

    url: {
      type: 'string'
    },

    skills: { 
      type: 'json', 
      columnType: 'array' 
    },
  },
  datastore: 'mongodb',
};

