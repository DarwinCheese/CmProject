var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var EventEmitter = require("events").EventEmitter;
var body = new EventEmitter();
var token;

var auth = {
    url : 'https://autocollectapi.cmpayments.com/v1.0/token',
    method: 'POST',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'X-CM-MERCHANT':'AMR-3B2702F1-E2F0-472E-8249-7E13749E2831'
    },
    body: 'grant_type=password&username=Avans2ApiUser&password=14ce32f30af612879385901c6827625e7c8042bb6093b1e6be644cb82acc3212'
};


request(auth, function(err, res, data) {  
    var result = JSON.parse(data);
    token = result.access_token;
    console.log(token);

    var debtor_request = 
    [
        {
            "payment_plan_id": "APP-ED0F3848-6589-405B-9CDB-A661428F0537",
            "reference": "OWN-DEBTOR-REF",
            "name": "Darwin Gutierrez",
            "phone_number": "0031650702191",
            "email": "johnsmith@example.com",
            "currency": "EUR",
            "locale": "nl-NL",
            "total_amount": 10.00,
            "no_direct_debit": true,
            "page_content_settings": {
              "title": "Tickets",
              "content": "Ticket betaling",
              "product_description": "Ticket(s) payment – Reference: OWN-DEBTOR-REF",
              "header_color": "#259BDB",
              "button_color": "#FF6633",
              "logo_url": "https://www.own-website.com/logo.png",
              "redirect_url": "https://www.own-website.com/redirect/"
            }
        }
    ]
    
    var createDebtor = {
        url : 'https://autocollectapi.cmpayments.com/v1.0/groups/AGR-10AFAB2A-A414-43A5-8EB3-003DA265EBEE/debtors',
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + token + '' 
        },
        body: JSON.stringify(debtor_request)
    };

    request(createDebtor, function(err, res, body) {
        //console.log(body);
        var result = JSON.parse(body);
        console.log(result);
    });
});

module.exports = router;