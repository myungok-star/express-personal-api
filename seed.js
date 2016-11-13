// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

// var new_Animation = {description: "new animation movie"}
//
// db.Animation.create(new_Animation, function(err, Animation){
// if (err){
// return console.log("Error:", err);
// }
//
// //   console.log("Created new campsite", campsite._id)
// //   process.exit(); // we're all done! Exit the program.
// // })


var animation_list = [
  {
    title: "Ratatouille",
    studio: "Pixar Animation Studios",
    poster: "http://www.imdb.com/title/tt0382932/mediaviewer/rm937921792",
    releaseDate: "June 29, 2007",
    starLikes: "Yes"
  },
  {
    title: "The Lion King",
    studio: "The Walt Dinsey Studios",
    poster: "http://www.imdb.com/title/tt0110357/mediaviewer/rm3272938240",
    releaseDate: "June 24, 1994",
    starLikes: "Yes"
  },
  {
    title: "Coraline",
    studio: "Laika Entertainment, LLC",
    poster: "http://www.imdb.com/title/tt0327597/mediaviewer/rm1274647808",
    releaseDate: "February 6, 2009"
    starLikes: "Yes"
  },
  {
    title: "Anomalisa",
    studio: "Starburns Industries",
    poster: "http://www.imdb.com/title/tt2401878/mediaviewer/rm242803200",
    releaseDate: "January 21, 2016",
    starLikes: "Yes"
  },
  {
    title: "The Lego Movie",
    studio: "Warner Bros. Animation",
    poster: "http://www.imdb.com/title/tt1490017/mediaviewer/rm1316605952",
    releaseDate: "February 7, 2014",
    starLikes: "Yes"
  },
  {
    title: "Rio",
    studio: "Blue Sky Studios",
    poster: "http://www.imdb.com/title/tt1436562/mediaviewer/rm60274688",
    releaseDate: "April 15, 2011",
    starLikes: "Yes"
  },
  {
    title: "Turbo",
    studio: "DreamWorks Animation",
    poster: "http://www.imdb.com/title/tt1860353/mediaviewer/rm142203392",
    releaseDate: "July 17, 2013",
    starLikes: "No"
  },
  {
    title: "Cloudy with a Chance of Meatballs",
    studio: "Sony Pictures Animation",
    poster: "http://www.imdb.com/title/tt0844471/mediaviewer/rm1398507520",
    releaseDate: "September 18, 2009",
    starLikes: "Yes"
  },
  {
    title: "Shaun the Sheep Movie",
    studio: "Aardman Animations",
    poster: "http://www.imdb.com/title/tt2872750/mediaviewer/rm1384114432",
    releaseDate: "August 5, 2015",
    starLikes: "Yes"
  },
  {
    title: "Despicable Me",
    studio: "Illuminiation Entertainment",
    poster: "http://www.imdb.com/title/tt1323594/mediaviewer/rm818119168",
    releaseDate: "July 9, 2010",
    starLikes: "Yes"
  },
]
