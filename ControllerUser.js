const User = require('./ModelUser');


function updateLostStatus(request, response) {  

  let classname = request.cookies['className'];
  let id = request.cookies['id'];

  function callback(error, insertResult) {    
	
  	 if(error ){
      response.send('hey we couldn\'t update the status!');
    	} else {
    	response.status(200);
    	}  
	}
	
	User.updateLostStatus(id, callback);
}


module.exports = {
  updateLostStatus: updateLostStatus
}