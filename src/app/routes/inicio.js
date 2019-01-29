const dbconnection = require('../../config/dbconnection');

module.exports = app => {

  const connection = dbconnection();

  app.get('/', (req, res) => {
      res.render('./paginaInicio/principal')
  });

};