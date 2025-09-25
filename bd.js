// bd.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Instancia de conexión a PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME = 'pop',        // nombre de la BD
  process.env.DB_USER = 'postgres',   // usuario
  process.env.DB_PASSWORD = '123456789', // contraseña
  {
    host: process.env.DB_HOST = 'localhost',
    port: process.env.DB_PORT = 5432,
    dialect: 'postgres'
  }
);

module.exports = sequelize;
