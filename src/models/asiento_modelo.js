const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Asiento_modelo = db.define('asiento_modelo', {
    cod_asiento: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    modelo: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    cant_asientos: {
        type: Sequelize.INTEGER
      }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Asiento_modelo;