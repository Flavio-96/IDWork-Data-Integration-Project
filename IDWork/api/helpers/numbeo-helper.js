module.exports = {


  friendlyName: 'Numbeo helper',


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
      description: 'Output all info on the selected city available in MongoDB',
    },
  },


  fn: async function ({city,country}) {
    wrappers_folder = sails.config.custom.wrappers_folfer;

    const numbeo = require(`${wrappers_folder}numbeo_wrapper`);
    let numbeo_result = await numbeo.getIndicesByLocation(city, country);

    return numbeo_result;
  }


};

