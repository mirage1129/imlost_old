const db = require('./db');
const Classroom = require('./ModelClassroom');

function createUser(classname, callback) {
//searches for a class
  Classroom.find(classname, function (findError, findResult) {
    //if it finds one
    if (findResult.rows.length > 0) {
      let queryString = 'INSERT INTO users (classname) VALUES ($1) RETURNING id';
      let values = [classname];
      //it inserts a user into user table with the name of the class they joined then runs a callback
      db.query(queryString, values, (insertError, userInsertResult) => {
        callback(insertError, userInsertResult.rows);
      });
    } else {
      callback (findError, false);
    }
  });
};


module.exports = {
  createUser: createUser
}