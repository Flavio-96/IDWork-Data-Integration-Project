module.exports = {
    run : async (bootstrapPlacesLastRunInfoPath) => {
        sails.log('Update IDWork "city" collection');
        return new Promise((resolve, reject)=>{
            sails.helpers.database.placeDbUtility(bootstrapPlacesLastRunInfoPath).then((result)=>{
                resolve(result);
            })
            .catch((err)=>{
                reject(err);
            })    
        })
    }
};