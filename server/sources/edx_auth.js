//dependencies
const axios = require('axios');
const qs = require('qs');

const authURL = 'https://api.edx.org/oauth2/v1/access_token';

const EDX_CLIENT_ID = process.env.EDX_CLIENT_ID;
const EDX_CLIENT_SECRET = process.env.EDX_CLIENT_SECRET;

module.exports.getToken = getToken;

async function getToken(){

    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    let requestBody = {
        grant_type: 'client_credentials',
        client_id: EDX_CLIENT_ID,
        client_secret: EDX_CLIENT_SECRET,
        token_type: 'jwt'
    }

    try{

        let response = await axios.post(authURL, qs.stringify(requestBody), config);
        if(response.status == 200){
            console.log(response.data.access_token);
            
        }
    } catch(err){

    }
}