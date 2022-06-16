const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session'); 
const flash = require('connect-flash');
const passport = require('passport');

//Inicializaciones

const app = express();
require('./database');
require('./config/passport');

//Configuraciones

app.set('port', process.env.PORT || 3000); // puerto configurado en 3000
app.set('views', path.join(__dirname, 'views')); // direccion a la carpeta donde estaran las vistas de la aplicacion

/**
 * Configuracion del motor de vistas de handlebars, los archivos que normalmente finalizan en html y que determinan
 * las vistas que seran mostradas
 */

app.engine('.hbs', expressHbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialDir: path.join(app.get('views'), 'partial'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//Middlewares

app.use(express.urlencoded({ extended: false })); // recibir datos del usuario y contraseña
app.use(methodOverride('_method')); // formularios para usar otros metodos ademas de get y post
app.use(session({
    secret: 'Secreto',
    resave: true ,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Variables globales

app.use((req, res, next) => {
    res.locals.success_msg  = req.flash('success_msg');
    res.locals.error_msg    = req.flash('error_msg');
    res.locals.error        = req.flash('error');
    res.locals.user         = req.user;
    next();
})



//Rutas

app.use(require('./routes/index'));
app.use(require('./routes/login'))
app.use(require('./routes/doctor-main'));
app.use(require('./routes/paciente'));






//Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));

//Inicializacion del servidor

app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`) // prueba del servidor
});


