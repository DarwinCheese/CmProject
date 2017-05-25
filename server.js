var config = require('./config.json');
var express = require('express');
var app = express();

app.set('PORT', config.webPort);

app.all('*', function(request, response, next) {
 console.log(request.method + " " + request.url);
 next();
})

app.use('/checkout', require('./routes/checkout'));
app.use('/debitor', require('./routes/debitor'));
app.use('/payment_plan', require('./routes/payment_plan'));
app.use('/group', require('./routes/group'));
app.use('/auth', require('./routes/auth'));

app.all('*', function(request, response) {
 response.status(404);
 response.send('404 - Not found');
})

var port = process.env.PORT || app.get('PORT');
app.listen(port, function() {
 console.log('Server app is listening on port' + port);
})