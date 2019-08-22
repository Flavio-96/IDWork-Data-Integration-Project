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
      viewTemplatePath: 'pages/search-page'
    },
    badParams: {
      description: 'One or many of the provided params does not match any word in dictionaries',
      responseType: 'bad-params'
    }
  },


  fn: async function ({category, place}) {

    if (!sails.config.custom.categories.includes(category))
      throw 'badParams';

    if (place)
      if (!sails.config.custom.places.includes(place.toLowerCase()))
        throw 'badParams';

    //Adding the search to the recent ones
    await RecentSearches.add({ keyword: category, city: place });

    //Retrieve jobs info
    let jobs = await Job.findByCategoryAndPlace(category, place);

    //Retrieve city info
    let city = await City.findByPlace(place);
    city = city[0];

    //Retrieve articles info
    let articles = await Article.findByKeyword(category);

    //Retrieve courses info
    let courses = await Course.findByKeyword(category);

    //Retrieve courses info
    let repositories = await Repository.findByKeyword(category);

    this.req.session.jobs = jobs;   // returned from a database

    return {
      jobs_info: jobs,
      city: city,
      articles: articles,
      courses: courses,
      repositories: repositories,
      category: category,
      place: place
    };
  }
}