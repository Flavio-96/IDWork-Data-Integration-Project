module.exports.crontab = {
    
crons:function(){
    var jsonArray = [];

    // add one function for every schedule needed
    jsonArray.push({interval:`0 */24 * * *`,method:`schedule_places`});
    jsonArray.push({interval:`*/10 */1 * * * *`,method:`schedule_courses`});

    return jsonArray;
},

schedule_places: function(){
    const schedulePlaces = require(`../tasks/schedule_places.js`);
    schedulePlaces.run().then((res)=>{
        sails.log(`Places correctly update`)
    }).catch((err)=>{
        sails.log.error(`Problem in update places`)
    })
},

schedule_courses: function(){
    require(`../tasks/schedule_courses.js`).run();
}

};
    