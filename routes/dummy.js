
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/tickets', function(request, response) {
 response.status(200);
 response.json({
 "dummy omgeving": "om te testen"
 });
});

router.get('/recipes', function(request,response){
	response.json(recipes)
});

router.get('/recipes/:id', function(request,response){
	var id = request.params.id || '';
	var recipe = recipes[id];
	response.json(recipe);
});

module.exports = router;