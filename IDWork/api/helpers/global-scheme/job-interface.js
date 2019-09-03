module.exports = {


    friendlyName: 'Job interface',


    description: 'Return all the jobs with salaries',


    inputs: {
        keyword: {
            description: 'specific technology',
            type: 'string',
            required: true
        },
        city: {
            description: 'The city selected by the user',
            type: 'string'
        }
    },


    exits: {

        success: {
            description: 'Output all the jobs relative to the specified technology in the specified city',
        },
    },


    fn: async function ({ keyword, city }) {

        const adzuna = require('@wrappers/adzuna_wrapper');
        let adzuna_results = await adzuna.getJobsByLocation(keyword, city);

        const simplyHired = require(`@wrappers/simplyhired_wrapper`);
        let simplyhired_results = await simplyHired.getSalaries(adzuna_results.category, city);

        let result = {ads: adzuna_results.jobs, ...simplyhired_results, category: adzuna_results.category};

        return result;
    }
};

