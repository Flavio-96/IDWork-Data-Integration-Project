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

module.exports.custom = {
  categories: categories_list,
  places: places_list,
  abbreviations: abbreviations_map,
  wrappers_folder: '../wrappers/'
};
