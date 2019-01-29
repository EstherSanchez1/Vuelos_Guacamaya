const mysql = require('mysql2');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vuelos_guacamaya'
  });
}