window.axios = require('axios');
window.handlebars = require('handlebars');
const _ = require('lodash');

const client = axios.create({
    baseURL: "/"
});

var $container = $('.tiles'),
    template = handlebars.compile($('#org-template').html());

client.get('js/orgs.json')
    .then(response => {
        const orgs = _.sortBy(response.data, 'name');

        orgs.forEach(org => {
            org.num = getRandomInt(1, 15);
            org.paddedNum = padToTwo(org.num);
            $container.append(template(org));
        });
    });

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function padToTwo(number) {
    if (number <= 10) { number = ("0" + number).slice(-2); }
    return number;
}
