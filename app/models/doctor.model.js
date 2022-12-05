module.exports = (sequelize, Sequelize) => {
    const Doctor = sequelize.define("doctors", {
      name: {
        type: Sequelize.STRING
      },
      CRM: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      CPF: {
        type: Sequelize.STRING
      },
      RG: {
        type: Sequelize.STRING
      }
        }, {  timestamps: false,   freezeTableName: true,});
  
    return Doctor;
  };