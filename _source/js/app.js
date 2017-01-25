window.axios = require('axios');
window.handlebars = require('handlebars');
const _ = require('lodash');

const client = axios.create({});

var $orgsContainer = $('.tiles--orgs'),
    $toolsContainer = $('.tiles--tools'),
    orgTemplate = handlebars.compile($('#org-template').html()),
    toolTemplate = handlebars.compile($('#tool-template').html());

client.get('js/orgs.json')
    .then(response => {
        const orgs = _.sortBy(response.data, 'name');

        orgs.forEach(org => {
            $orgsContainer.append(orgTemplate(decorateOrg(org)));
        });
    });

client.get('js/tools.json')
    .then(response => {
        const tools = _.sortBy(response.data, 'name');

        tools.forEach(tool => {
            $toolsContainer.append(toolTemplate(decorateTool(tool)));
        });
    });

function decorateOrg(org)
{
    org.imageNum = padToTwo(getRandomInt(1, 15));
    org.styleNum = org.customImage ? 9999 : getRandomInt(1, 6);
    org.location = buildLocationString(org);

    return org;
}

function decorateTool(tool)
{
    tool.imageNum = padToTwo(getRandomInt(1, 15));
    tool.styleNum = tool.customImage ? 9999 : getRandomInt(1, 6);

    return tool;
}

function buildLocationString(org)
{
    if (org.locationAddress && org.locationCity && org.locationState) {
        return org.locationAddress + ', ' + org.locationCity + ', ' + org.locationState;
    }

    if (org.locationCity && org.locationState) {
        return org.locationCity + ', ' + org.locationState;
    }

    if (org.locationState) {
        return org.locationState;
    }

    return null;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function padToTwo(number) {
    if (number <= 10) { number = ("0" + number).slice(-2); }
    return number;
}
