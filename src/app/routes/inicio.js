const dbconnection = require('../../config/dbconnection');

module.exports = app => {

  const connection = dbconnection();

  app.get('/aeropuertos', (req, res) => {
    connection.query('SELECT * FROM aeropuertos', (err, result) => {
      res.render('./paginaInicio/principal', {
        aeropuertos: result
      });
    });
  });

  app.post('/aeropuertos', (req, res) => {
    const { codigo_iata, ciudad, pais } = req.body;
    connection.query('INSERT INTO news SET ? ',
      {
        codigo_iata,
        ciudad,
        pais
      }
    , (err, result) => {
      res.redirect('./principal');
    });
  });
};