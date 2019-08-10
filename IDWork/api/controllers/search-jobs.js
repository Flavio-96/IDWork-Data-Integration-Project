module.exports = {


  friendlyName: 'Jobs by category',


  description: 'Return all the jobs related a given category',


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
      responseType: 'view',
      viewTemplatePath: 'pages/homepage' //Bisogna mettere quella corretta che mi passa antonio
    },
    badParams: {
      description: 'One or many of the provided params does not match any word in dictionaries',
      responseType: 'bad-params'
    }
  },


  fn: async function ({category, place}) {
    console.log(sails.config.custom.places)
    if(!sails.config.custom.categories.includes(category.toLowerCase()))
      throw 'badParams';

    if(place)
      if(!sails.config.custom.places.includes(place.toLowerCase()))
        throw 'badParams';
    
    wrappers_folder = sails.config.custom.wrappers_folfer;
    const adzuna = require(wrappers_folder+'adzuna_wrapper');
    let adzuna_result = await adzuna.getJobsByLocation(category, place);
    
    const simplyhired = require(wrappers_folder+'simplyhired_wrapper');
    let simplyhired_result = await simplyhired.getSalaries(category, place);
    
    //Create new object with results together
    return {
        result: simplyhired_result // adzuna_result
      };

  }


};
