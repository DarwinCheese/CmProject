var express = require('express');
var request = require('request');
var routes = express.Router();

var auth = {
    url : 'https://autocollectapi.cmpayments.com/v1.0/token',
    method: 'POST',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'X-CM-MERCHANT':'AMR-745B5C98-648A-45A1-ACB4-BDAD2AB9E936'
    },
    body: 'grant_type=password&username=Avans1ApiUser&password=59bf8b536a0802561c8be4e3fd1b300847f5549d190499670921a3e40467d707'
};

routes.post('/ticketBestellen', function(req, res) {
    request(auth, function(err, res, data) {  
        var result = JSON.parse(data);
        token = result.access_token;
        console.log(token)
    });
});

module.exports = routes;