/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {
  const path = require('path');
  const fs = require('fs');
  const dateDiff = require('date-diff');

  var bootstrapLastRunInfoPath = path.resolve(sails.config.appPath, '.tmp/bootstrap-DBinfo.json');
  
  if (fs.existsSync(bootstrapLastRunInfoPath)) {
    data = fs.readFileSync(bootstrapLastRunInfoPath);
    
    let dataObj = JSON.parse(data);
    let currentTime = Date.now();

    let diff = new dateDiff(currentTime, dataObj['updateTime']);
    days = diff.days();
    sails.log(`DB was created ${days} days ago ...`);
    console.log()
    // The data are up to date
    if (days < 30){
      sails.log(`Information up-to-date`);
      return;
    }else{
      sails.log(`Information out-of-date`);
    }
  }

  sails.log('Inizialize IDWork db with "city" collection');

  // Remove city date if any
  await sails.models["city"].destroy({});

  // Get data on cities
  list = sails.config.custom.cities_countries;
  for(ind in list){
    element = list[ind];
    city = element.city
    country = element.country
    sails.log(`adding info about ${city} ...`);
    numbeo_result = await sails.helpers.numbeoHelper.with({
      city: city,
      country: country
    });

    // numbeo_prices = new Array();
    // for(x in numbeo_result){
    //   if(!numbeo_result[x])
    //     console.log("Problema con i prezzi di "+city);
        
    //   numbeo_prices.push(numbeo_result[x].price)

    //   if(x==7)
    //     break;
    // }

    usn_result = await sails.helpers.usnHelper.with({
      city: city,
      country: country
    });

    await City.create({
      name: city,
      country: country,
      quality_of_life_index: numbeo_result.quality_of_life_index ,
      rent_index: numbeo_result.rent_index,
      crime_index: numbeo_result.crime_index,
      health_care_index: numbeo_result.health_care_index,
      // transportation_price: numbeo_prices[0],
      // restaurants_price: numbeo_prices[1],
      // apartment_single_center: numbeo_prices[2],
      // apartment_single_suburbs: numbeo_prices[3],
      // apartment_multiple_center: numbeo_prices[4],
      // bills_avg_cost: numbeo_prices[5],
      // internet_cost: numbeo_prices[6],
      // average_salary_NU: numbeo_prices[7],
      population: usn_result.population,
      average_salary_USN: usn_result.average_annual_salary,
      temperature: usn_result.temps,
      median_age: usn_result.median_age,
      median_home_price: usn_result.median_home_price,
      average_annual_rainfall: usn_result.average_annual_rainfalls,
      unemployment_rate: usn_result.unemployment_rate,
      median_monthly_rate: usn_result.median_monthly_rate,
      average_commute_time: usn_result.average_commute_time,
      whats_like: usn_result.whats_like,
      cost_of_living: usn_result.cost_of_living,
      weather: usn_result.weather,
      commuting: usn_result.commuting,
      who_lives: usn_result.who_lives,
      what_to_do: usn_result.what_to_do
    })
  }
  let currentTime = Date.now();
  let newObj = {updateTime: currentTime};
  newJson = JSON.stringify(newObj);
  fs.writeFile(bootstrapLastRunInfoPath, newJson, 'utf8',  function(err) {
    if (err)
      sails.log.error(`Error saving file DB-bootstrap`)    
    else{
      sails.log(`File created`);
    }
  });
};
