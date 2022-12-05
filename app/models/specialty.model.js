module.exports = (sequelize, Sequelize) => {
    const Specialty = sequelize.define("specialty", {
      name: {
        type: Sequelize.STRING
      },
        }, {  timestamps: false,   freezeTableName: true});
  
    return Specialty;
  };