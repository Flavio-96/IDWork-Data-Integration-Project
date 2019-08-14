module.exports = {


  friendlyName: 'Medium helper',


  description: 'Helper that retrieves all articles on medium related to the given keyword (Tag)',


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
    wrappers_folder = sails.config.custom.wrappers_folder;

    const medium = require(`${wrappers_folder}medium_wrapper`);
    let medium_result = await medium.getPosts(keyword);

    return medium_result;
  }


};

