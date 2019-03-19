const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

//Load server
const app = require('./src/config/server');

//Database
const db = require('./src/config/dbconnection');

//Test Database
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error:'+ err))

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

//Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//app.set('views', path.join(__dirname, 'app/views'));

//Principal route
app.get('/', (req, res) => res.render('principal', { layout: 'landing' }));

//Airports route
app.use('/airport', require('./src/app/routes/airport'));

//Rutas route
app.use('/rutas', require('./src/app/routes/ruta'));

//Pasaje route
//app.use('/venta', require('./src/app/routes/venta'));

//Start
app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}...`));