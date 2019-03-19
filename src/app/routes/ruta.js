const express = require('express');
const router = express.Router();
const db = require('../../config/dbconnection');
const Sequelize = require('sequelize');
const Op = Sequelize.Op
//Models
const Rutas = require('../../models/rutas');
const Desvios = require('../../models/desvios');
const Aeropuertos = require('../../models/aeropuertos');


//get rutas list
    router.get('/', (req, res) =>
      Rutas.findAll()
        .then(ruta => {
          res.render('rutas/ruta',{
            ruta
          });
        })
        .catch(err => console.log(err))
    );

// Display add rutas form
router.get('/add', (req, res) =>
      Aeropuertos.findAll()
        .then(aeropuerto => {
          res.render('rutas/ruta_add',{
            aeropuerto
          });
        })
        .catch(err => console.log(err))
    );

//Add ruta
router.post('/add', (req, res) => {
  let { kmRecorridos, precioRuta, origen, destino } = req.body;
  let errors = [];

  function aleatorio(min, max) {
    var num = Math.floor(Math.random()*(max-min+1))+min;
    return num;
  }

  var cod_ruta = aleatorio(1, 1000);

  // Validate Fields
  if(!kmRecorridos) {
    errors.push({ text: 'Por favor escriba los Km recorridos del origen al destino de la ruta' });
  }
  if(!precioRuta) {
    errors.push({ text: 'Por favor escriba el precio que posee la ruta' });
  }
  if(!origen) {
    errors.push({ text: 'Por favor indique el aeropuerto de origen de la ruta' });
  }
  if(!destino) {
    errors.push({ text: 'Por favor indique el aeropuerto de destino de la ruta' });
  }

  // Check for errors
  if(errors.length > 0) {
    res.render('rutas/ruta_add', {
      errors,
      cod_ruta, 
      kmRecorridos,
      precioRuta,
      origen,
      destino
    });
  }else{

    // Insert into table
    Rutas.create({
        cod_ruta, 
        kmRecorridos,
        precioRuta,
        origen,
        destino
    })
      .then(rutas => res.redirect('/rutas'))
      .catch(err => console.log(err));
  }
  });

  //Delete ruta
  router.get('/borrar', (req, res) =>
  Rutas.findAll()
    .then(ruta => {
      res.render('rutas/ruta_borrar',{
        ruta
      });
    })
    .catch(err => console.log(err))
);

  router.post('/borrar', (req, res) => {

    Rutas.destroy({
      where: { cod_ruta: {[Op.like]: req.param("term",null)} }
    })
      .then(deletedRuta => {
        res.redirect('/rutas/borrar');
      })
      .catch(err => console.log(err));
  });

module.exports = router;