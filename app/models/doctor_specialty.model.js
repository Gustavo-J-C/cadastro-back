module.exports = (sequelize, Sequelize) => {
    const Doctor_specialty = sequelize.define("doctors_specialty", {
      doctor_id: {
        type: Sequelize.INTEGER
      },
      specialty_id: {
        type: Sequelize.INTEGER
      },
        }, {  timestamps: false,   freezeTableName: true});
  
    return Doctor_specialty;
  };