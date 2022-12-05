module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.BOOLEAN
      }
        }, {  timestamps: false,   freezeTableName: true,});
  
    return User;
  };