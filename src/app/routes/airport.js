const express = require('express');
const router = express.Router();
const db = require('../../config/dbconnection');
const Sequelize = require('sequelize');
//const Op = Sequelize.Op
//Model
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

// Display add_pistas form
router.get('/add_pistas', (req, res) => res.render('airports/add_pistas'));

// Display pistas form
//router.get('/pistas', (req, res) => res.render('airports/pistas'));

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

  //Add pistas de aterrizaje
  router.post('/add_pistas', (req, res) => {
  let { codigo_iata2, codigo_pista, distancia_pista } = req.body;
  let errors2 = [];

  // Validate Fields
  if(!codigo_iata2) {
    errors2.push({ text: 'Por favor escriba el código IATA del aeropuerto donde se encuentra la pista'});
  }
  if(!codigo_pista) {
    errors2.push({ text: 'Por favor escriba el código de la pista de aterrizaje'});
  }
  if(distancia_pista==0) {
    errors2.push({ text: 'Por favor escriba la distancia de la pista en kilómetros'});
  }

  // Check for errors
  if(errors2.length > 0) {
    res.render('airports/add_pistas', {
      errors2,
      codigo_iata2,
      codigo_pista,
      distancia_pista
    });
  }else{
    // Make uppercase
    codigo_iata2 = codigo_iata2.toUpperCase();

    // Insert into table
    Pistas.create({
      codigo_pista, 
      codigo_iata2,
      distancia_pista
    })
      .then(pistas => res.redirect('/airport'))
      .catch(err => console.log(err));
  }
  });

  //Delete an airport
  router.get('/delete', (req, res) =>
      Aeropuertos.findAll()
        .then(airport2 => {
          res.render('airports/airport_delete',{
            airport2
          });
        })
        .catch(err => console.log(err))
    );

  router.post('/delete', (req, res) => {
    let id = req.body;
    let text=[];

    Aeropuertos.destroy({
      where: { codigo_iata: id }
    })
      .then(deletedAeropuerto => {
        res.redirect('/airport/delete');
        text.push({ text: "El aeropuerto ha sido eliminado correctamente"});
      })
      .catch(err => console.log(err));
  });

module.exports = router;

