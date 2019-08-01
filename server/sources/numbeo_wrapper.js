//dependencies
const axios = require('axios');

//api id and key stored as environment variables
const NUMBEO_APP_KEY = process.env.NUMBEO_APP_KEY;

// baseURL of the website. 
const baseURL = 'https://www.numbeo.com/api/indices';

module.exports.getIndicesByLocation = getIndicesByLocation;

//function that allows you to find indices for a city by its latitude and longitude
async function getIndicesByLocation(longitude, latitude) {

    let params = {
        'api_key': NUMBEO_APP_KEY,
        'query': `${longitude},${latitude}`
    };

    try {
        let response = await axios.get(baseURL, { params: params });
        if (response.status == 200) {
            
            let {name,quality_of_life_index, rent_index, crime_index, health_care_index} = response.data;

            let indices = {
                city: name,
                quality_of_life_index: quality_of_life_index,
                rent_index: rent_index,
                crime_index: crime_index,
                health_care_index: health_care_index,
                timestamp: + new Date()
            }

            console.log(indices);
            return indices;
        }
    } catch (err) {

    }
}