module.exports.crontab = {
    
crons:function(){
    var jsonArray = [];

    // add one function for every schedule needed
    jsonArray.push({interval:`0 0 1 * *`,method:`schedule_places`});
    jsonArray.push({interval:`0 */24 * * *`,method:`schedule_courses`});

    return jsonArray;
},

schedule_places: async function(){
    const path = require('path');

    let placesPath = '.tmp/bootstrap-DB-places-info.json';
    var bootstrapPlacesLastRunInfoPath = path.resolve(sails.config.appPath, placesPath);
    await require(`../tasks/schedule_places.js`)
    .run(bootstrapPlacesLastRunInfoPath)
        .then((res)=>{
            sails.log(`Places correctly update`)
        }).catch((err)=>{
            sails.log.error(`Problem in update places`)
        })
},

schedule_courses: async function(){
    const path = require('path');

    let udacityPath = '.tmp/bootstrap-DB-udacity-info.json';
    var bootstrapUdacityLastRunInfoPath = path.resolve(sails.config.appPath, udacityPath);
    await require(`../tasks/schedule_courses.js`)
    .run(bootstrapUdacityLastRunInfoPath)
        .then((res)=>{
            sails.log(`Udacity correctly update`)
        }).catch((err)=>{
            sails.log.error(`Problem in update udacity`)
        })
}

};
    