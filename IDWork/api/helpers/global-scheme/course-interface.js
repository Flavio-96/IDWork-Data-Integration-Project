module.exports = {


  friendlyName: 'Course interface',


  description: 'Return courses find on Coursera (on the fly) and udacity (from datawarehouse)',


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


  fn: async function ({ keyword }) {
    
    const coursera = require(`@wrappers/coursera_wrapper`);

    let global_courses = [];

    let coursera_courses = await coursera.getCourses(keyword);

    if(coursera_courses != null){
      global_courses = global_courses.concat(coursera_courses);
    }

    // !!!! IMPORTANT: Update case insensitive research !!!!
    var udacity_courses = await Udacity.find({
      or: [
        { title: { contains: keyword } },
        { description: { contains: keyword } },
        { skills: { contains: keyword } }
      ]
    });

    if(udacity_courses != null){
      global_courses = global_courses.concat(udacity_courses);
    }

    return global_courses;
  }


};

