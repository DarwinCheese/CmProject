var request = require('request');
var Bottleneck = require("bottleneck"); // Skip when browser side
var token
 
// Never more than 1 request running at a time. 
// Wait at least 2000ms between each request. 
var limiter = new Bottleneck(1, 2000);
        var auth = {
        url : 'https://autocollectapi.cmpayments.com/v1.0/token',
        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
            'X-CM-MERCHANT':'AMR-745B5C98-648A-45A1-ACB4-BDAD2AB9E936'
        },
        body: 
            'grant_type=password&username=Avans1ApiUser&password=59bf8b536a0802561c8be4e3fd1b300847f5549d190499670921a3e40467d707'
        };
        var payment_plan_get = {
    url : 'https://autocollectapi.cmpayments.com/v1.0/payment-plans',
    method: 'GET',
    headers: {
        'Content-Type':'application/json',
        'Authorization':'Bearer '+ token +'' 
    }  
};
var authrequest = request(auth, function(err, res, data) {  
//    body.data = data;    
//    body.emit('update');
    var result = JSON.parse(data);
    var access_token = result.access_token;
    token = access_token;
});
var getPaymentPlan = request(payment_plan_get, function(err, res, body) {
    var result = JSON.parse(body);
    console.log(result);
});
limiter.submit(authrequest);
limiter.submit(getPaymentPlan);