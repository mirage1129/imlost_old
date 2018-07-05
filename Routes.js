const classroom = require('./ControllerClassroom');

function setupRoutes(app) {
  app.post('/', classroom.create);
  app.get('/youare', classroom.join);
  app.get('/:classname', classroom.find)


};

module.exports = setupRoutes;