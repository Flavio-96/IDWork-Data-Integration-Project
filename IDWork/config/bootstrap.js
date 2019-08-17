/**
 * A function that runs just before your Sails app gets lifted.
 */

module.exports.bootstrap = async function() {
  const path = require('path');
  const dateDiff = require('date-diff');
  const fs = require('fs');

  let placesPath = '.tmp/bootstrap-DB-places-info.json';
  var bootstrapPlacesLastRunInfoPath = path.resolve(sails.config.appPath, placesPath);
  
  var placesUpdate = true;
  if (fs.existsSync(bootstrapPlacesLastRunInfoPath)) {
    data = fs.readFileSync(bootstrapPlacesLastRunInfoPath);
    
    let dataObj = JSON.parse(data);
    let currentTime = Date.now();

    let diff = new dateDiff(currentTime, dataObj['updateTime']);
    let days = diff.days();
    let hours = diff.hours();
    sails.log(`Db for places DB was updated last time ${days} days and ${hours} hours ago ...`);
    // The data are up to date
    if (days < 30){
      sails.log(`Information up-to-date, no need for update!`);
      placesUpdate = false;
    }else{
      sails.log(`Information out-of-date, need to update informations!`);
    }
  }
  if (placesUpdate){
    sails.log('Inizialize IDWork db with "city" collection');

    await sails.helpers.database.placeDbUtility(bootstrapPlacesLastRunInfoPath);
  }
  
  // output blank line
  console.log()

  let udacityPath = '.tmp/bootstrap-DB-udacity-info.json';
  var bootstrapUdacityLastRunInfoPath = path.resolve(sails.config.appPath, udacityPath);
  
  var udacityUpdate = true;
  if (fs.existsSync(bootstrapUdacityLastRunInfoPath)) {
    data = fs.readFileSync(bootstrapUdacityLastRunInfoPath);
    
    let dataObj = JSON.parse(data);
    let currentTime = Date.now();

    let diff = new dateDiff(currentTime, dataObj['updateTime']);
    let hours = diff.hours();
    sails.log(`DB for udacity was updated last time ${hours} hours ago ...`);
    // The data are up to date
    if (hours < 24){
      sails.log(`Information up-to-date, no need for update!`);
      udacityUpdate = false;
    }else{
      sails.log(`Information out-of-date, need to update informations!`);
    }
  }
  if(udacityUpdate){
    sails.log('Inizialize IDWork db with "udacity" collection');

    await sails.helpers.database.udacityDbUtility(bootstrapUdacityLastRunInfoPath);
  }
  
  // output blank line
  console.log()

  // Add schedules for update DB
  _.extend(sails.hooks.http.app.locals, sails.config.http.locals);

  var schedule = require(`node-schedule`);
  sails.config.crontab.crons().forEach(function(item){
    schedule.scheduleJob(item.interval,sails.config.crontab[item.method]);
    sails.log(`Schedule "${item.method}" activated`);    
  });

  sails.log(`End bootstrap!`);    
};
