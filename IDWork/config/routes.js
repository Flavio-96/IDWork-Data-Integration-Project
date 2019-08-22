/**
 * Route Mappings
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 */

module.exports.routes = {

  'GET /': { action: 'homepage' },
  'GET /search': { action: 'search' },
  'GET /job': {action: 'job'}
};
