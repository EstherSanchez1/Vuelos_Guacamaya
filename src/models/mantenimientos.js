const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Mantenimientos = db.define('mantenimiento', {
    cod_m: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    tipo_m: {
      type: Sequelize.STRING
    },
    duracionDias: {
        type: Sequelize.DOUBLE
      }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Mantenimientos;