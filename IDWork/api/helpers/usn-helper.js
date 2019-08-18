module.exports = {


  friendlyName: 'U.S.News helper',


  description: 'Return all the available info related to the selected city and country',


  inputs: {
    city: {
      description: 'The city relative to the job selected by the user',
      type: 'string',
      required: true
    },
    country: {
      description: 'The country relative to the job selected by the user',
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'Output all info available on U.S.News about the selected city',
    },

  },

  fn: async function ({city,country}) {
    usn_country = sails.config.custom.abbreviations[country];

    const usnews = require(`@wrappers/usnews_wrapper`);
    let usnews_result = await usnews.getInfos(city, usn_country);

    return usnews_result;
  }


};

