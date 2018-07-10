const Classroom = require('./ModelClassroom');
const User = require('./ModelUser');

function createClass(request, response) {
  //sets the classname entered in form to classname variable  
  let classname = request.body.name;

  function callback(error, insertResult) {

//if error === true
    if(error ){
      response.send('hey this class is already taken! Wait 12 hours!');
      //TODO: change this to a pop ul message later XXXXXXXXXXXXXXXXXXXXXXXX
      //response.redirect('/');
    
    } else {
      response.cookie('admin', classname);
      response.redirect('/admin/' + classname);
     //response.redirect('/' + classname)
    } 
  }
  Classroom.createClass(classname, callback);
}


function renderClassroom(request, response) {
  //sets the classname entered in browser to classname variable
  let classname = request.params.classname;

//callback function for createUser that takes in the new user id and sets it to a cookie for the user and then renders classroom page
    function callback(err, result) {
      if (result !== false) {
          
          response.cookie(classname + '_id', result[0].id);
          response.cookie('className', classname);
          response.cookie('id', result[0].id);
          response.render('User_Classroom');

      } else {
        response.send('hey this class doesnt exist!');
      }
    }
    User.createUser(classname, callback);
  }


function directToClassroom(request, response) {
    let classname = request.query.inclass;
    response.redirect('/' + classname);
   }


function sumLostUsers(request, response) {
    
  let classname = request.cookies['admin'];

  let callback = function(err, count) {
    if (err) { 
      response.send('theres an error from the database')
    } else {
      response.send(count);
    }
  }

  Classroom.sumLostUsers(classname, callback);
 }

function renderAdminClassroom(request, response) {
    response.render('Admin_Classroom');
   }



module.exports = {
  createClass: createClass,
  renderClassroom: renderClassroom,
  directToClassroom: directToClassroom,
  sumLostUsers: sumLostUsers,
  renderAdminClassroom: renderAdminClassroom
}