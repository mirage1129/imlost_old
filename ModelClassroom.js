const db = require('./db');

function find(className, callback) {
    let queryString = 'SELECT * FROM classrooms WHERE name = $1';
    let values = [className]
// do a query which searches classrooms with a particular name and then runs a callback which takes in the result
    db.query(queryString, values, (err, result) => {
      if(err) {
        response.send('db error: ' + err.message);
      } else {
        callback(err, result);
      }
    })
}


function createClass(className, callback) {
  //searches for a class
  find(className, function (errorOne, findResult) {
    //if it finds one
    if (findResult.rows.length === 0) {
      let queryString = 'INSERT INTO classrooms (name) VALUES ($1) RETURNING name';
      let values = [className];
    //do a query which inserts a class into classroom table and then run a callback which takes in the name
      db.query(queryString, values, (dbError, insertResult) => {
          console.log(insertResult.rows[0])
        callback(dbError, insertResult.rows[0]['name']);
      });
    } else { 
      callback(true, {});
    }
  });
};

function createUser(classname, callbackTwo) {
//searches for a class
  find(classname, function (errorOne, resultOne) {
    //if it finds one
    if (resultOne.rows.length > 0) {
      let queryString = 'INSERT INTO users (classname) VALUES ($1) RETURNING id';
      let values = [classname];
      //it inserts a user into user table with the name of the class they joined then runs a callback
      db.query(queryString, values, (errorTwo, resultTwo) => {
        callbackTwo(errorTwo, resultTwo.rows);
      });
    } else {
      callbackTwo(errorOne, false);
    }
  });
};

module.exports = {
  find: find,
  createClass: createClass,
  createUser: createUser
}