const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();
//import routes
const customerRoutes = require('./routes/customer');
// Configre express
// Set port for server
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middelwares (user requests)
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host:'localhost',
  user:'root',
  password: 'toor',
  port:3306,
  database: 'crudsaa'
}, 'single'));
//para usar los datos del form
//desde el modilo de express referir un metodo que permita entender todos los datos
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', customerRoutes);
//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log("Server on port 3000");
});
