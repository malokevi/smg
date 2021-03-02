module.exports = function (sequelize, Sequelize) {

  var User = sequelize.define('User', {

      id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },

      name: {
          type: Sequelize.VARCHAR,
          notEmpty: true
      },

      email: {
          type: Sequelize.VARCHAR,
          notEmpty: true
      },

      password: {
          type: Sequelize.VARCHAR,
          allowNull: false
        },

      date: {
          type: Sequelize.TIMESTAMP
      }
  });

  return User;

}