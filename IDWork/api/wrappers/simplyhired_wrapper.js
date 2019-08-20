// dependencies
const cheerio = require("cheerio");
const axios = require("axios");

// baseURL of the website
const baseURL = "https://www.simplyhired.com/salaries/search";

module.exports.getSalaries = getSalaries;

async function getSalaries(job, location) {
  let params = {
    q: job
  };

  if(location)
    params.l = location
  try {
    let response = await axios.get(baseURL, { params: params });
    if (response.status == 200) {
      const $ = cheerio.load(response.data);

      let jobHeaderString = $(".Salaries-page-header").text();
      let jobHeader = jobHeaderString.split(" Salaries");
      let salaries = $(".Salaries-graph")
        .attr("data-points")
        .split(",");


      let data = {
        job_name: jobHeader[0],
        min_salary: salaries[0],
        avg_salary: salaries[2],
        max_salary: salaries[4],
      }

      return data;
    }
  } catch (err) {}
}
