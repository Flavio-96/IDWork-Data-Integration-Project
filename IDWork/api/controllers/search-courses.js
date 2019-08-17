module.exports = {


  friendlyName: 'Search courses',


  description: 'Return all courses on coursera and audacity related to the keyword searched by the user (Argument/Skill)',


  inputs: {
    keyword: {
      description: 'The keyword (Argument/Skill) given as input',
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      description: 'Output all courses related to the keyword (Argument/Skill)',
    },
  },


  fn: async function ({keyword}) {
 
    if(!sails.config.custom.categories.includes(keyword.toLowerCase()))
      throw 'badParams';    

    coursera_result = await sails.helpers.courseraHelper.with({
      keyword: keyword
    });
    
    udacity_result = [];

    // TODO Udacity
    // udacity_result = await sails.helpers.udacityHelper();
    // return find from audacity
    return {
      coursera_result: coursera_result,
      udacity_result: udacity_result
    }
  }
};