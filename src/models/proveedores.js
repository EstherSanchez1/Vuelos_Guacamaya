const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Proveedores = db.define('proveedor', {
    rif_p: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre_p: {
      type: Sequelize.STRING
    },
    precioPorKm: {
        type: Sequelize.DOUBLE
    },
    tiempoRespDias: {
        type: Sequelize.DOUBLE
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Proveedores;