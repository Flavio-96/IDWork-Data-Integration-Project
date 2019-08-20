module.exports = {


  friendlyName: 'Jobs by category',


  description: 'Return all the jobs related a given category',


  inputs: {
    category: {
      description: 'The category selected by the user',
      type: 'string',
      required: true
    },
    place: {
      description: 'The place selected by the user',
      type: 'string'
    }
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/search-page' //Bisogna mettere quella corretta che mi passa antonio
    },
    badParams: {
      description: 'One or many of the provided params does not match any word in dictionaries',
      responseType: 'bad-params'
    }
  },


  fn: async function ({ category, place }) {

    const globalScheme = sails.helpers.globalScheme;

    //Adding the search to the recent ones
    await RecentSearches.add({ keyword: category, city: place });

    //Retrieve jobs info
    let jobs = await Job.findByCategoryAndPlace(category, place);

    /*
    let jobs = await globalScheme.jobInterface.with({
      keyword: category,
      city: place
    })*/

    /*
    let city_name = place.split(", ")[0];
    let city = await City.find({ name: city_name });
    */

    let city = await City.findByPlace(place);
    city = city[0];

    //Retrieve articles info
    let articles = await Article.findByKeyword(category);

    //Retrieve courses info
    let courses = await Course.findByKeyword(category);

    //Retrieve courses info
    let repositories = await Repository.findByKeyword(category);

    return {
      jobs: jobs.ads,
      city: city,
      articles: articles,
      courses: courses,
      repositories: repositories,
      category: category,
      place: place
    };
  }
}