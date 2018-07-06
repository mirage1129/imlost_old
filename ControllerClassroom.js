const Classroom = require('./ModelClassroom');

function create(request, response) {
  let classname = request.body.name;
  function callback(error, result) {
    if (error) {
      console.log(error.message);
    } else {
      response.cookie('admin', classname);
      response.redirect('/');
    }
  };

  Classroom.createClass(classname, callback);
}


function renderClassroom(request, response) {
    let classname = request.params.classname;
    
    // if (request.cookies[classname + '_id']) { 
    //   response.render('Classroom');

    // } else  { 

      function callback(err, result) {
        if (result !== false) {
          response.cookie(classname + '_id', result[0].id);
          response.render('Classroom');
        } else {
          response.redirect('/');
        }
        
      }
      
      Classroom.createUser(classname, callback);
    }
// }


function directToClassroom(request, response) {
    let classname = request.query.inclass;
    response.redirect("/" + classname);
   }


//     let classname = request.query.inclass;

//     function callback(err, result) {
//         if (result.rows.length > 0) {
//           response.cookie('user', classname);
//           response.render('Classroom')
//         } else {
//             response.redirect('/');
//         }
//     }
    
//     Classroom.find(classname, callback);
// }


module.exports = {
  create,
  renderClassroom: renderClassroom,
  directToClassroom: directToClassroom
}