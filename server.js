// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/myungok-star/express-personal-api/blob/master/README.md", // CHANGE ME
    baseUrl: "https://stormy-springs-67992.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "GET", path: "/api/animation", description: "E.g. Create a new animation movie"} // CHANGE ME
    ]
  })
});

app.get('/api/profile', function profile_show(req, res){
  res.json({
    name: "Star",
    class: "WDI 33",
    currentCity: "San Francisco, CA",
    hobbies: [
      "Arts",
      "Crafts"],
    githubLink: "https://www.github.com/myungok-star",
    portfolio_url: "https://www.github.com/myungok-star/myungok-star.github.io",
  });

});

// app.get('/api/animation', function animation_like(req, res) {
//   //send all animation as JSON response
//   db.Animation.find(function(err, animation) {
//     if (err) {return console.log("index error: " + err); }
//     res.json(animation);
//   });
// });

app.get('/api/animation', function (req, res) {
  // send all books as JSON response
  db.Animation.find().populate('animation')
    .exec(function(err, animation) {
      if (err) { return console.log("index error: " + err); }
      res.json(animation);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
