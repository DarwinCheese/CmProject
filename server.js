var config = require('./config.json');
var express = require('express');
var app = express();
var http = require('http');
var token;

app.set('PORT', config.webPort);

app.all('*', function(request, response, next) {
 console.log(request.method + " " + request.url);
 next();
})

app.use('/auth', require('./routes/auth'));
app.use('/tikckets', require('./routes/tickets'));
app.use('/dummy', require('./routes/dummy'))


app.all('*', function(request, response) {
 response.status(404);
 response.send('404 - Not found');
})

var port = process.env.PORT || app.get('PORT');
app.listen(port, function() {
 console.log('Server app is listening on port' + port);
})

module.exports = app;