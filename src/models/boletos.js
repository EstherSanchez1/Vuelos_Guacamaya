const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Boletos = db.define('boleto', {
    cod_vuelo: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    pasaje_id: {
      type: Sequelize.INTEGER
    },
    num_asiento: {
        type: Sequelize.INTEGER
      }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Boletos;