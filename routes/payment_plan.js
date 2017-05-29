
var express = require('express');
var router = express.Router();
var EventEmitter = require("events").EventEmitter;
var path = require('path');
var request = require('request');
var auth = require('./auth');
var body = new EventEmitter();

console.log(alert);

body.on('update', function (response) {
    var result = JSON.parse(body.data);
    var token = result.access_token;
   
   var payment_plan_get = {
    url : 'https://autocollectapi.cmpayments.com/v1.0/payment-plans',
    method: 'GET',
    headers: {
        'Content-Type':'application/json',
        'Authorization':'Bearer '+ token +'' 
    }  
};
console.log(payment_plan_get.headers)
});
/*
request(payment_plan_get, function(err, res, body) {  
    var result = JSON.parse(body);
    console.log(result);
});
*/

module.exports = router;