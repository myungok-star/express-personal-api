// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_Animation = {
  description: "new animation movie"
 }
//
 db.Animation.create(new_Animation, function(err, Animation) {
            if (err) {
              return console.log("Error:", err);
 console.log("Created new animation", animation._id)
 process.exit(); // we're all done! Exit the program.
 }
});


var animation_list = [
  {
    title: "Ratatouille",
    studio: "Pixar Animation Studios",
    poster: "http://www.imdb.com/title/tt0382932/mediaviewer/rm937921792",
    releaseDate: "June 29, 2007",
  },
  {
    title: "The Lion King",
    studio: "The Walt Dinsey Studios",
    poster: "http://www.imdb.com/title/tt0110357/mediaviewer/rm3272938240",
    releaseDate: "June 24, 1994",
  },
  {
    title: "Coraline",
    studio: "Laika Entertainment",
    poster: "http://www.imdb.com/title/tt0327597/mediaviewer/rm1274647808",
    releaseDate: "February 6, 2009"
  },
  {
    title: "Anomalisa",
    studio: "Starburns Industries",
    poster: "http://www.imdb.com/title/tt2401878/mediaviewer/rm242803200",
    releaseDate: "January 21, 2016",
  },
  {
    title: "The Lego Movie",
    studio: "Warner Bros. Animation",
    poster: "http://www.imdb.com/title/tt1490017/mediaviewer/rm1316605952",
    releaseDate: "February 7, 2014",
  },
  {
    title: "Rio",
    studio: "Blue Sky Studios",
    poster: "http://www.imdb.com/title/tt1436562/mediaviewer/rm60274688",
    releaseDate: "April 15, 2011",
  },
  {
    title: "Turbo",
    studio: "DreamWorks Animation",
    poster: "http://www.imdb.com/title/tt1860353/mediaviewer/rm142203392",
    releaseDate: "July 17, 2013",
  },
  {
    title: "Cloudy with a Chance of Meatballs",
    studio: "Sony Pictures Animation",
    poster: "http://www.imdb.com/title/tt0844471/mediaviewer/rm1398507520",
    releaseDate: "September 18, 2009",
  },
  {
    title: "Shaun the Sheep Movie",
    studio: "Aardman Animations",
    poster: "http://www.imdb.com/title/tt2872750/mediaviewer/rm1384114432",
    releaseDate: "August 5, 2015",
  },
  {
    title: "Despicable Me",
    studio: "Illuminiation Entertainment",
    poster: "http://www.imdb.com/title/tt1323594/mediaviewer/rm818119168",
    releaseDate: "July 9, 2010",

  }
]

var studio_list = [
{
  name: "Walt Disney Studios",
  location: "California, USA"
},
{
  name: "Aardman Animations",
  location: "Bristol, UK"
},
{
  name: "Illuminiation Entertainment",
  location: "California, USA"
},
{
  name: "Sony Pictures Animation",
  location: "California, USA"
},
{
  name: "DreamWorks Animation",
  location: "California, USA"
},
{
  name: "Blue Sky Studios",
  location: "Connecticut, USA"
},
{
  name: "Warner Bros. Animation",
  location: "California, USA"
},
{
  name: "Starburns Industries",
  location: "California, USA"
},
{
  name: "Pixar Animation Studios",
  location: "California, USA"
},
{
  name: "Laika Entertainment",
  location: "Oregon, USA"
}
]

db.Animation.remove({}, function(err, animation) {
  console.log('removed all animation');
  db.Animation.create(animation_list, function(err, animation){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all animation');
    console.log("created", animation.length, "animation");
  });
});


// db.Studio.remove({}, function(err, studios) {
//   console.log('removed all studios');
//   db.Studio.create(studio_list, function(err, studios){
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('recreated all studios');
//     console.log("created", studios.length, "studios");
// })
// });
    // db.Animation.remove({}, function(err, animation){
    //   console.log('removed all animation');
    //   animation_list.forEach(function (animationData) {
    //     var animation = new db.Animation({
    //       title: animationData.title,
    //       studio: animationData.studio,
    //       poster: animationData.poster,
    //       releaseDate: animationData.releaseDate
    //     });
    //     db.Studio.findOne({name: animationData.studio}, function (err, foundStudio) {
    //       console.log('found studio ' + foundStudio.name + ' for animation ' + animation.title);
    //       if (err) {
    //         console.log(err);
    //         return;
    //       }
    //       animation.studio = foundStudio;
    //       animation.save(function(err, savedAnimation){
    //         if (err) {
    //           return console.log(err);
    //         }
    //         console.log('saved ' + savedAnimation.title + ' by ' + foundStudio.name);
    //       });
    //     });
    //   });
    // });
