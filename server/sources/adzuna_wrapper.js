//dependencies
const axios = require("axios");

//api id and key stored as environment variables
const ADZUNA_APP_KEY = process.env.ADZUNA_APP_KEY;
const ADZUNA_APP_ID = process.env.ADZUNA_APP_ID;

// baseURL of the website.
const baseURL = "http://api.adzuna.com/v1/api/jobs/us/search/1";

const category = "it-jobs";

module.exports.getJobsByLocation = getJobsByLocation;

//function that allows you to find a job by some keywords and a specific location.
async function getJobsByLocation(keyword, location) {
  let params = {
    app_id: ADZUNA_APP_ID,
    app_key: ADZUNA_APP_KEY,
    what: keyword,
    where: location,
    category: category
  };

  try {
    let response = await axios.get(baseURL, { params: params });
    if (response.status == 200) {
      let rawJobs = response.data.results; //jobs with all the charateristics retrivied
      let refinedJobs = [];

      // clean jobs with only informations that are useful for us.
      rawJobs.forEach(rawJob => {
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

        let refinedJob = {
          title: title,
          job_category: category,
          category: keyword,
          company_name: company.display_name,
          description: description,
          city: location.area[3],
          nation: location.area[1],
          latitude: latitude,
          longitude: longitude,
          salary: salary_min,
          url: redirect_url
        };

        refinedJobs.push(refinedJob);
      });

      return refinedJobs;
    }
  } catch (err) {}
}
