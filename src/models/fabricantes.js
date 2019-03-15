const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Fabricantes = db.define('fabricante', {
    rif_f: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre_f: {
      type: Sequelize.STRING
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Fabricantes;