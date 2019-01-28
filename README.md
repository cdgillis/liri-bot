# LIRI-BOT

### Overview:

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

LIRI uses the following commands:

> concert-this
> spotify-this
> movie-this
> do-what-it-says

### Technologies used:

* Node.js
* JavaScript

### npm packages:

[spotify](https://www.npmjs.com/package/node-spotify-api) - A simple to use API library for the Spotify API.
[axios](https://www.npmjs.com/package/axios) - used to grab data from [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
[dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
[Moment](https://www.npmjs.com/package/moment)


## How to Run LIRI-Bot

In your terminal/bash window, navigate to the folder called 'liri-bot'.

#### Step One: 

#### node liri.js concert-this <artist name here>

Returns a list of the upcoming shows, including the full lineup, venue name, city, and date

#### Step Two: 

#### node liri.js spotify-this <song name here>

Returns the following information about the song:

* Artist(s)
* Song name
* Link to the song on Spotify
* Album

If no song name is provided, the program will default to "Thong Song" by Sisqo

#### Step Three: 

#### node liri.js movie-this <movie name here>

This will output the following information to your terminal/bash window:

* Title of the movie
* Year movie was released
* IMDB Rating
* Rotten Tomatoes Rating
* Country where movie produced
* Language
* Actors starring in the movie
* Plot Summary

If no movie name is provided, the program will default to the movie 'Twins'.

#### Step Four: 

#### node liri.js do-what-it-says

This will output the command placed in random.txt file
