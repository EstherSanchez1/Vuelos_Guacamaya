const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Asientos = db.define('asiento', {
    cod_asiento: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    clase_asiento: {
      type: Sequelize.STRING
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Asientos;