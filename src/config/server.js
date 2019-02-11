const express = require('express');

const app = express();

//configuracion
app.set('port', process.env.PORT || 3000);

module.exports = app;