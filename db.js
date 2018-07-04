const pg = require('pg');
const config = {
  user: 'meraj',
  host: '127.0.0.1',
  database: 'imlost',
  port: 5432,
};
const db = new pg.Pool(config);

module.exports = db;