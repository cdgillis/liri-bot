// Loading Modules
require("dotenv").config();

var keys = require("./keys");
var axios = require("axios");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var caseInput = process.argv[2]; // formerly userCommand
var nameInput = process.argv[3];
// console.log(nameInput);

// function command(arg) {

//     switch (arg) {
//         case 'concert-this':
//             {
//                 bands(nameInput);
//                 break;
//             }
//         case 'spotify-this-song':
//             {
//                 spotifyThis(nameInput);
//                 break;
//             }
//         case 'movie-this':
//             console.log("You hit movie-this."); {
//                 if (!nameInput) nameInput = "Mr. Nobody";
//                 omdb(nameInput);
//                 break;
//             }
//         case 'do-what-it-says':
//             console.log("You hit do-what-it-says."); {
//                 doWhatItSays();
//             }
//     }
// }

switch (caseInput) {

    // CONCERT THIS

    case "concert-this":
        console.log("You hit concert-this.");
        axios.get("https://rest.bandsintown.com/artists/" + nameInput + "/events?app_id=codingbootcamp").then(
            function (response) {
                // SIMPLIFY RESULTS
                var concerts = response.data; //reference to the array we are pulling the data from
                // FOR LOOP
                for (var i = 0; i < concerts.length; i++) {
                    // FURTHER SIMPLIFY RESULTS
                    var concertObj = concerts[i]; // LOOPING THROUGH ARRAYS   
                    // PRINT RESULTS
                    console.log("\n" + "* * * " + concertObj.lineup + " * * *");
                    console.log("\n" + "Venue: " + concertObj.venue.name);
                    console.log("City: " + concertObj.venue.city + ", " + (concertObj.venue.region || concertObj.venue.country));
                    console.log("Date: " + moment(concertObj.datetime).format('MM/DD/YYYY')); // MM/DD/YYYY format using MomentJS
                    console.log("\n" + "-------------------------------------------------");
                };
            });
        break;

        // SPOTIFY THIS SONG

    case "spotify-this-song":
        // console.log("You hit spotify.");
        // ASSIGN DEFAULT SONG
        if (nameInput == null) {
            nameInput = "Thong Song"
        } { // SEARCH SPOTIFY 
            spotify.search({
                    type: 'track',
                    query: nameInput
                }) // GET THE DATA 
                .then(function (response) {
                    // SIMPLIFY RESULTS
                    var spotifyObj = response.tracks.items[0];
                    // PRINT RESULTS
                    console.log("\n\nSPOTIFY RESULTS");
                    console.log("---------------------------------\n");
                    console.log("Track Name: \n'" + spotifyObj.name + "' by " + spotifyObj.artists[0].name);
                    console.log("\nLink to Spotify: \n" + spotifyObj.external_urls.spotify);
                    console.log("\nAlbum: \n" + spotifyObj.album.name);
                    console.log("\n---------------------------------\n");
                })
        }
        break;

        // MOVIE THIS

    case "movie-this":
        // console.log("You hit movie-this.");
        // ASSIGN DEFAULT MOVIE
        if (nameInput == null) {
            nameInput = "Twins"
        } { // GET THE DATA 
            axios.get("https://www.omdbapi.com/?t=" + nameInput + "&y=&plot=short&apikey=6bf18958")
                .then(function (response) {
                    // SIMPLIFY RESULTS
                    var movieObj = response.data;
                    // PRINT RESULTS
                    console.log("\n\nMOVIE STATS");
                    console.log("---------------------------------------------------------------------\n");
                    console.log("* * * " + movieObj.Title + " * * *\n");
                    console.log("Year of Release: " + movieObj.Year);
                    console.log("IMDB Rating:     " + movieObj.imdbRating);
                    console.log("Rotten Tomatoes: " + movieObj.Ratings[1].Value);
                    console.log("Produced in:     " + movieObj.Country);
                    console.log("Language:        " + movieObj.Language);
                    console.log("Starring:        " + movieObj.Actors);
                    console.log("Plot Summary:    " + movieObj.Plot);
                    console.log("\n---------------------------------------------------------------------\n");
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
                    }
                })
        }
        break;
        // DO WHAT IT SAYS

        // case "do-what-it-says":
        // console.log("You hit do-what-it-says.");
        // break;
}



// default:
// console.log("Please enter a valid command. Thank you.");
// break;