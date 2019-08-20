//dependencies
const axios = require("axios");
const cheerio = require('cheerio');

//api id and key stored as environment variables
const ADZUNA_APP_KEY = process.env.ADZUNA_APP_KEY;
const ADZUNA_APP_ID = process.env.ADZUNA_APP_ID;

// baseURL of the website.
const baseURL = "http://api.adzuna.com/v1/api/jobs/us/search/1";
const baseURLDescription = "https://www.adzuna.com/details/";

const category = "it-jobs";
const results_per_page = 500;

module.exports.getJobsByLocation = getJobsByLocation;
module.exports.getFullDescription = getFullDescription;

//function that allows you to find a job by some keywords and a specific location.
async function getJobsByLocation(keyword, location) {
  let params = {
    app_id: ADZUNA_APP_ID,
    app_key: ADZUNA_APP_KEY,
    what: keyword,
    category: category,
    results_per_page: results_per_page
  };

  if (location)
    params.where = location;

  try {
    let response = await axios.get(baseURL, { params: params });

    if (response.status == 200) {
      let rawJobs = response.data.results; //jobs with all the charateristics retrivied

      let refinedJobs = [];

      // clean jobs with only informations that are useful for us.
      await Promise.all(rawJobs.map(async (rawJob) => {
        let {
          title,
          description,
          company,
          location,
          latitude,
          longitude,
          salary_min,
          redirect_url
        } = rawJob;     //destructoring

        title = title.replace(/<\/?[^>]+(>|$)/g, "");
        let small_description = description.replace(/<\/?[^>]+(>|$)/g, "");

        let full_description = await getFullDescription(redirect_url);

          let refinedJob = {
            title: title,
            job_category: category,
            category: keyword,
            company_name: company.display_name,
            small_description: small_description,
            full_description: full_description,
            city: location.area[3],
            nation: location.area[1],
            latitude: latitude,
            longitude: longitude,
            salary: salary_min,
            url: redirect_url
          };

          refinedJobs.push(refinedJob);

      }));

      return refinedJobs;
    }
  } catch (err) {
    console.log(`Adzuna wrapper error: ${err}`);
  }


}

async function getFullDescription(url) {

  let cutted_url = url.substring(31);
  try {
    let response = await axios.get(`${baseURLDescription}${cutted_url}`);
    if (response.status == 200) {
      const $ = cheerio.load(response.data);
      let descriptionHTML = $('div .job_details_body').html();
      return descriptionHTML;
    }
  } catch (err) {
    console.log(`Adzuna description wrapper error: ${err}`);
  }

}
