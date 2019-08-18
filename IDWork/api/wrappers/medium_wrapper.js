//dependencies
const axios = require("axios");

//base URL of the website
const baseURL = "https://medium.com/_/api/tags";

//exported function
module.exports.getPosts = getPosts;

//function that allows to retrieve posts from Medium with 'keyword' tag
async function getPosts(keyword) {

  try {
    let response = await axios.get(`${baseURL}/${keyword}/stream`);
    if (response.status == 200) {
      //there are some initial character not in JSON format so we use substring to get the json part
      let data = JSON.parse(response.data.substring(16));



      //posts info
      let posts = data.payload.references.Post;
      //authors info
      let authors = data.payload.references.User;

      let refinedPosts = [];

      //taking only useful informations from post in posts
      for (id in posts) {
        if (posts.hasOwnProperty(id)) {
          let { title, creatorId } = posts[id];
          let { recommends } = posts[id].virtuals;
          let img_url = posts[id].virtuals.previewImage.imageId;
          let author = authors[creatorId].name; //retrieve author's name using his id
          refinedPosts.push({
            title: title,
            author: author,
            article_url: `https://medium.com/p/${id}`,
            img_url: `https://cdn-images-1.medium.com/${img_url}`,
            score: recommends,
            category: keyword
          });
        }
      }
      
      return refinedPosts;
    }
  } catch (err) {
    console.log(err);
  }
}
