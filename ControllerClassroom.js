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


function find(req, res) {
    let classname = req.params.classname;
    
    function callback(err, result) {
        if (result.rows.length > 0) {
            res.render('Classroom')
        } else {
            res.redirect('/');
        }
    }
    
    Classroom.find(classname, callback);
}


function join(req, res) {
    let classname = req.query.inclass;
    console.log(classname);
    console.log(req.query);
    function callback(err, result) {
        if (result.rows.length > 0) {
            res.render('Classroom')
        } else {
            res.redirect('/');
        }
    }
    
    Classroom.find(classname, callback);
}


module.exports = {
  create,
  find,
  join
}