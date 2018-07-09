const db = require('./db');

//find function that finds a classroom in the database
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
  find(className, function (findError, findResult) {
    //if it finds one
    if (findResult.rows.length === 0) {
      let queryString = 'INSERT INTO classrooms (name) VALUES ($1) RETURNING name';
      let values = [className];
    //do a query which inserts a class into classroom table and then run a callback which takes in the name
      db.query(queryString, values, (insertError, classInsertResult) => {
          console.log(classInsertResult.rows[0])
        callback(insertError, classInsertResult.rows[0]['name']);
      });
    } else { 
      callback(true, {});
    }
  });
};



module.exports = {
  find: find,
  createClass: createClass,
}