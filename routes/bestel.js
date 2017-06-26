var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();
var token;

var auth = {
    url : 'https://autocollectapi.cmpayments.com/v1.0/token',
    method: 'POST',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'X-CM-MERCHANT':'AMR-3B2702F1-E2F0-472E-8249-7E13749E2831'
    },
    body: 'grant_type=password&username=Avans2ApiUser&password=14ce32f30af612879385901c6827625e7c8042bb6093b1e6be644cb82acc3212'
};

router.post('/bestel', function(req, res){

	request(auth, function(err, result, data) {  
	    var result = JSON.parse(data);
	    token = result.access_token;
	    console.log(token);

	    var name = req.body.name;
	    var phone_number= req.body.phone_number;
	    var email = req.body.email;
	    var reference = req.body.reference;
	    var total_amount = req.body.total_amount;

	    var debtor_request = 
	    [
	        {
	            "payment_plan_id": "APP-ED0F3848-6589-405B-9CDB-A661428F0537",
	            "reference": ""+reference+"",
	            "name": ""+name+"",
	            "phone_number": ""+phone_number+"",
	            "email": ""+email+"",
	            "currency": "EUR",
	            "locale": "nl-NL",
	            "total_amount": ""+total_amount+"",
	            "no_direct_debit": true,
	            "page_content_settings": {
	              "title": "Tickets",
	              "content": "Ticket betaling",
	              "product_description": "Ticket(s) payment – Reference: OWN-DEBTOR-REF",
	              "header_color": "#259BDB",
	              "button_color": "#FF6633",
	              "logo_url": "https://www.own-website.com/logo.png",
	              "redirect_url": "https://www.own-website.com/redirect/"
	            }
	        }
	    ]
	    
	    var createDebtor = {
	        url : 'https://autocollectapi.cmpayments.com/v1.0/groups/AGR-10AFAB2A-A414-43A5-8EB3-003DA265EBEE/debtors',
	        method: 'POST',
	        headers: {
	            'Content-Type':'application/json',
	            'Authorization':'Bearer ' + token + '' 
	        },
	        body: JSON.stringify(debtor_request)
	    };

	    request(createDebtor, function(error, results, body) {
	        //console.log(body);
	        var result = JSON.parse(body);

	        var checkout_request = 
			    {
					  "payment_plan_id": "APP-E3FE0E5D-8255-4436-BDAA-629E650FFDC1",
					  "reference": ""+reference+"",
					  "name": ""+name+"",
					  "iban": "NL52INGB2088416456",
					  "bic": "INGBNL2A",
					  "phone_number": ""+phone_number+"",
					  "email": ""+email+"",
					  "currency": "EUR",
					  "locale": "nl-NL",
					  "total_amount": ""+total_amount+"",
					  "page_content_settings": {
					    "title": "Your own title",
					    "content": "Page content to inform the debtor",
					    "product_description": "Product payment – Reference: OWN-DEBTOR-REF",
					    "header_color": "#259BDB",
					    "button_color": "#FF6633",
					    "logo_url": "https://www.own-website.com/logo.png",
					    "redirect_url": "https://www.own-website.com/redirect/"
					}
				}

			var createCheckout = {
		        url : ' https://autocollectapi.cmpayments.com/v1.0/groups/AGR-10AFAB2A-A414-43A5-8EB3-003DA265EBEE/check-outs',
		        method: 'POST',
		        headers: {
		            'Content-Type':'application/json',
		            'Authorization':'Bearer ' + token + '' 
		        },
		        body: JSON.stringify(checkout_request)
		    };

		    request(createCheckout, function(error, results, json) {
		    	var resultCheckout = JSON.parse(json);
		    	res.send({
	          		"code":200,
	          		"checkout_url":""+resultCheckout.check_out_url+""
	        	})
		    	// res.send(resultCheckout.check_out_url);
		    });

	    });
	});
});

module.exports = router;