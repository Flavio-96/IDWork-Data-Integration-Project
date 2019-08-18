module.exports = {


  friendlyName: 'Github helper',


  description: 'Helper that retrieves all repositories on github related to the topic given',


  inputs: {
    topic: {
      description: 'The topic given as input',
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
    const github = require(`@wrappers/github_wrapper`);
    let github_result = await github.getRepositories(topic);

    return github_result;
  }


};

