const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        estado_civil: Sequelize.STRING,
        cpf: Sequelize.STRING,
        cidade: Sequelize.STRING,
        estado: Sequelize.STRING
      },
      {
        sequelize
      }
  );
  }
}

module.exports = User;