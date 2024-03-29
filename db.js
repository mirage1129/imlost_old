const pg = require('pg');
var configs;
//require the url library
//this comes with node, so no need to yarn add
const url = require('url');

//check to see if we have this heroku environment variable
if( process.env.DATABASE_URL ){

  //we need to take apart the url so we can set the appropriate configs
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  //make the configs object
  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{
  //otherwise we are on the local network
  configs = {
	  user: 'meraj',
	  host: '127.0.0.1',
	  database: 'imlost',
	  port: 5432
	};
}

//this is the same
const db = new pg.Pool(configs);
db.on('error', function(error, client) {

})
module.exports = db;