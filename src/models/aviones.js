const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Aviones = db.define('avion', {
    cod_avion: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    modelo: {
      type: Sequelize.STRING
    },
    codEstadoAvion: {
        type: Sequelize.INTEGER
    },
    cod_tripulacion: {
        type: Sequelize.INTEGER
    },
    cod_ruta: {
        type: Sequelize.INTEGER
    },
    cod_r: {
      type: Sequelize.INTEGER
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Aviones;