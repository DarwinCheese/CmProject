var access_token;
var rp = require('request-promise');

// (function (exports) {
//   'use strict';
 
// var Sequence = exports.Sequence || require('sequence').Sequence
//     , sequence = Sequence.create()
//     , err
//     ;

var auth = {
    url : 'https://autocollectapi.cmpayments.com/v1.0/token',
    method: 'POST',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'X-CM-MERCHANT':'AMR-745B5C98-648A-45A1-ACB4-BDAD2AB9E936'
    },
    body: 'grant_type=password&username=Avans1ApiUser&password=59bf8b536a0802561c8be4e3fd1b300847f5549d190499670921a3e40467d707'
};

// var auth = {
//   uri: 'https://autocollectapi.cmpayments.com/v1.0/token',
//   qs: {
//       body: 'grant_type=password&username=Avans1ApiUser&password=59bf8b536a0802561c8be4e3fd1b300847f5549d190499670921a3e40467d707'
//   },
//   headers: {
//       'X-CM-MERCHANT': 'AMR-745B5C98-648A-45A1-ACB4-BDAD2AB9E936',
//       'Content-Type': 'x-www-form-urlencoded'
//   },
//   json: true
// }

var paymentplans = {
    url: 'https://autocollectapi.cmpayments.com/v1.0/payment-plans',
    method: 'GET',
    headers: {
        'Authorisation': '', //....
        'Content-Type': 'application/json'
    }
};


     
  // sequence
  //   .then(function (next) {
  //     setTimeout(function () {
  //       next(err, "Hi", "World!");
  //    }, 120);
  //   })
  //   .then(function (next, err, a, b) {
  //     setTimeout(function () {
  //       next(err, a, b);
  //     }, 270);
  //   })
  //   .then(function (next, err, a, b) {
  //     setTimeout(function () {
  //       console.log(a, b);
  //       next();
  //     }, 50);
  //   });

  //   }('undefined' !== typeof exports && exports || new Function('return this')()));



//request(auth, function(err, res, body) {  
//var json = JSON.parse(body);
////console.log(json);
//access_token = json.access_token;
//console.log(access_token);
//});


var authMethod = function() {
var promise = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log('first method completed');
        resolve({
        
        //Hier moet de authenticatie

        //Var auth hier aanmaken?

    //request(auth, function(err, res, body) {  
    //var json = JSON.parse(body);
    //console.log(json);
    //access_token = json.access_token;
    //console.log(access_token);
    //});

        
        });
    }, 5000);
});
return promise;
};


var paymentMethod = function(someStuff) {
var promise = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log('second method completed');
        resolve({
        

        //connectie met payments

        });
    }, 2000);
});
return promise;
};

var debtorMethod = function(someStuff) {
var promise = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log('third method completed');
        resolve({
        
        //Conn met debtors

        });
    }, 2000);
});
return promise;
};

authMethod()
.then(paymentMethod)
.then(debtorMethod);