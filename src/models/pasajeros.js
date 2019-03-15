const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Pasajeros = db.define('pasajero', {
    cedula: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    cant_equipaje: {
      type: Sequelize.INTEGER
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Pasajeros;