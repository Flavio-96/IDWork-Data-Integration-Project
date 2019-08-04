//dependencies
const axios = require('axios');

const auth = require('./edx_auth');

async function getCourses(){
    let token = await auth.getToken();

    
}
