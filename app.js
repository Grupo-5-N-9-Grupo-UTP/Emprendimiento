import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path'; // Para acceder al directorio actual 


const app = express();
// const passport = require("passport");
// const flash = require('connect-flash');

// Conexión base de datos 
const mongoose = require('mongoose'); 
// const uri = 'mongodb://localhost:27017/emprendimientodb'; 
const uri = 'mongodb+srv://AdminEmp:emprendimientodb@javi.nwzy8.mongodb.net/emprendimientodb?retryWrites=true&w=majority'; 
const options = {useNewUrlParser: true, useUnifiedTopology: true}; 

mongoose.connect(uri, options).then( // Or using promises 
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
    () => { console.log('DB Conectada') }, 
    err => { console.log(err) }
);


//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(passport.initialize());
// app.use(passport.session());

// app.use((req, res, next) => {
//     app.locals.signupMessage = req.flash('signupMessage');
//     app.locals.signinMessage = req.flash('signinMessage');
//     app.locals.user = req.user;
// });

// Rutas
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
app.use('/api', require('./routes/user'));

// Middleware para Vue.js router modo history 
const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));

// Puerto
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port'+ app.get('puerto'));
});