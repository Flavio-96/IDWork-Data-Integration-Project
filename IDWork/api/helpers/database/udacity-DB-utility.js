module.exports = {


  friendlyName: 'Udacity db utility',


  description: 'Utility that save on db data about courses found on udacity',


  inputs: {
    bootstrapUdacityLastRunInfoPath: {
      description: 'The path in which the metadata on the courses are stored',
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function ({bootstrapUdacityLastRunInfoPath}) {
    const fs = require('fs');
    
    // Remove udacity date if any
    await sails.models["udacity"].destroy({});

    udacity_result = await sails.helpers.udacityHelper();

    for(ind in udacity_result){
      course = udacity_result[ind];
      if(course.title === "")
        continue;
        
      await Udacity.create({
        title: course.title,
        description: course.description,
        difficulty: course.difficulty,
        url_image: course.url_image,
        url: course.url,
        skills: course.skills
      });
    }
    let currentTime = Date.now();
    let newObj = {updateTime: currentTime};
    newJson = JSON.stringify(newObj);
    fs.writeFile(bootstrapUdacityLastRunInfoPath, newJson, 'utf8',  function(err) {
      if (err)
        sails.log.error(`Error saving file DB-bootstrap`);
      else{
        sails.log(`Metadata file for udacity created`);
      }
    });
  }


};

