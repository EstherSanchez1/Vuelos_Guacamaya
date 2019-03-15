const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Charter = db.define('charter', {
    cod_avion: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    rif_p: {
      type: Sequelize.INTEGER
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Charter;