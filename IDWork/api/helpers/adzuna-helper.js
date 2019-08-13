module.exports = {


  friendlyName: 'Adzuna helper',


  description: "Adzuna helper that retrieves job's information from adzuna site based on category and (optional) place given",


  inputs: {
    category: {
      description: 'The category selected by the user',
      type: 'string',
      required: true
    },
    place: {
      description: 'The place selected by the user',
      type: 'string'
    }
  },


  exits: {

    success: {
      description: 'Jobs correctly retrieved',
    },

  },


  fn: async function ({category,place}) {
    wrappers_folder = sails.config.custom.wrappers_folder;

    const adzuna = require(`${wrappers_folder}adzuna_wrapper`);
    let adzuna_result = await adzuna.getJobsByLocation(category, place);

    return adzuna_result;
  }


};

