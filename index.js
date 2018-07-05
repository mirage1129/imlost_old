const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(cookieParser());

require('./Routes')(app);

const Classroom = require('./ModelClassroom');

app.get('/', (request, response) => {
  response.render('Home');
});

app.listen(3000, () => {console.log('Server started')});
