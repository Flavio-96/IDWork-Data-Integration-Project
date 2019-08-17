/**
 * Model settings
 */

module.exports.models = {
  datastore: 'mongodb',
  // schema: true,


  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * > Note that, when running in a production environment, this will be      *
  * > automatically set to `migrate: 'safe'`, no matter what you configure   *
  * > here.  This is a failsafe to prevent Sails from accidentally running   *
  * > auto-migrations on your production database.                           *
  *                                                                          *
  ***************************************************************************/

  migrate: 'alter',


  /***************************************************************************
  *                                                                          *
  * Base attributes that are included in all of your models by default.      *
  *                                                                          *
  ***************************************************************************/

  attributes: {
    id: { type: 'string', columnName: '_id',},
  },


  /******************************************************************************
  *                                                                             *
  * The set of DEKs (data encryption keys) for at-rest encryption.              *
  * i.e. when encrypting/decrypting data for attributes with `encrypt: true`.   *
  *                                                                             *
  ******************************************************************************/

  dataEncryptionKeys: {
    default: 'e/6LXCEG7ZrpqwOzmaSBAJXFDh+VgcluJkiUjPAKGNU='
  },


  /***************************************************************************
  *                                                                          *
  * Whether or not implicit records for associations should be cleaned up    *
  * automatically using the built-in polyfill.  This is especially useful    *
  * during development with sails-disk.                                      *
  *                                                                          *
  ***************************************************************************/

  cascadeOnDestroy: true


};
