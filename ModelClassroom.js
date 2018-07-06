// Database setup. In practice, different models may use different databases. For example, the user model may pull information from one database while another model, e.g. pokemons, may pull information from another database.
const db = require('./db');

function find(name, callback) {
    let queryString = 'SELECT * FROM classrooms WHERE name = $1';
    let values = [name]
    db.query(queryString, values, (err, result) => {
      if(err) {
        response.send('db error: ' + err.message);
      } else {
        callback(err, result);
      }
    }) // inside Model
}

function createClass(name, callback) {
  let queryString = 'INSERT INTO classrooms (name) VALUES ($1) RETURNING id';
  let values = [name];
  db.query(queryString, values, (error, result) => {
    callback(error, result.rows[0]['name']);
  })
}

function createUser(classname, callbackTwo) {

  find(classname, function (errorOne, resultOne) {
    if (resultOne.rows.length > 0) {
      let queryString = 'INSERT INTO users (classname) VALUES ($1) RETURNING id';
      let values = [classname];
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