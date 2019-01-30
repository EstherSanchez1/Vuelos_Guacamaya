const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//configuracion
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

module.exports = app;