//dependencies
const axios = require('axios');

// baseURL of the website. 
const baseURL = 'https://api.github.com/search/repositories';

module.exports.getRepositories = getRepositories;

//function that allows you to find a repo
async function getRepositories(topic) {

    let params = {
        'q': topic
    };

    try {
        let response = await axios.get(baseURL, { params: params });
        if (response.status == 200) {
            let rawRepositories = response.data.items;   //repositories with all the charateristics retrivied
            let refinedRepositories = [];

            // clean repositories with only informations that are useful for us.
            rawRepositories.forEach(rawRepository => {
                let {full_name, html_url} = rawRepository;
                let  refinedRepository= {
                    name: full_name,
                    url: html_url,
                    keyword: topic
                }
                refinedRepositories.push(refinedRepository);
            });
            console.log(refinedRepositories);
            return refinedRepositories;
        }
    } catch (err) {

    }
}