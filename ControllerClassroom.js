const Classroom = require('./ModelClassroom');

function create(request, response) {
  function callback(error, result) {
    if (error) {
      console.log(error.message);
    } else {
      response.cookie('login', result);
      response.redirect('/');
    }
  };

  Classroom.create(request.body.name, callback);
}


module.exports = {
  create
}