var http = require('http');

function getTestPersonaLoginCredentials(callback) {

    return http.post({
        host: 'https://autocollectapi.cmpayments.com',
        path: '/v1.0/token'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            callback({
                email: parsed.email,
                password: parsed.pass
            });
        });
    });

}