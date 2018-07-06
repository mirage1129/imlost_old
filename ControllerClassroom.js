const Classroom = require('./ModelClassroom');

function createClass(request, response) {
  //sets the classname entered in form to classname variable  
  let classname = request.body.name;

  function callback(error, insertResult) {

//if error === true
    if(error ){
      response.send('hey this is broken');
      //TODO: change this to a redirect later XXXXXXXXXXXXXXXXXXXXXXXX
      //response.redirect('/');
    
    } else {
      response.cookie('admin', classname);
      response.redirect("/" + classname);
    } 
  }
  Classroom.createClass(classname, callback);
}


// let userCookie = request.cookies[classname + '_id'];

// if( userCookie === undefined ) {
//    }

function renderClassroom(request, response) {
  //sets the classname entered in browser to classname variable
  let classname = request.params.classname;

//callback function for createUser that takes in the new user id and sets it to a cookie for the user and then renders classroom page
    function callback(err, result) {
      if (result !== false) {
          
          response.cookie(classname + '_id', result[0].id);
          response.render('Classroom');

      } else {
        response.redirect('/');
        //if there is no result for a classroom then inform the users there is no class XXXXXXXXXXXXXXXXXXXXXXXXX put an alert to the user here
      }
    }
    Classroom.createUser(classname, callback);
  }


function directToClassroom(request, response) {
    let classname = request.query.inclass;
    response.redirect("/" + classname);
   }


module.exports = {
  createClass,
  renderClassroom: renderClassroom,
  directToClassroom: directToClassroom
}