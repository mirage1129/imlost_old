const classroom = require('./ControllerClassroom');

function setupRoutes(app) {
  app.post('/', classroom.create);
  app.get('/youare', classroom.directToClassroom);
  app.get('/:classname', classroom.renderClassroom)


};

module.exports = setupRoutes;