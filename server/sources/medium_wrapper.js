const axios = require('axios');
const cheerio = require('cheerio');

const baseURL = 'https://medium.com/search/posts';

module.exports.getPosts = getPosts;

async function getPosts(keyword){

    let params = {
        'q': keyword,
        'count': 50
    };


    try {
        let response = axios.get(baseURL, {params: params});
        if (response.status == 200) {
            const $ = cheerio.load(response.data);
            var rawPosts = $('.postArticle');
            console.log('Eccolo');
            console.log(rawPosts);
        }
    }catch(err){
        console.log(err);
    }
}