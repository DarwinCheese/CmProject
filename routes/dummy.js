
var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var token

var auth = {
    url : 'https://autocollectapi.cmpayments.com/v1.0/token',
    method: 'POST',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'X-CM-MERCHANT':'AMR-745B5C98-648A-45A1-ACB4-BDAD2AB9E936'
    },
    body: 'grant_type=password&username=Avans1ApiUser&password=59bf8b536a0802561c8be4e3fd1b300847f5549d190499670921a3e40467d707'
};

request(auth, function(err, res, data) {  
//    body.data = data;    
//    body.emit('update');
    var result = JSON.parse(data);
    token = result.access_token;
});

router.get('/tickets', function(request, response) {
 response.status(200);
 response.json({
 "dummy omgeving": "om te testen"
});
});

router.get('/betaling', function(request,response){
	
});

router.get('/betaald', function(request,response){
	response.json(token);
});

module.exports = router;