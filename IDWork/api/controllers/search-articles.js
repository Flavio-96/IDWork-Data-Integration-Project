module.exports = {


  friendlyName: 'Search articles',


  description: 'Return all articles on medium and hackernoon related to the keyword searched by the user (Tag)',


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
 
    if(!sails.config.custom.categories.includes(keyword.toLowerCase()))
      throw 'badParams';    

    medium_result = await sails.helpers.mediumHelper.with({
      keyword: keyword
    });

    hackerNoon_result = await sails.helpers.hackerNoonHelper.with({
      keyword: keyword
    });

    return {
      medium_result: medium_result,
      hackerNoon_result: hackerNoon_result
    }
  }


};
