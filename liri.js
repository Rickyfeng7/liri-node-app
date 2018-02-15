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
	else if(userInput[2] === "spotify-this-song"){
		incomingSongs();
	}
	else{
		console.log("what are you talking about ?")
	}

// console.log(keys)

// Twitter calling for a response
function incomingTweets(){

	var client = new Twitter(keys.twitter);
	// what the user puts in
	var queryInput = "";
	// if the user puts in a black or becomes undefine it'll send them to stephen curry's tweets
	if(userInput[3] === "" || userInput[3] === undefined){
		console.log("\nLearn to Tweet")
		queryInput = "StephenCurry30"
	}
	else if(userInput.length-3>1){
		var storage = []
		for(i=3; i<userInput.length; i++){
			storage.push(userInput[i])
		}
		queryInput = storage.join("");
	}
	else{
		queryInput = userInput[3]
	}

	var input = { screen_name: queryInput};

		client.get('statuses/user_timeline', input , function(error, tweets, response) {
		if (!error) {
	    // console.log(tweets);
	    for (var i = 0; i < 20 ; i++) {
	    	console.log("\n=========================");
	    	console.log(tweets[i].created_at);
	    	console.log(tweets[i].text);
	    	console.log("==========================");
	    }
	  	}
	  	else{
		  	console.log("\n=============================");
		  	console.log("error", error);
		  	console.log("===============================");
	  	}
	});
}

function incomingSongs(){

	var spotify = new Spotify(keys.spotify);
	var music = ""

	if(userInput[3] === "" || userInput[3] === undefined){
		console.log("\nLearn to request a song")
		music = "In the End"
	}
	else{
		for(i=3; i<userInput.length; i++){
			if(i===userInput.length-1){
				music = music + userInput[i];
			}
			else{
				music = music + userInput[i] + " "
			}
		}

	}
		spotify
		.search({ type: 'track', query: music })
		.then(function(response) {
		console.log("\n============================================")
		//artist name
		console.log("Artist: " + response.tracks.items[0].album.artists[0].name);
		console.log("============================================")
		// The Songs Name
		console.log("Song name: " + response.tracks.items[0].name);
		console.log("============================================")
		// A preview link of the song from Spotify
		console.log("Spotify Link: " + response.tracks.items[0].external_urls.spotify)
		console.log("===========================================")
		// The album that the song is from
		console.log("Album: " + response.tracks.items[0].album.name)
		})
		.catch(function(err) {
		console.log(err);
		});
}

function 