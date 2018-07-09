const classroom = require('./ControllerClassroom');
const user = require('./ControllerUser');


function setupRoutes(app) {
  app.post('/', classroom.createClass);
  app.get('/youare', classroom.directToClassroom);
  app.get('/:classname', classroom.renderClassroom)
};

module.exports = setupRoutes;