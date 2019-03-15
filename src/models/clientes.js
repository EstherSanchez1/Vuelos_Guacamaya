const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Clientes = db.define('cliente', {
    cedula: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    apellido: {
        type: Sequelize.STRING
      },
    direccion: {
        type: Sequelize.STRING
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Clientes;