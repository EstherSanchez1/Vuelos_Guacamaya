const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Vuelos = db.define('vuelo', {
    cod_vuelo: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    codEstadoVuelo: {
      type: Sequelize.INTEGER
    },
    cod_avion: {
        type: Sequelize.STRING
    },
    cod_ruta: {
        type: Sequelize.INTEGER
    },
    cod_r: {
        type: Sequelize.INTEGER
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Vuelos;