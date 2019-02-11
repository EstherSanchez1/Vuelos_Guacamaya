const express = require('express');
const router = express.Router();
const db = require('../../config/dbconnection');
const Sequelize = require('sequelize');
//const Op = Sequelize.Op
//Model
const Aeropuertos = require('../../models/aeropuertos');

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
  }

  // Make lowercase and remove space after comma
  codigo_iata = codigo_iata.toUpperCase();

    // Insert into table
    Aeropuertos.create({
      codigo_iata, 
      ciudad,
      pais
    })
      .then(aeropuertos => res.redirect('/airport'))
      .catch(err => console.log(err));
  });

module.exports = router;

