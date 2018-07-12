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
  response.render('home');
});


const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));
