const db = require('./db');
const Classroom = require('./ModelClassroom');


//find function that finds a classroom in the database
function findUser(id, callback) {
    let queryString = 'SELECT * FROM users WHERE id = $1';
    let values = [id]
// do a query which searches classrooms with a particular name and then runs a callback which takes in the result
    db.query(queryString, values, (findError, findResult) => {
      if(findError) {
        console.log('db error: ' + findError.message);
        callback(findError, null);
      } else {
        callback(null, findResult.rows);
      }
    })
}


//find function that finds a classroom in the database
function updateLostStatus(id, callback) {

  findUser(id, function (findError, findResult) {
      //if it finds one
      let values = [id]
      let queryString = 'UPDATE users SET lost = NOT lost WHERE id = $1';

// do a query which searches classrooms with a particular name and then runs a callback which takes in the result
      db.query(queryString, values, (updateError, updateLostResult) => {
        if(updateError) {
          console.log('db error: ' + updateError.message);
          callback(updateError, null);
        } else {
          console.log('User lost status updated')
          callback(null, updateLostResult.rows);
        }
      });
  });
};


//creates a User in the database
function createUser(classname, callback) {
//searches for a class
  Classroom.findClass(classname, function (findError, findResult) {
    //if it finds one
    if (findResult.rows.length > 0) {
      let queryString = 'INSERT INTO users (classname, lost) VALUES ($1, $2) RETURNING id';
      let values = [classname, false];
      //it inserts a user into user table with the name of the class they joined then runs a callback
      db.query(queryString, values, (insertError, userInsertResult) => {
        callback(insertError, userInsertResult.rows);
      });
    } else {
      callback (findError, false);
    }
  });
};

//go into the database and do the stuff


module.exports = {
  findUser: findUser,
  createUser: createUser,
  updateLostStatus: updateLostStatus
}