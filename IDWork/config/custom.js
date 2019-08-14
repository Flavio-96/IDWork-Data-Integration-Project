/**
 * Custom configuration
 *
 * One-off settings specific to your application.
 *
 */

const lineReader = require('line-reader');
const csv = require('csv-parser');
const fs = require('fs');

var categories_list = new Array();
lineReader.eachLine('dictionaries/technologies.csv', function(line) {
  categories_list.push(line.toLowerCase());
});

var places_list = new Array();
lineReader.eachLine('dictionaries/cities.csv', function(line) {
  places_list.push(line.split(',')[0].toLowerCase());
});

var abbreviations_map = {};
fs.createReadStream('dictionaries/state_abbreviations.csv')
  .pipe(csv({headers:false}))
  .on('data', (row) => {
    abbreviations_map[row[0]] = row[1];    
  });

var cities_countries_list = new Array();
lineReader.eachLine('dictionaries/cities.csv', function(line) {
  split = line.split(','); 
  city = split[0];
  country = split[1].trim();
  cities_countries_list.push({city: city, country:country})
});

module.exports.custom = {
  categories: categories_list,
  places: places_list,
  abbreviations: abbreviations_map,
  cities_countries: cities_countries_list,
  wrappers_folder: '../wrappers/'
};
