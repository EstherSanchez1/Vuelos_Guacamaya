const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Pasajes = db.define('pasaje', {
    pasaje_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    cedula_compra: {
      type: Sequelize.INTEGER
    },
    cedula_pasajero: {
        type: Sequelize.INTEGER
    },
    fecha_compra: {
        type: Sequelize.DATE
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Pasajes;