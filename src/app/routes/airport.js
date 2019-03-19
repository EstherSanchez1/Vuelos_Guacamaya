const express = require('express');
const router = express.Router();
const db = require('../../config/dbconnection');
const Sequelize = require('sequelize');
const Op = Sequelize.Op
//Models
const Aeropuertos = require('../../models/aeropuertos');
const Pistas = require('../../models/pistas_aterrizaje');

//get airports list
    router.get('/', (req, res) =>
      Aeropuertos.findAll()
        .then(airport => {
          res.render('airports/airport',{
            airport
          });
        })
        .catch(err => console.log(err))
    );

// Display add airport form
router.get('/add', (req, res) => res.render('airports/airport_add'));

//Add an airport
router.post('/add', (req, res) => {
  let { codigo_iata, ciudad, pais } = req.body;
  let errors = [];

  // Validate Fields
  if(!codigo_iata) {
    errors.push({ text: 'Por favor escriba un código IATA' });
  }
  if(!ciudad) {
    errors.push({ text: 'Por favor escriba la ciudad del aeropuerto' });
  }
  if(!pais) {
    errors.push({ text: 'Por favor escriba el país del aeropuerto' });
  }

  // Check for errors
  if(errors.length > 0) {
    res.render('airports/airport_add', {
      errors,
      codigo_iata, 
      ciudad,
      pais
    });
  }else{
    // Make uppercase
  codigo_iata = codigo_iata.toUpperCase();
  ciudad = ciudad.toUpperCase();
  pais = pais.toUpperCase();

    // Insert into table
    Aeropuertos.create({
      codigo_iata, 
      ciudad,
      pais
    })
      .then(aeropuertos => res.redirect('/airport/add_pistas'))
      .catch(err => console.log(err));
  }
  });

// Display add_pistas form
router.get('/pistas/add_pistas', (req, res) =>
Aeropuertos.findAll()
  .then(airport => {
    res.render('airports/add_pistas',{
      airport
    });
  })
  .catch(err => console.log(err))
);

  //get pistas list
  router.get('/pistas', (req, res) =>
  Pistas.findAll()
    .then(pistas => {
      res.render('airports/pistas',{
        pistas
      });
    })
    .catch(err => console.log(err))
);

  //Add pistas de aterrizaje
  router.post('/pistas/add_pistas', (req, res) => {
  let codigo_iata = req.param("codigo_iata2",null);
  let codigo_pista = req.param("codigo_pista",null);
  let distancia_pista = req.param("distancia_pista",null);
  let errors = [];

  // Validate Fields
  if(!codigo_iata) {
    errors.push({ text: 'Por favor indique el código IATA del aeropuerto donde se encuentra la pista'});
  }
  if(!codigo_pista) {
    errors.push({ text: 'Por favor escriba el código de la pista de aterrizaje'});
  }
  if(!distancia_pista) {
    errors.push({ text: 'Por favor escriba la distancia de la pista en kilómetros'});
  }

  // Check for errors
  if(errors.length > 0) {
    res.redirect('/airport/add_pistas', {
      errors,
      codigo_iata,
      codigo_pista,
      distancia_pista
    });
  }else{
    // Insert into table
    Pistas.create({
      codigo_pista, 
      codigo_iata,
      distancia_pista
    })
      .then(pistas => res.redirect('/airport/pistas'))
      .catch(err => console.log(err));
    }
  });

  //Delete an airport
  router.get('/borrar', (req, res) =>
  Aeropuertos.findAll()
    .then(airport => {
      res.render('airports/airport_delete',{
        airport
      });
    })
    .catch(err => console.log(err))
);

  router.post('/borrar', (req, res) => {

    Aeropuertos.destroy({
      where: { codigo_iata: {[Op.like]: req.param("term",null)} }
    })
      .then(deletedAeropuerto => {
        res.redirect('/airport/borrar');
      })
      .catch(err => console.log(err));
  });

  //Delete pistas
  router.get('/pistas/borrar_pista', (req, res) =>
  Pistas.findAll()
    .then(pistas => {
      res.render('airports/borrar_pista',{
        pistas
      });
    })
    .catch(err => console.log(err))
);

  router.post('/pistas/borrar_pista', (req, res) => {

    Pistas.destroy({
      where: { codigo_pista: {[Op.like]: req.param("term",null)} }
    })
      .then(deletedPista => {
        res.redirect('/airport/pistas/borrar_pista');
      })
      .catch(err => console.log(err));
  });

module.exports = router;

