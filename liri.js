require("dotenv").config();

var keys = require("./keys");
var axios = require("axios");
// var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];
var userChoice = process.argv[3];
console.log(userChoice);

switch (userCommand) {
    case "concert-this":
        console.log("You hit concert-this.");
        axios.get("https://rest.bandsintown.com/artists/" + userChoice + "/events?app_id=codingbootcamp").then(
            function (response) {
                // console.log(response.data);
                var concerts = response.data; //reference to the array we are pulling the data from
                for (var i = 0; i < concerts.length; i++) {
                    var currentElement = concerts[i]; // LOOPING THROUGH ARRAYS   

                    var moment = require('moment'); // ???
                    moment().subtract(10, 'days').calendar(); // ???

                    console.log("\n" + "* * * " + currentElement.lineup + " * * *");
                    console.log("\n" + "Venue: " + currentElement.venue.name);
                    console.log("City: " + currentElement.venue.city + ", " + (currentElement.venue.region || currentElement.venue.country));
                    console.log("Date: " + currentElement.datetime); //Need to add MM/DD/YYYY format using MomentJS
                    console.log("\n" + "-------------------------------------------------");
                };
            });
        break;
    case "spotify-this-song":
        console.log("You hit spotify.");
        break;
    case "movie-this":
        console.log("You hit movie-this.");
        break;
    case "do-what-it-says":
        console.log("You hit do-what-it-says.");
        break;
    default:
        console.log("Please enter a valid command. Thank you.");
        break;
}