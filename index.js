// index.js
const express = require('express');
const sequelize = require('./bd');   

const app = express();
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log(' conectaste'))
  .catch(err => console.error('no more:', err));

app.listen(1606, () => {
  console.log('Servidor corriendo en http://localhost:1606');
});