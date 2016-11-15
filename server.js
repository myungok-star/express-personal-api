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
      {method: "GET", path: "/api/animation", description: "Animation movies"} // CHANGE ME
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


//get all animation
app.get('/api/animation', function (req, res) {
  // send all animation as JSON response
  db.Animation.find().populate('animation')
    .exec(function(err, animation) {
      if (err) { return console.log("index error: " + err); }
      res.json(animation);
  });
});

// get one animation
app.get('/api/animation/:id', function (req, res) {
  db.Animation.findOne({_id: req.params._id }, function(err, data) {
    res.json(data);
  });
});

// create new animation
app.post('/api/animation', function (req, res) {
  // create new animation with form data (`req.body`)
  var newAnimation = new db.Animation({
    title: req.body.title,
    studio: req.body.studio,
    poster: req.body.poster,
    releaseDate: req.body.releaseDate,
  });
  // find the studio from req.body
  db.Studio.findOne({name: req.body.studio}, function(err, studio){
    if (err) {
      return console.log(err);
    }
    // add this author to the book
    newAnimation.studio = studio;


    // save newBook to database
    newAnimation.save(function(err, animation){
      if (err) {
        return console.log("save error: " + err);
      }
      console.log("saved ", animation.title);
      // send back the animation!
      res.json(animation);
    });
  });
});

// delete animation
app.delete('/api/animation/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('animation delete', req.params);
  var animationId = req.params.id;
  // find the index of the animation we want to remove
  db.Animation.findOneAndRemove({ _id: animationId }, function (err, deletedAnimation) {
    res.json(deletedAnimation);
  });
});

// Create a character associated with a book
app.post('/api/animation/:animation_id/characters', function (req, res) {
  // Get animation id from url params (`req.params`)
  var animationId = req.params.animation_id;
  db.Animation.findById(animationId)
    .populate('studio') // Reference to studio
    // now we can worry about saving that character
    .exec(function(err, foundAnimation) {
      console.log(foundAnimation);
      if (err) {
        res.status(500).json({error: err.message});
      } else if (foundAnimation === null) {
        // Is this the same as checking if the foundBook is undefined?
        res.status(404).json({error: "No Animation found by this ID"});
      } else {
        // push character into characters array
        foundAnimation.characters.push(req.body);
        // save the book with the new character
        foundAnimation.save();
        res.status(201).json(foundAnimation);
      }
    }
  );
});






/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
