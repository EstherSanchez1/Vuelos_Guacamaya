const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Pistas_aterrizaje = db.define('pistas_aterrizaje', {
    codigo_pista: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    codigo_iata: {
      type: Sequelize.STRING
    },
    distancia_pista: {
        type: Sequelize.DOUBLE
      }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Pistas_aterrizaje;