module.exports = {


  friendlyName: 'Coursera helper',


  description: 'Return courses from Coursera',


  inputs: {
    keyword: {
      description: 'argument',
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'Output all the courses inherent to the keyword',
    },
  },


  fn: async function ({keyword}) {
    const coursera = require('@wrappers/coursera_wrapper');
    let coursera_courses = await coursera.getCourses(keyword);

    return coursera_courses;
  }
};

