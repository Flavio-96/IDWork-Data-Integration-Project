module.exports = {


  friendlyName: 'Simply hired helper',


  description: "Simply hired helper that retrieves min, avg and max salary based on category and (optional) place given",


  inputs: {
    category: {
      description: 'The category selected related to the job found on adzuna',
      type: 'string',
      required: true
    },
    place: {
      description: 'The place selected related to the job found on adzuna',
      type: 'string'
    }
 },


  exits: {

    success: {
      description: 'Salaries correctly retrieved',
    },

  },


  fn: async function ({category,place}) {
    const simplyhired = require(`@wrappers/simplyhired_wrapper`);
    let simplyhired_result = await simplyhired.getSalaries(category, place); 
    
    return simplyhired_result;
  }


};

