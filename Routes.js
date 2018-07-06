const classroom = require('./ControllerClassroom');

function setupRoutes(app) {
  app.post('/', classroom.createClass);
  app.get('/youare', classroom.directToClassroom);
  app.get('/:classname', classroom.renderClassroom)


};

module.exports = setupRoutes;