const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Estado_vuelos = db.define('estado_vuelo', {
    codEstadoVuelo: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    estado_vuelo: {
      type: Sequelize.STRING
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Estado_vuelos;