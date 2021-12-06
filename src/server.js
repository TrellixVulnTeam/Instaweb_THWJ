const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
//inicialiciaciones
const app = express();

//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
//Middlewares
app.use(express.urlencoded({extended: false}));

//variables globales

//rutas
app.use(require('./routes/index.routes'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;