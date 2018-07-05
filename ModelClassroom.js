// Database setup. In practice, different models may use different databases. For example, the user model may pull information from one database while another model, e.g. pokemons, may pull information from another database.
const db = require('./db');

// Model functions that my controllers might need. Notice how all database calls exist here and not in the controller. Control is passed back to the controller (sort of) by having the controller pass in a callback function, which the model functions then call (i.e. they call the callback functions) with the query results as parameters. Not ideal, yes, and it will get messy if you have nested queries from different models. For an example, see the one in index.js corresponding to the root route, which calls functions from both the task and user models.
function find(id, callback) {
  db.query('SELECT * FROM classrooms WHERE id = $1', [id], (error, result) => {
    callback(result.rows[0]);
  })
}


function create(name, callback) {
  let queryString = 'INSERT INTO classrooms (name) VALUES ($1) RETURNING id';
  let values = [name];
  db.query(queryString, values, (error, result) => {
    callback(error, result.rows[0]['name']);
  })
};

module.exports = {
  find,
  create,
}