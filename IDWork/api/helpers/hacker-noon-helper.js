module.exports = {


  friendlyName: 'Hacker noon helper',


  description: 'Helper that retrieves all articles on hackernoon related to the given keyword (Tag)',


  inputs: {
    keyword: {
      description: 'The keyword (Tag) given as input',
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      description: 'Output all article related to the keyword (Tag)',
    },
  },

  fn: async function ({keyword}) {
    const hackernoon = require(`@wrappers/hackernoon_wrapper`);
    let hackernoon_result = await hackernoon.getPosts(keyword);

    return hackernoon_result;
  }


};

