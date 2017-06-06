var request = require('request');
var access_token;
var authdone = false;

var p = new Promise(function(resolve, reject){
   //if(good condition){
        //resolve("succes");
   //}
   //else{
        //reject("failure");
   //}
})

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

var debtors = {
    url: 'https://autocollectapi.cmpayments.com/v1.0/debtors', //of moet dit debtor zijn
    method: 'GET',
    headers: {
        'Authorisation': access_token,
        'Content-Type': 'application/json'
    }
}
//then moet gebruikt worden met doSome() ??

request(auth, function(err, res, body) {  
    var json = JSON.parse(body);
    //console.log(json);
    access_token = json.access_token;
    console.log(access_token);
    authdone = true;
});

if(authdone = true){
request({
    url: 'https://autocollectapi.cmpayments.com/v1.0/payment-plans',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': access_token //deze wordt niet herkent
    }
}, function(err, res, body) {
    var json = JSON.parse(body);
    console.log(json);
});
}
//else{
//    //wacht en ga terug naar de if???
//}


// function resolveLater(resolve, reject){
//     setTimeout(function() {
//         resolve(10);
//     }, 3000); 
// }

// function rejectLater(resolve, reject){
//     setTimeout(function() {
//         reject(20);
//     }, 3000);
// }

// var p1 = Promise.resolve(); //in de functie tekst?
// var p2 = p1.then(function(){
//     return new Promise(resolveLater);
// });



// var promise1 = new Promise(function(resolve, reject) {
//     resolve(auth);
// });

// promise1.then(request(paymentplans, function(err, res, body) { //wat staat er in de then
//     var json = JSON.parse(body);
//     console.log(json);
// }));