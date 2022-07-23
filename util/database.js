const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-com', 'root', 'node-com', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
