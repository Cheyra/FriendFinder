//required dependencies
var path = require('path');

// Make the list of friends available
var friends = require('../data/friends.js');

// make API routes available to other files
module.exports = function(app) {
	
	// list of total friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add the new friend entry
	app.post('/api/friends', function(req, res) {
		// Collect user input object
		var userInput = req.body;
		
		var userResponses = userInput.scores;
		
		// Compute best match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; // start the comparison out biginitial value big for comparison

		// Loop through all existing friends in the list checking differences
		for (var i = 0; i < friends.length; i++) {
				
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
		
			// If smallest difference, record the friend match
			if (diff < totalDifference) {
				
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		// Send response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};