const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Desvios = db.define('desvio', {
    cod_r: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    destino2: {
      type: Sequelize.STRING
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Desvios;