var seqqueue = require('seq-queue');
var request = require('request');

var queue = seqqueue.createQueue(0);
 
   var auth = {
    url : 'https://autocollectapi.cmpayments.com/v1.0/token',
    method: 'POST',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'X-CM-MERCHANT':'AMR-745B5C98-648A-45A1-ACB4-BDAD2AB9E936'
    },
    body: 'grant_type=password&username=Avans1ApiUser&password=59bf8b536a0802561c8be4e3fd1b300847f5549d190499670921a3e40467d707'
};

queue.push(
function(){
request(auth, function(err, res, data) {  

    var result = JSON.parse(data);
    token = result.access_token;
    console.log(token)
    })}, 
  function() {
    console.log('task timeout');
  }, 
  0
);
 
queue.push(
  function(task) {
    setTimeout(function() {
      console.log('world~');
      task.done();
    }, 0);
  }
);