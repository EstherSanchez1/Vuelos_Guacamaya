const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Azafatas = db.define('azafatas', {
    cod_t: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    azafata: {
      type: Sequelize.INTEGER
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Azafatas;