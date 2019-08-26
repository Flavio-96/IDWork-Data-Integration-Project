module.exports = {


    friendlyName: 'Repository interface',


    description: 'Helper that retrieves all repositories on Github related to the given keyword (Tag)',


    inputs: {
        keyword: {
            description: 'The keyword (Tag) given as input',
            type: 'string',
            required: true
        }
    },


    exits: {

        success: {
            description: 'Output all repositories from Github.',
        },

    },


    fn: async function ({ keyword }) {

        const github = require(`@wrappers/github_wrapper`);

        let github_result = await github.getRepositories(keyword);

        return github_result;
    }
};

