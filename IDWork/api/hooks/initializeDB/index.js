/**
 * initializeDB hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 *
 */

module.exports = function defineInitializeDbHook(sails) {

  return {

    /**
     * Runs when this Sails app loads/lifts.
     */
    initialize: async function() {

        sails.on('hook:orm:loaded', async function() {

        sails.log.info('Initializing custom hook (`initializeDB`)');
        
        numbeo_result = await sails.helpers.numbeoHelper.with({
          city: 'Austin',
          country: 'Texas'
        });
        
        await City.create({
          name: numbeo_result.city,
          country: numbeo_result.country,
          quality_of_life_index: numbeo_result.quality_of_life_index 
        })
      })
    }
  };

};
