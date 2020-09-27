const Sequelize = require('sequelize');
const User = require('../app/models/User');
const databaseConfig = require('../config/database');

const models = [User];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new DataBase();