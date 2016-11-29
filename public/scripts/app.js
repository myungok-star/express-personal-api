console.log("Sanity Check: JS is working!");


var template;
var $animationList;
var allAnimationMovies = [];

$(document).ready(function(){

// // your code
//   $('submit').on('click', function handleClick(event){
//     //TODO: prevent default Here
//
//     //TODO: create an ajax request to send data to backend server.
``

      $animationList = $('#animationTarget');

      // compile handlebars template
      var source = $('#animation-template').html();
      template = Handlebars.compile(source);

      $.ajax({
        method: 'GET',
        url: '/api/animations',
        success: handleSuccess,
        error: handleError
      });

      $('#newAnimationForm').on('submit', function(e) {
        e.preventDefault();
        console.log('new animation serialized', $(this).serializeArray());
        $.ajax({
          method: 'POST',
          url: '/api/animations',
          data: $(this).serializeArray(),
          success: newAnimationSuccess,
          error: newAnimationError
        });
      });

      $animationList.on('click', '.deleteBtn', function() {
        console.log('clicked delete button to', '/api/animation/'+$(this).attr('data-id'));
        $.ajax({
          method: 'DELETE',
          url: '/api/animations/'+$(this).attr('data-id'),
          success: deleteAnimationSuccess,
          error: deleteAnimationError
        });
      });

      $animationList.on('submit', '#addCharacterForm', function(e) {
        e.preventDefault();
        console.log('new characters');
        $.ajax({
          method: 'POST',
          url: '/api/animations/'+$(this).attr('data-id')+'/characters',
          data: $(this).serialize(),
          success: newCharacterSuccess,
          error: newCharacterError
        });
      });

    });

    // helper function to render all posts to view
    // note: we empty and re-render the collection each time our post data changes
    function render () {
      // empty existing posts from view
      $animationList.empty();

      // pass `allAnimationMovies` into the template function
      var animationHtml = template({ animations: allAnimationMovies });
      console.log(animationHtml)

      // append html to the view
      $animationList.append(animationHtml);
    }

    function handleSuccess(json) {
      console.log(json);
      allAnimationMovies = json;
      render();
    }

    function handleError(e) {
      console.log('uh oh');
      $('#animationTarget').text('Failed to load animation, is the server working?');
    }

    function newAnimationSuccess(json) {
      $('#newAnimationForm input').val('');
      allAnimationMovies.push(json);
      render();
    }

    function newAnimationError() {
      console.log('newAnimation error!');
    }

    function deleteAnimationSuccess(json) {
      var animation = json;
      console.log(json);
      var animationId = animation._id;
      console.log('delete animation', animationId);
      // find the book with the correct ID and remove it from our allBooks array
      for(var index = 0; index < allAnimationMovies.length; index++) {
        if(allAnimationMovies[index]._id === animationId) {
          allAnimationMovies.splice(index, 1);
          break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
        }
      }
      render();
    }

    function deleteAnimationError() {
      console.log('deleteAnimation error!');
    }

    function newCharacterSuccess(json) {
      var animation = json;
      var animationId = animation._id;
      // find the book with the correct ID and update it
      for(var index = 0; index < allAnimationMovies.length; index++) {
        if(allAnimationMovies[index]._id === animationId) {
          allAnimationMovies[index] = animation;
          break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
        }
      }
      render();
    }

    function newCharacterError() {
      console.log('adding new character error!');
    }
