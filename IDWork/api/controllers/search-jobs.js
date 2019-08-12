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
    if(!sails.config.custom.categories.includes(category.toLowerCase()))
      throw 'badParams';

    if(place)
      if(!sails.config.custom.places.includes(place.toLowerCase()))
        throw 'badParams';
    

    adzuna_result = await sails.helpers.adzunaHelper.with({
      category: category,
      place: place
    });
    
    simplyhired_result = await sails.helpers.simplyHiredHelper.with({
      category: category,
      place: place
    });
    
    result = {...adzuna_result, ...simplyhired_result};

    return {
        result: result
      };

  }


};
