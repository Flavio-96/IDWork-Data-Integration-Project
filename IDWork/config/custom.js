/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

const lineReader = require('line-reader');

var categories_list = new Array();
lineReader.eachLine('dictionaries/technologies.csv', function(line) {
  categories_list.push(line.toLowerCase());
});

var places_list = new Array();
lineReader.eachLine('dictionaries/cities.csv', function(line) {
  places_list.push(line.split(',')[0].toLowerCase());
});

module.exports.custom = {
  categories: categories_list,
  places: places_list,
  wrappers_folfer: '../wrappers/'
};
