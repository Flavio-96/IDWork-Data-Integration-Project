module.exports = {


  friendlyName: 'City interface',


  description: 'Return all the available info related to the selected city and country',


  inputs: {
    city: {
      description: 'The city relative to the job selected by the user',
      type: 'string',
      required: true
    },
    country: {
      description: 'The country relative to the job selected by the user',
      type: 'string'
    }
  },


  exits: {

    success: {
      description: 'Output all the available info on numbeo and u.s.news about the selected city joined together',
    },
  },

  fn: async function ({city,country}) {

    const numbeo = require(`@wrappers/numbeo_wrapper`);
    let numbeo_indices = await numbeo.getIndicesByLocation(city, country);
    
    usn_country = sails.config.custom.abbreviations[country.toUpperCase()];

    const usnews = require(`@wrappers/usnews_wrapper`);
    let usnews_result = await usnews.getInfos(city, usn_country);
    
    let global_city = {... numbeo_indices, ...usnews_result};

    return global_city;
  }


};

