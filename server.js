var request = require('request');
var access_token;


var auth = {
    url : 'https://autocollectapi.cmpayments.com/v1.0/token',
    method: 'POST',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'X-CM-MERCHANT':'AMR-745B5C98-648A-45A1-ACB4-BDAD2AB9E936'
    },
    body: 'grant_type=password&username=Avans1ApiUser&password=59bf8b536a0802561c8be4e3fd1b300847f5549d190499670921a3e40467d707'
};

var paymentplans = {
    url: 'https://autocollectapi.cmpayments.com/v1.0/payment-plans',
    method: 'GET',
    headers: {
        'Authorisation': access_token, 
        'Content-Type': 'application/json'
    }
};

request(auth, function(err, res, body) {  
    var json = JSON.parse(body);
    //console.log(json);
    access_token = json.access_token;
    console.log(access_token);
});


request(paymentplans, function(err, res, body){
    var json = JSON.parse(body);
    console.log(json);
});