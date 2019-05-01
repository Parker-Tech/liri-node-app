require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var commandName = process.argv[2];

// var spotify = new Spotify(keys.spotify);

function concertThis() {
  var myUrl = "https://rest.bandsintown.com/artists/" + process.argv[3] + "/events?app_id=codingbootcamp";
  
}

function spotifyThisSong() {

}

function movieThis() {

}

function doWhatItSays() {

}

switch (commandName) {
  case 'concert-this':
    concertThis();
    break;
  case 'spotify-this-song':
    spotifyThisSong();
    break;
  case 'movie-this':
    movieThis();
    break;
  case 'do-what-it-says':
    doWhatItSays();
    break;
  default:
    console.log('Not valid entry. Try again.');
}