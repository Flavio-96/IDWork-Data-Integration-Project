//dependencies
const axios = require("axios");

// baseURL of the website.
const baseURL = "https://api.github.com/search/repositories";

module.exports.getRepositories = getRepositories;

//function that allows you to find a repo
async function getRepositories(topic) {

  //request parameters
  let params = {
    q: topic
  };

  try {
    let response = await axios.get(baseURL, { params: params });
    if (response.status == 200) {
      let rawRepositories = response.data.items; //repositories with all the charateristics retrivied
      let refinedRepositories = [];

      // clean repositories with only informations that are useful for us.
      rawRepositories.forEach(rawRepository => {
        let {
          full_name,
          html_url,
          stargazers_count,
          description,
          updated_at
        } = rawRepository;	//destructoring 

        let author = rawRepository.owner.login;

        let refinedRepository = {
          name: full_name,
          keyword: topic,
          author: author,
          description: description,
          updated_at: updated_at,
          stars: stargazers_count,
          url: html_url,
        };

        refinedRepositories.push(refinedRepository);
      });

			//returning repositories with only interesting fields
      return refinedRepositories;
    }
  } catch (err) {}
}
