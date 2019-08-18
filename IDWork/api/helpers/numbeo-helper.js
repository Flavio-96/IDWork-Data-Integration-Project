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
      description: 'Output all info available on numbeo about the selected city',
    },
  },


  fn: async function ({city,country}) {
    const numbeo = require(`@wrappers/numbeo_wrapper`);
    let numbeo_indices = await numbeo.getIndicesByLocation(city, country);
    // let numbeo_prices = await numbeo.getPricesByLocation(city, country);
    
    // return {...numbeo_indices,...numbeo_prices};
    return numbeo_indices;
  }


};

