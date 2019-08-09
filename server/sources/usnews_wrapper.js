// dependencies
const cheerio = require("cheerio");
const axios = require("axios");

// baseURL of the website
const baseURL = "https://realestate.usnews.com/places";

module.exports.getInfos = getInfos;

async function getInfos(city, country) {
  try {

    //formatting input to fit request's style
    let cityNoSpaces = city.replace(" ", "-");
    let countryNoSpaces = country.replace(" ", "-");

    let response = await axios.get(
      `${baseURL}/${countryNoSpaces}/${cityNoSpaces}?`
    );

    if (response.status == 200) {
      const $ = cheerio.load(response.data);

      /*
      ARTICLES WRAPPING
      */

      let tempArticles = [];

      //getting articles NOTE only body, not title
      let tempArticle;
      $(".column > p").each((i, el) => {
        //join different paragraphs of the same article
        tempArticle = tempArticle + $(el).text();

        //if the end of the article is reached, insert it into the array and reset the variable
        if (el.next.next == null || el.next.next.name == "a") {
          tempArticles.push(tempArticle);
          tempArticle = "";
        }
      });

      /*
      QUICK STATS WRAPPING
      */
      let quickStats = [];

      $("h4.media-heading.heading-small").each((i, el) => {
        let statistic = $(el)
          .text()
          .replace(/\n/g, "")
          .replace(/ /g, "")
          .replace("inches", " inches")
          .replace("minutes", " minutes");

        quickStats.push(statistic);
      });

      let description = tempArticles[0].substring(9) + tempArticles[3] + tempArticles[5] + tempArticles[6] + tempArticles[8] + tempArticles[10];

      /*
      CREATING OBJECT
      */
      let data = {
        city: city,
        nation: country,
        population: quickStats[0],
        average_annual_salary: quickStats[1],
        temps: quickStats[2],
        median_age: quickStats[3],
        median_home_price: quickStats[4],
        average_annual_rainfalls: quickStats[5],
        unemployment_rate: quickStats[6],
        median_monthly_rate: quickStats[7],
        average_commute_time: quickStats[8],
        description: description
      };

      return data;
    }
  } catch (err) {}
}
