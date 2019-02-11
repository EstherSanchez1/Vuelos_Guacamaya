const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Aeropuertos = db.define('aeropuertos', {
    codigo_iata: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    ciudad: {
      type: Sequelize.STRING
    },
    pais: {
        type: Sequelize.STRING
      }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Aeropuertos;
