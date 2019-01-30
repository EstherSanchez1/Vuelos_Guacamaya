const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Aeropuerto = db.define('aeropuerto', {
    codigo_iata: {
      type: Sequelize.STRING
    },
    ciudad: {
      type: Sequelize.STRING
    },
    pais: {
        type: Sequelize.STRING
      }
  });

  module.exports = Aeropuerto;
