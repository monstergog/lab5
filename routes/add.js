var data = require("../data.json");

exports.addFriend = function(request, response){   
	
	//"name": 
	request.query.name;
	//"description": 
	request.query.description;
	//"imageURL": "http://uploads.edubilla.com/awards-winners/92/b4/allen-newell.jpg"
	
	//data.friend.push(newFriend);
	
	console.log(data);
	response.render('index', data);
};