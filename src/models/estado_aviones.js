const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Estado_aviones = db.define('estado_avion', {
    codEstadoAvion: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    estado_avion: {
      type: Sequelize.STRING
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Estado_aviones;