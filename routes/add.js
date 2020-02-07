var data = require("../data.json");

exports.addFriend = function(request, response){   
	data.friends.push({
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "http://lorempixel.com/400/400/people"
		});
	
	console.log(request.query.name);
	console.log(request.query.description);
	response.render('index', data);
};