// dependencies
const cheerio = require('cheerio');
const axios = require('axios');

// baseURL of the website
const baseURL = "https://www.simplyhired.com/salaries/search";

module.exports.getSalaries = getSalaries;

async function getSalaries(job, location) {

    let params = {
        'q': job,
        'l': location
    };

    try{
        let response = await axios.get(baseURL, {params: params});
        if(response.status == 200){
            const $ = cheerio.load(response.data);
            var jobHeaderString = $('.Salaries-page-header').text();
            var jobHeader = jobHeaderString.split(' Salaries in ');
            var salaries = $('.Salaries-graph').attr('data-points').split(",");

            var data = jobHeader.concat(salaries[0],salaries[2], salaries[4]);

            return data;
        } 
    }catch (err){

    }
}