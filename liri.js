require("dotenv").config();
// variables we use to call the keys and package
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require("fs");
var keys = require('./keys.js');
//anything the user types
var userInput = process.argv;

	if(userInput[2] === "my-tweets"){
		incomingTweets();
	}
	else{
		console.log("what are you talking about ?")
	}

// console.log(keys)

// Twitter calling for a response
// function incomingTweets(){

// 	var client = new Twitter(keys.twitter);
// 	// what the user puts in
// 	var queryInput = "";
// 	// if the user puts in a black or becomes undefine it'll send them to stephen curry's tweets
// 	if(userInput[3] === "" || userInput[3] === undefined){
// 		console.log("\nLearn to Tweet")
// 		queryInput = "StephenCurry30"
// 	}
// 	else if(userInput.length-3>1){
// 		var storage = []
// 		for(i=3; i<userInput.length; i++){
// 			storage.push(userInput[i])
// 		}
// 		queryInput = storage.join("");
// 	}
// 	else{
// 		queryInput = userInput[3]
// 	}

// 	var input = { screen_name: queryInput};

// 		client.get('statuses/user_timeline', input , function(error, tweets, response) {
// 		  if (!error) {
// 		    // console.log(tweets);
// 		    for (var i = 0; i < 20 ; i++) {
// 		    	console.log("\n=========================");
// 		    	console.log(tweets[i].created_at);
// 		    	console.log(tweets[i].text);
// 		    	console.log("==========================");
// 		    }
// 		  	}
// 		  	else{
// 			  	console.log("\n=============================");
// 			  	console.log("error", error);
// 			  	console.log("===============================");
// 		  	}
// 	});
// }

function IncomingSongs(){
	var spotify = new Spotify(keys.spotify);
	 
		spotify
		.search({ type: 'track', query: 'river' })
		.then(function(response) {
		console.log(response.tracks.items[0].album.artists[0].name);
		})
		.catch(function(err) {
		console.log(err);
		});

}

IncomingSongs();
