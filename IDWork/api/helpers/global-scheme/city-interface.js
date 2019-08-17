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

  // TODO: use this -> sails.config.appPath
  fn: async function ({city,country}) {
    wrappers_folder = sails.config.custom.wrappers_folder;

    const numbeo = require(`../${wrappers_folder}numbeo_wrapper`);
    let numbeo_indices = await numbeo.getIndicesByLocation(city, country);
    
    usn_country = sails.config.custom.abbreviations[country];
    const usnews = require(`../${wrappers_folder}usnews_wrapper`);
    let usnews_result = await usnews.getInfos(city, usn_country);
    
    let global_city = {... numbeo_indices, ...usnews_result};

    return global_city;
  }


};

