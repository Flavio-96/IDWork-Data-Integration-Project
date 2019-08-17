module.exports = {


  friendlyName: 'Udacity helper',


  description: 'Helper that retrieves all courses stored on udacity',


  inputs: {
    // No input
  },


  exits: {

    success: {
      description: 'All courses available on udacity are returned',
    },

  },


  fn: async function () {
    wrappers_folder = sails.config.custom.wrappers_folder;

    const udacity = require(`${wrappers_folder}udacity_wrapper`);
    let udacity_result = await udacity.getCourses();

    return udacity_result;
  }


};

