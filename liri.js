require("dotenv").config();

var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
var commandName = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");

var spotify = new Spotify(keys.spotify);

function concertThis() {
  var myUrl = "https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp";

  axios.get(myUrl)
    .then(function(response) {
      for(i = i; i < response.data.length; i++) {
        var day = moment(response.data[i].datetime).format("dddd, MMMM Do YYYY, h:mm:ss a");
        console.log("---------------------------------------");
        console.log(`Venue Name: ${response.data[i].venue.name}`);
        console.log(`Venue Location : ${response.data[i].venue.city}, ${response.data[i].venue.region}`)
        console.log(`Event Date: ${day}`)
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

function spotifyThisSong() {

  spotify.search({ type: 'track', query: userSearch }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  
  for(i = 0; i < data.tracks.items.length; i++){
    console.log("---------------------------------------");
    console.log(`Artist: ${data.tracks.items[i].artists[0].name}`)
    console.log(`Song Name: ${data.tracks.items[i].name}`)
    console.log(`Album Name: ${data.tracks.items[i].album.name}`)
    console.log(`Preview Link: ${data.tracks.items[i].preview_url}`)
    }
  });
}

function movieThis() {
  var myUrl = 'http://www.omdbapi.com/?apikey=trilogy&t=' + userSearch
}

function doWhatItSays() {
  console.log(process.argv)
  console.log(userSearch)
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