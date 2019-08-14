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
    wrappers_folder = sails.config.custom.wrappers_folder;

    const coursera = require(`${wrappers_folder}coursera_wrapper`);
    let coursera_courses = await coursera.getCourses(keyword);

    return coursera_courses;
  }
};

