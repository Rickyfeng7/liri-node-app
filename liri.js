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
	else if(userInput[2] === "movie-this"){
		incommingMovies();
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

function incommingMovies(){
	var request = require("request");
	var movie = "";

	if(userInput[3] === "" || userInput[3] === undefined){
		console.log("\nLearn to request a movie")
		movie = "wanted";
	}
	else{
		for(i=3; i<userInput.length; i++){
			if(i===userInput.length-1){
				movie = movie + userInput[i];
			}
			else{
				movie = movie + userInput[i] + " "
			}
		}

	}
	request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
		if (!error && response.statusCode === 200) {
		console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
		console.log("\n=========================================")
		// * Title of the movie.
		console.log("The movie's title is: " + JSON.parse(body).Title);
		// * Year the movie came out.
		console.log("The Year the movie came out: " + JSON.parse(body).Released)
		// * IMDB Rating of the movie.
		console.log("The IMDB Rating is: " + JSON.parse(body).imdbRating)
	   // * Rotten Tomatoes Rating of the movie.
	   console.log("The Rotten tomatoes Ratings: " + JSON.parse(body).Ratings[1].Value)
	   // * Country where the movie was produced.
	   console.log("The Country the movie was produced: " + JSON.parse(body).Country)
   		// * Language of the movie.
   		console.log("Language: " + JSON.parse(body).Language)
   		// * Plot of the movie.
   		console.log("Plot: " + JSON.parse(body).Plot)
	   // * Actors in the movie.
	   console.log("Actors: " + JSON.parse(body).Actors)
		console.log("=========================================")
		  }
		});
}
