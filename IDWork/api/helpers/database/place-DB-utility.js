module.exports = {


  friendlyName: 'Place scheduler',


  description: 'Utility that save on db data about courses found on numbeo and u.s.news',


  inputs: {
    bootstrapPlacesLastRunInfoPath: {
      description: 'The path in which the metadata on the places are stored',
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'Collection correctly stored',
    },

  },


  fn: async function ({bootstrapPlacesLastRunInfoPath}) {
    const fs = require('fs');

    // Remove city date if any
    await sails.models["city"].destroy({});

    // Get data on cities
    list = sails.config.custom.cities_countries;
    for(ind in list){
      element = list[ind];
      city = element.city
      country = element.country
      sails.log(`Adding info about ${city} ...`);
      numbeo_result = await sails.helpers.numbeoHelper.with({
        city: city,
        country: country
      });

      usn_result = await sails.helpers.usnHelper.with({
        city: city,
        country: country
      });

      await City.create({
        name: city.toLowerCase(),
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
    fs.writeFile(bootstrapPlacesLastRunInfoPath, newJson, 'utf8',  function(err) {
      if (err)
        sails.log.error(`Error saving file DB-bootstrap`);
      else{
        sails.log(`Metadata file for places created`);
      }
    });
  }


};

