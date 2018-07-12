const classroom = require('./ControllerClassroom');
const user = require('./ControllerUser');


function setupRoutes(app) {
  app.post('/', classroom.createClass);
  app.get('/youare', classroom.directToClassroom);
  app.get('/admin/:classname', classroom.renderAdminClassroom);
  app.get('/lostsum', classroom.sumLostUsers);
  
  app.get('/:classname', classroom.renderClassroom);
  app.put('/:classname', user.updateLostStatus);
  app.post('/:classname', classroom.postQuestion);
};

module.exports = setupRoutes;