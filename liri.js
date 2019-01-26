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
                // console.log(response.data);
                var concerts = response.data; //reference to the array we are pulling the data from
                for (var i = 0; i < concerts.length; i++) {
                    var currentElement = concerts[i]; // LOOPING THROUGH ARRAYS   

                    console.log("\n" + "* * * " + currentElement.lineup + " * * *");
                    console.log("\n" + "Venue: " + currentElement.venue.name);
                    console.log("City: " + currentElement.venue.city + ", " + (currentElement.venue.region || currentElement.venue.country));
                    console.log("Date: " + moment(currentElement.datetime).format('MM/DD/YYYY')); // MM/DD/YYYY format using MomentJS
                    console.log("\n" + "-------------------------------------------------");
                };
            });
        break;

        // SPOTIFY THIS SONG

    case "spotify-this-song":
        // console.log("You hit spotify.");
      
        if (nameInput === "") {

            nameInput = "Thong Song";
        } {
            spotify.search({
                    type: 'track',
                    query: nameInput
                })
                .then(function (response) {

                    var spotifyObj = response.tracks.items[0];
                
                    console.log("\n\nSPOTIFY RESULTS");
                    console.log("---------------------------------\n");
                    console.log("Track Name: \n'" + spotifyObj.name + "' by " + spotifyObj.artists[0].name);
                    console.log("\nLink to Spotify: \n" + spotifyObj.external_urls.spotify);
                    console.log("\nAlbum: \n" + spotifyObj.album.name);
                    console.log("\n---------------------------------\n");
                })
        }
};

// FIRST ATTEMPT AT SPOTIFY

//     spotify.search({
//         type: 'track',
//         query: 'All the Small Things'
//     }, function (err, data) {
//         if (err) {
//             return console.log('Error occurred: ' + err);
//         }
//         console.log(data);
//     });

//     for (var i = 0; i < spotifySong.length; i++) {
//         var currentElement = spotifySong[i];
//         console.log("\n"
//             "* * * " + currentElement)
//     }
// }


// break;
// case "movie-this":
// console.log("You hit movie-this.");
// break;
// case "do-what-it-says":
// console.log("You hit do-what-it-says.");
// break;
// default:
// console.log("Please enter a valid command. Thank you.");
// break;
// }