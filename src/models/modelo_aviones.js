const Sequelize = require('sequelize');
const db = require('../config/dbconnection');

const Modelo_aviones = db.define('modelo_avion', {
    modelo: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    rif_f: {
      type: Sequelize.INTEGER
    },
    tipo_combustible: {
        type: Sequelize.STRING
    },
    cant_combustible: {
        type: Sequelize.FLOAT
    },
    dist_despegue: {
        type: Sequelize.DOUBLE
    },
    v_max: {
        type: Sequelize.FLOAT
    },
    v_crucero: {
        type: Sequelize.FLOAT
    },
    pesoVacio: {
        type: Sequelize.FLOAT
    },
    pesoMax: {
        type: Sequelize.FLOAT
    },
    cargaMaxCabina: {
        type: Sequelize.INTEGER
    },
    cargaMaxEquipaje: {
        type: Sequelize.INTEGER
    },
    salidasEmergencia: {
        type: Sequelize.INTEGER
    },
    cantBaños: {
        type: Sequelize.INTEGER
    },
    internet: {
        type: Sequelize.STRING
    },
    tv: {
        type: Sequelize.STRING
    }
  }, {freezeTableName: true, timestamps: false}
  );

  module.exports = Modelo_aviones;