// dependencies
const cheerio = require("cheerio");
const axios = require("axios");

// baseURL of the website
const baseURL = "https://hackernoon.com/tagged/";

module.exports.getPosts = getPosts;

async function getPosts(keyword) {

  try {
    let response = await axios.get(`${baseURL}${keyword}`);
    if (response.status == 200) {
      const $ = cheerio.load(response.data);


      let refinedPosts = [];

      // getting all authors and putting in an array
      let authors = $(".name").toArray();

      let img_urls = [];

      $('div.img').each((i, el) => {
        let img_url = el.attribs.style.replace(/background-image: url\([^A-Za-z0-9\/]+|'\)/g, '');
        if(img_url[0] == '/'){
          img_url = `https://hackernoon.com${img_url}`;
        }
        if(img_url == ''){
          img_url = 'https://hackernoon.com/Devimg/story-image-default.png';
        }
        
        img_urls.push(img_url);
      });

      $(".title a").each((i, el) => {

        let title = el.children[0].data; //getting title
        let url = `https://hackernoon.com${el.attribs.href}`; //getting href of the a element
        let author = authors[i].children[0].data; //getting the post's author
        refinedPosts.push({ title: title, author: author, article_url: url, img_url: img_urls[i], category: keyword});
      });
      //returning posts with only interesting fields
      return refinedPosts;
    }
  } catch (err) { }
}
