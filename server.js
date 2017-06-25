var config = require('./config.json');
var express = require('express');
var routes_tickets = require('./routes/bestel');
var bodyParser = require('body-parser');
var app = express();
var token;
var http = require('http');


app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.all('*', function(request, response, next) {
 console.log(request.method + " " + request.url);
 next();
})

app.use('/', require('./routes/bestel'));

app.use(function(err, req, res, next) {
    // console.dir(err);
    var error = {
        message: err.message,
        code: err.code,
        name: err.name,
        status: err.status
    }
    res.status(401).send(error);
});



// app.all('*', function(request, response) {
//  response.status(404);
//  response.send('404 - Not found');
// })

var port = process.env.PORT || 3000;
app.listen(port, function() {
 console.log('Server app is listening on port' + port);
})

module.exports = app;