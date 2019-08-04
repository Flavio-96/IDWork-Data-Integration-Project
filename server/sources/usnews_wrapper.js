// dependencies
const cheerio = require('cheerio');
const axios = require('axios');

// baseURL of the website
const baseURL = "https://realestate.usnews.com/places";

module.exports.getInfos = getInfos;

async function getInfos(city, country) {

    try{
        let cityNoSpaces = city.replace(' ','-');
        let countryNoSpaces = country.replace(' ','-');
        
        let response = await axios.get(`${baseURL}/${countryNoSpaces}/${cityNoSpaces}?`);

        if(response.status == 200){
            const $ = cheerio.load(response.data);

            let population = $('[data-test-id=metropopulation]').text();
            let average_salary = $('[data-test-id="average_annual_salary"]').text();
            let median_age = $('[data-test-id="median_age"]').text();
            

            console.log(stats);
        

        } 
    }catch (err){

    }
}