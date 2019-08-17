module.exports = {
    run : async (bootstrapUdacityLastRunInfoPath) => {
        sails.log('Update IDWork "udacity" collection');
        return new Promise((resolve, reject)=>{
            sails.helpers.database.udacityDbUtility(bootstrapUdacityLastRunInfoPath).then((result)=>{
                resolve(result);
            })
            .catch((err)=>{
                reject(err);
            })    
        })
    }
};