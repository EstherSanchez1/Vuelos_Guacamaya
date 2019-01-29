const express = require('express');
const path = require('path');
const sequelize = require('sequelize');

const app = express();

//configuracion
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

//middleware
app.use(express.static(path.join(__dirname, '../static')))

module.exports = app;