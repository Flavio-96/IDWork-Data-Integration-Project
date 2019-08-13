/**
 * Route Mappings
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 */

module.exports.routes = {

  // 'GET /': { view: 'pages/homepage' },
  'GET /jobs':   { action: 'search-jobs' },
  'GET /city':   { action: 'city-info' },


};
