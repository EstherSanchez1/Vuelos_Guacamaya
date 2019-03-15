const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Tripulacion = db.define('tripulacion', {
    cod_tripulacion: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    capitan: {
      type: Sequelize.INTEGER
    },
    copiloto: {
        type: Sequelize.INTEGER
    },
    ingeniero_vuelo: {
      type: Sequelize.INTEGER
    },
    medico: {
        type: Sequelize.INTEGER
    },
    sobrecargo: {
        type: Sequelize.INTEGER
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Tripulacion;