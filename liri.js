require("dotenv").config();
// variables we use to call the keys and package
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require("fs");
var keys = require('./keys.js');
//anything the user types

console.log("========================================================================================================================")
console.log("                                                XKOkdollccc::cccllobkOKN                                                ")
console.log("                                          N0xoc:;,''''..'',;,,''';;;;,,;:cokKN                                          ")
console.log("                                      XOdc,''',;;;;;,'...,dkxl'',;lxO0Okxl:,,;cd0N                                      ")
console.log("                                   Xkc,'',;:c:,'.....    ,0 NO::' ...,:ldOKX0xc,',lON                                   ")
console.log("                                Nkc''';:::,'..           ,ONXkc:.        ..;lkKXOo,.,lO                                 ")
console.log("                              Kd,.,;::,'..               ,k00xc:.             .:dKXOl'.:kN                              ")
console.log("                            Ko'.;::cl:.                  'xOOdl;                 .:kXKd,.;kN                            ")
console.log("                          Nd'.;c:;;:ll:.                 'dOkdl,                   'k  Kx,.;O                           ")
console.log("                        NO;.;lc;'',;;:cc,.               .oxdol'                 .l0     Xd'.lX                         ")
console.log("                       Nl.'loc,.   .,:ccc:.              .odllc.               .;O   NkllONO:.;O                        ")
console.log("                      Kc.:doc'      'clcclc,             .loll:.              'dX  Ko,.  .oXXo.'x                       ")
console.log("                     K;.cxxl.      'llooccol;.           .locl;             .:ON 0l.       :KNx'.dN                     ")
console.log("                    K:.lkxo'       ,oloolclll;.          .clcc,            .lKN0l.          :KNk'.x                     ")
console.log("                   Xc.lOOx,       .coloooo::ll:.         .:c::'           .o0Kd'             cXNx..k                    ")
console.log("                   o.:O0O:       .colloolol:ccc;         .::,;'          .oOOc.              .oNNl.;K                   ")
console.log("                  O'.xKKo.      .coclloooc;c;;::'        .;:,;.         .lkx,                 .O 0,.lN                  ")
console.log("                 Nl.:0XO,      .ll;:lllol:.;;.':;.       .;:,;.        .cxo,                   cNNo.'O                  ")
console.log("                 O'.oKXo.     .od.,doclol:..c'.::'.       ,;,,.        ;do'                    'O O. o                  ")
console.log("                 d.'xXK:     'lkc.:oc:lolc,.,:.,:.',.     ,;',.       .cl,                     .dN0; ;X                 ")
console.log("                Nc ,kKKOoll:clcd,'ccc:loooc..c'.:, ,:'.   ',''.       .cc.                .....'dXK: '0                 ")
console.log("                X: ,xxx0KXXX0;:l.::;::looll;.,c.':..:'.,'.',''........,:;'.',;;;:ccllllooddxkO0KKK0c .k                 ")
console.log("                 ; ,ddddd0KKd,l;,l,,:;cllc;:'.c;.:; ;;.,:..','........,::'',;:cclodxxkOO00KKXXNNNKO: .k                 ")
console.log("                X: .dkxodOod:,o':c.,;,:ooc.,:.'l..c..:'.:' ':;'.      .:c.         ......'',;;;l0N0; .O                 ")
console.log("                Nc .ckOKKd:l,:c'o;.::;:olc'.c,.::.;:.,:.,c..:c;.,'.    ;l'                     ,ONO. ,0                 ")
console.log("                 d. ,xO0k;cc,l,;o.,:;::ool:.,l..l'.c'.:,.:, .;:.'c;''..'c;.                   .lKNo. :X                 ")
console.log("                 O' .lOKx,l;;l.lc.:c:ccloll,.l: ;c.,c.'c.'c. .c,.:;.,c;,;:,                   :ON0, .d                  ")
console.log("                 Nc  'xKxol'l:'o,'ol:::lcc::.,l..l,.c,.:;.:;. ,c.,c..l,.;:;'..               'xXXl. ,K                  ")
console.log("                  O'  :OK0;,l':l.:o:,:clc:';;.:c.,c.'c..c..cl'.c;.c; :: 'l,.;;,'...         .oKXx. .d                   ")
console.log("                  No. .cO0ol:.o;'l:;,;clc:'.:'.l'.c;.:; ;:.;x:.'c.'l..l'.c;.;c';loool:,..  .ckKO,  cX                   ")
console.log("                   Xc  .lO0O,;l.:c';,;cl::' ,:.;:.'c..c..:'.,c,.:;.;:.;:.,c.'c..ll:oO0Okxoccdkx;  ;K                    ")
console.log("                    K:  .ckxod:.c,';,;:c;,'..;'.;'.,'.,'.,'..''.',.','',',;,,:::doccldddodxOOx,  ,0                     ")
console.log("                     K:  .:ood:,:,','..''...............................'',,,;:ldxOkxxkxo:lol.  ,0                      ")
console.log("                      Xc.  'c;,,,.....''''..............'''''''',,,,,,'',''',,;:ox00K0Oo::c;.  :K                       ")
console.log("                       Nx.  .,;'',,,,:c:;,'............''',,,,,,,,;;;;;;;;;:::cloxxxdxkocc.  .oN                        ")
console.log("                         0:.  .,,',,,:c:;',.                         .........',;cldk0Ol'.  ;O                          ")
console.log("                          Nk,   .'''..,:,.,.                                    ..,cdl'.  ,xN                           ")
console.log("                            Xx,   ...''''.''                                ...',;;,.   ,dX                             ")
console.log("                              Nk:.   ...''......                        ...',;;''..  .;xX                               ")
console.log("                                 0o;.   .....''...........   ..........',;,''..   .,o0                                  ")
console.log("                                   N0o;.     .....'''',,,,''',,,,,,,''.....    .;o0N                                    ")
console.log("                                       Kko;..      ..................     ..:okK                                        ")
console.log("                                           X0xoc;'...              ..';cox0X                                            ")
console.log("                                                 NX00OxxdddoobbbxxOKXN                                                  ")
console.log("========================================================================================================================")

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
	else if(userInput[2] === "Do-What-I-Say"){
		listening();
	}
	else{
		console.log("what are you talking about ?")
		console.log("Here are my commands my-tweets, spotify-this-song, movie-this, Do-What-I-Say")
	}

// Calling Twitter for a response

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

// Calling Spotify for a request
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
				music = music + userInput[i] + " ";
			}
		}

	}

	spotify.search({ type: 'track', query: music })
		.then(function(response) {
			// for(var i = 0; i < 20; i++){
			console.log("\n============================================")
			//artist name
			console.log("Artist: " + response.tracks.items[0].album.artists[0].name);
			// The Songs Name
			console.log("Song name: " + response.tracks.items[0].name);
			// A preview link of the song from Spotify
			console.log("Spotify Link: " + response.tracks.items[0].preview_url)
			// The album that the song is from
			console.log("Album: " + response.tracks.items[0].album.name)
			console.log("===========================================")
			// }
		})
		.catch(function(err) {
		console.log(err);
	});
	
}

//Calling OMDB for movie information
function incommingMovies(){
	var request = require("request");
	var movie = "";

	if(userInput[3] === "" || userInput[3] === undefined){
		console.log("\nwhat kind of movie request is that")
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

//Do What I Say
function listening(){
	fs.readFile("random.txt", "utf8", function(error, data) {
		if (error) {
		return console.log(error);
		}
		// console.log(data);
			var dataArr = data.split(",");
			console.log(dataArr);
			if(dataArr[0] === "spotify-this-song"){
				userInput[2] = dataArr[0]
				userInput[3] = dataArr[1]
			incomingSongs();
		}
	});


}