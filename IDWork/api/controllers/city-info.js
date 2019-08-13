module.exports = {


  friendlyName: 'City info',


  description: 'Store in Mongo all the info related the cities available on the site',


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
      responseType: 'view',
      viewTemplatePath: 'pages/homepage' //Bisogna mettere quella corretta che mi passa antonio
    },
    badParams: {
      description: 'One or many of the provided params does not match any word in dictionaries',
      responseType: 'bad-params'
    }
  },


  fn: async function ({city, country}) {
    result = await City.find()

    
    return {
      result: numbeo_result
    };
  }


};
