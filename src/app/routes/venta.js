const express = require('express');
const router = express.Router();
const db = require('../../config/dbconnection');
const Sequelize = require('sequelize');
const Op = Sequelize.Op
//Models
const Clientes = require('../../models/clientes');
const Pasajeros = require('../../models/pasajeros');
const Pasajes = require('../../models/pasajes');
const Boletos = require('../../models/boletos');
const Vuelos = require('../../models/vuelos');