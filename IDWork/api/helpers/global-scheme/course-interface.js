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


  fn: async function ({keyword}) {
    wrappers_folder = sails.config.custom.wrappers_folder;


    const coursera = require(`../${wrappers_folder}coursera_wrapper`);
    let coursera_courses = await coursera.getCourses(keyword);

    var udacity_courses = await Udacity.find({
      or:[
        {title: { contains: keyword }},
        {description: { contains: keyword }},
        {skills: { contains: keyword }}
      ] 
    });
    
    let global_courses = coursera_courses.concat(udacity_courses);

    return global_courses;
  }


};
