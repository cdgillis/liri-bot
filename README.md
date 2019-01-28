# LIRI-BOT

### Overview:

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

LIRI uses the following commands:

* **concert-this**
* **spotify-this**
* **movie-this**
* **do-what-it-says**

### Technologies used:

* Node.js
* JavaScript

### npm packages:

* [spotify](https://www.npmjs.com/package/node-spotify-api) - A simple to use API library for the Spotify API.
* [axios](https://www.npmjs.com/package/axios) - is a Promise-based HTTP client for the browser and node.js, which was used to grab data from [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
* [dotenv](https://www.npmjs.com/package/dotenv) - a zero-dependency module that loads environment variables from a .env file into process.env.
* [Moment.js](https://www.npmjs.com/package/moment) - a free and open source JavaScript library that removes the need to use the native JavaScript Date object directly. The library is a wrapper for the Date object (in the same way that jQuery is a wrapper for JavaScript) making the object a whole lot easier to work with.


## How to Run LIRI-Bot

In your terminal/bash window, navigate to the folder called 'liri-bot'.

#### Step One: 

#### node liri.js concert-this <artist name here>

Returns a list of the upcoming shows, including the full lineup, venue name, city, and date

![concert-this-1](/images/ConcertThis1.png)
![concert-this-2](/images/ConcertThis2.png)

#### Step Two: 

#### node liri.js spotify-this <song name here>

Returns the following information about the song:

* Artist(s)
* Song name
* Link to the song on Spotify
* Album

![spotify-this-1](/images/Spotify1.png)

If no song name is provided, the program will default to "Thong Song" by Sisqo:

![spotify-this-2](/images/Spotify3-defaultSong.png)

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

![movie-this-1](/images/MovieThis2.png)

If no movie name is provided, the program will default to the movie 'Twins'.

![movie-this-2](/images/MovieThis1-defaultMovie.png)

#### Step Four: 

#### node liri.js do-what-it-says

This will output the command placed in random.txt file. For example:

![do-what-it-says-1](/images/DoWhatItSays-Movie.png)
![do-what-it-says-2](/images/DoWhatItSays-Spotify.png)
![do-what-it-says-3](/images/DoWhatItSays-Concert.png)

Thanks for reading. Enjoy Liri!

-*cdgillis*

