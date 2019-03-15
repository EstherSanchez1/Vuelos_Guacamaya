const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Personal = db.define('personal_empresa', {
    carnet: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    nombre_e: {
      type: Sequelize.STRING
    },
    apellido_e: {
        type: Sequelize.STRING
    },
    cargo: {
        type: Sequelize.STRING
    },
    aeropuertoBase: {
        type: Sequelize.STRING
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Personal;