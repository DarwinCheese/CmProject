
var express = require('express');
var router = express.Router();
var EventEmitter = require("events").EventEmitter;
var path = require('path');
var request = require('request');
var auth = require('./auth');
var body = new EventEmitter();
var main = require('../server');

var payment_plan_get = {
    url : 'https://autocollectapi.cmpayments.com/v1.0/payment-plans',
    method: 'GET',
    headers: {
        'Content-Type':'application/json',
        'Authorization':'Bearer '+ main.token +'' 
    }  
};

request(payment_plan_get, function(err, res, body) {
    
    if(err) {
        console.log(err);
    }
    if(res) {
        // console.log("res = ");
        // console.dir(res);
    }

    var result = JSON.parse(body);
    console.log(result);
});


module.exports = router;
