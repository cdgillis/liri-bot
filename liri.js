// LOADING MODULES

require("dotenv").config();

var fs = require("fs");
var keys = require("./keys");
var axios = require("axios");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// ARGUMENTS

var caseInput = process.argv[2];
var nameInput = process.argv[3];

// ERROR FUNCTION

function errorFunction(error) {
    if (error) {
        return console.log("Error occured: ", error);
    };
};

// SWITCH FUNCTION

switch (caseInput) {

    // CONCERT THIS
    case "concert-this":
        concertThis();
        break;
        // SPOTIFY THIS SONG
    case "spotify-this":
        spotifyThis();
        break;
        // MOVIE THIS
    case "movie-this":
        movieThis();
        break;
        // DO WHAT IT SAYS
    case "do-what-it-says":

        fs.readFile("random.txt", "utf8", function (error, data) {
            errorFunction();
            var randomArray = data.split(",");
            nameInput = randomArray[1];
            caseInput = randomArray[0];
            switch (caseInput) {
                case "spotify-this":
                    spotifyThis();
                    break;
                case "concert-this":
                    concertThis();
                    break;
                case "movie-this":
                    movieThis();
                    break;
            };
        });
        break;

    default:
        console.log("\nSorry, '" + caseInput + "' is not a command recognized by Liri. Please try one of the following: \n\n  1. To perform a random search, type: node liri.js do-what-it-says \n  2. To search for movie statistics, type: node liri.js movie-this <with a movie title following> \n  3. To search a song on Spotify, type: node liri.js spotify-this <specify song title>\n");
        break;
};

// FUNCTIONS

function concertThis() {
    // GET THE DATA
    axios.get("https://rest.bandsintown.com/artists/" + nameInput + "/events?app_id=codingbootcamp")
        .then(function (response) {
            errorFunction();
            // SIMPLIFY RESULTS
            var concerts = response.data; // A reference to the array we are pulling the data from.
            // FOR LOOP
            for (var i = 0; i < concerts.length; i++) {
                // FURTHER SIMPLIFY RESULTS
                var concertObj = concerts[i]; // LOOPING THROUGH ARRAYS   
                // PRINT RESULTS with node.js liri.js in the Terminal 
                console.log("\n" + "* * * " + concertObj.lineup + " * * *"),
                    console.log("\n" + "Venue: " + concertObj.venue.name),
                    console.log("City: " + concertObj.venue.city + ", " + (concertObj.venue.region || concertObj.venue.country)),
                    console.log("Date: " + moment(concertObj.datetime).format('MM/DD/YYYY')), // MM/DD/YYYY format using MomentJS
                    console.log("\n-------------------------------------------------")
            };
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.concerts.venue.name);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            };
        });
};


function spotifyThis() {
    // ASSIGN DEFAULT SONG
    if (nameInput == null) {
        nameInput = "Thong Song"
    } { // SEARCH SPOTIFY 
        spotify.search({
                type: 'track',
                query: nameInput
            }) // GET THE DATA 
            .then(function (response) {
                errorFunction();
                // SIMPLIFY RESULTS
                var spotifyObj = response.tracks.items[0];
                // PRINT RESULTS
                console.log("SPOTIFY RESULTS");
                console.log("\n---------------------------------\n");
                console.log("Track Name: \n'" + spotifyObj.name + "' by " + spotifyObj.artists[0].name);
                console.log("\nLink to Spotify: \n" + spotifyObj.external_urls.spotify);
                console.log("\nAlbum: \n" + spotifyObj.album.name);
                console.log("\n---------------------------------\n");
            });
    };
};

function movieThis() {
    // ASSIGN DEFAULT MOVIE
    if (nameInput == null) {
        nameInput = "Twins"
    } { // GET THE DATA 
        axios.get("https://www.omdbapi.com/?t=" + nameInput + "&y=&plot=short&apikey=6bf18958")
            .then(function (response) {
                errorFunction();
                // SIMPLIFY RESULTS
                var movieObj = response.data;
                // PRINT RESULTS
                console.log("MOVIE STATS");
                console.log("---------------------------------------------------------------------\n");
                console.log("* * * " + movieObj.Title + " * * *\n");
                console.log("Year of Release: " + movieObj.Year);
                console.log("IMDB Rating:     " + movieObj.imdbRating);
                console.log("Rotten Tomatoes: " + movieObj.Ratings[1].Value);
                console.log("Produced in:     " + movieObj.Country);
                console.log("Language:        " + movieObj.Language);
                console.log("Starring:        " + movieObj.Actors);
                console.log("Plot Summary:    " + movieObj.Plot);
                console.log("\n---------------------------------------------------------------------\n")
            })
            // HANDLE ERRORS
            .catch(function (error) {
                if (error.response) {
                    console.log(error.movieObj);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                };
            });

    };
};