const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Rutas = db.define('ruta', {
    cod_ruta: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    kmRecorridos: {
      type: Sequelize.DOUBLE
    },
    precioRuta: {
        type: Sequelize.DOUBLE
    },
    origen: {
        type: Sequelize.STRING
    },
    destino: {
        type: Sequelize.STRING
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Rutas;