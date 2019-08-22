//dependencies
const axios = require("axios");

// url to the data
const baseURL =
  "https://lua9b20g37-dsn.algolia.net/1/indexes/*/queries?x-algolia-application-id=LUA9B20G37&x-algolia-api-key=dcc55281ffd7ba6f24c3a9b18288499b&Host=lua9b20g37-dsn.algolia.net&Accept=application/json&Accept-Language=en-US,en;q=0.5&Accept-Encoding=gzip, deflate, br&content-type=application/x-www-form-urlencoded&Content-Length=994&Origin=https://www.coursera.org&TE=Trailers&Pragma=no-cache&Cache-Control=no-cache";

module.exports.getCourses = getCourses;

//function that retrieves all courses from udacity
async function getCourses(keyword) {

  // request body: there are two type of results the former based on all products and the latter based on suggestions.
  let body = {
    requests: [
      {
        indexName: "prod_all_products",
        params: `query=${keyword}&hitsPerPage=9223372036854775807&page=0&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&optionalFilters=query%3A${keyword}&facets=%5B%5D&tagFilters=`
      },
      {
        indexName: "test_suggestions",
        params: `query=${keyword}&hitsPerPage=9223372036854775807&page=0&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&optionalFilters=query%3A${keyword}&facets=%5B%5D&tagFilters=`
      }
    ]
  };

  try {

    let response = await axios({
      method: "post",
      url: baseURL,
      headers: {},
      data: body
    });

    if (response.status == 200) {
      let data = response.data;

      let refinedCourses = [];

      //concatenating the arrays 
      let rawCourses = data.results[0].hits;
      rawCourses = rawCourses.concat(data.results[1].hits);

      rawCourses.forEach(course => {

        if (course.language == 'English') {
          let {
            name,
            imageUrl,
            objectUrl,
            skills,
            productDifficultyLevel
          } = course;   //destructoring

          let description = course._snippetResult.description.value;
          
          let refinedCourse = {
            title: name,
            category: keyword,
            description: description,
            difficulty: productDifficultyLevel,
            skills: skills,
            url_image: imageUrl,
            url: `https://www.coursera.org${objectUrl}`,
          };

          console.log(refinedCourse)

          refinedCourses.push(refinedCourse);
        }
      });


      return refinedCourses;
    }
  } catch (err) {
    console.log(`Coursera wrapper error: ${err}`);
  }
}
