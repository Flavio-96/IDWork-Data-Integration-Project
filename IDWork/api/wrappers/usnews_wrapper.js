// dependencies
const cheerio = require("cheerio");
const axios = require("axios");

// baseURL of the website
const baseURL = "https://realestate.usnews.com/places";

module.exports.getInfos = getInfos;

async function getInfos(city, country) {
  try {

    //formatting input to fit request's style
    country = country.trim();
    let cityNoSpaces = city.replace(/ /g,"-");
    let countryNoSpaces = country.replace(/ /g,"-");

    console.log(`${baseURL}/${countryNoSpaces}/${cityNoSpaces}?`)
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
        whats_like: tempArticles[0].substring(9),
        cost_of_living: tempArticles[3],
        weather: tempArticles[5],
        commuting: tempArticles[6],
        who_lives: tempArticles[8],
        what_to_do: tempArticles[10]
      };

      return data;
    }
  } catch (err) {
    console.log("error:" +err)
  }
}
