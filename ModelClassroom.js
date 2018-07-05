// Database setup. In practice, different models may use different databases. For example, the user model may pull information from one database while another model, e.g. pokemons, may pull information from another database.
const db = require('./db');

function find(name, callbackFromController) {
    let queryString = 'SELECT * FROM classrooms WHERE name = $1';
    let values = [name]
    db.query(queryString, values, callbackFromController) // inside Model
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
  create
}