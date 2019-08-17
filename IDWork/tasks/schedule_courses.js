module.exports = {
    run : async function(){
        sails.log('Update IDWork "udacity" collection');

        await sails.helpers.database.udacityDbUtility(bootstrapUdacityLastRunInfoPath);
    }
};