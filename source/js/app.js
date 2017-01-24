window.axios = require('axios');

const client = axios.create({
    baseURL: "/"
});

client.get('js/orgs.json')
    .then(response => {
        // create a box for each
        console.log(response.data);
    });
