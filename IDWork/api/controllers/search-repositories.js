module.exports = {


  friendlyName: 'Search repositories',


  description: 'Return all repositories on github related to the topic searched by the user',


  inputs: {
    topic: {
      description: 'The topic searched by the user',
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      description: 'Output all repositories related to the topic',
    },
  },


  fn: async function ({topic}) {
 
    if(!sails.config.custom.categories.includes(topic.toLowerCase()))
      throw 'badParams';    

    github_result = await sails.helpers.githubHelper.with({
      topic: topic
    });


    return {
        repositories: github_result
    };
  }

};
