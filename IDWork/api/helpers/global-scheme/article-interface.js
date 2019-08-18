module.exports = {


  friendlyName: 'Article interface',


  description: 'Helper that retrieves all articles on Medium and Hackernoon related to the given keyword (Tag)',


  inputs: {
    keyword: {
      description: 'The keyword (Tag) given as input',
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'Output all articles from Medium and Hackernoon.',
    },

  },


  fn: async function ({keyword}) {
    wrappers_folder = sails.config.custom.wrappers_folder;

    keyword = keyword.replace(/[^A-Za-z0-9]+/g, '');

    const medium = require(`${wrappers_folder}medium_wrapper`);
    let medium_result = await medium.getPosts(keyword);

    const hackernoon = require(`${wrappers_folder}hackernoon_wrapper`);
    let hackernoon_result = await hackernoon.getPosts(keyword);

    let articles = medium_result.concat(hackernoon_result);

    return articles;
  }
};
