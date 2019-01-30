const express = require('express');
const router = express.Router();
const db = require('../config/dbconnection');
const aeropuerto = require('../models/aeropuertos');

module.exports = router => {
    router.get('/', (req, res) =>
      aeropuerto.findAll()
        .then(aeropuertos => {
          console.log(aeropuertos)
          res.sendStatus(200);
        })
        .catch(err => console.log(err))
    )
  }