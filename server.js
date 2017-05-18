var http = require("http");
var options = {
    hostname: 'autocollectapi.cmpayments.com',
    port: 80,
    path: '/v1.0/payment-plans',
    method: 'POST',
    headers: {
        'Authorisation': 'bearer NpqrKL3FitxmbapiZ0tc64iCuGSVZm-6FDMR_ndFWcSAEd4y0lWOUiJeJ2t7VVFpj-5VSjonn58QV8zxVQIdgP6bkb8JChy5s9vc0unLZUpdEzXaywe9HUfA2YqNC1UwB-_1F_FSwLBD0zombkPIIEtKvy35YQMH_oxZXqBpdigkeT_lStd4HYzciffCToBVEoPYWfmrbnF-GTEnOWyi0RtGSpXBF28ppzpjR44pt6NgP6a28QsSsgHsMX-K-gkxB4xc7w1h8ubYkZ_szySx5DMdORnzVYUn9W_zilVYErU',
        'Content-Type': 'application/json'
    }
};

var req = http.request(options, function(res) {
    console.log('Status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (body) {
        console.log('Body: ' + body);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

req.write('{"period_type": "Manually","number_of_periods":1,"periods":[{"payment_method": "iDEAL","delivery_method": "Email","delivery_time": "12:00"}]}');
req.end();