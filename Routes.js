const classroom = require('./ControllerClassroom');

function setupRoutes(app) {
  app.post('/', classroom.create);


  app.get('/:classname', classroom.find)

	app.get('/classroom', (request, response) => {
  response.render('Classroom');
});


};

module.exports = setupRoutes;