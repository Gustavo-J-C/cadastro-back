const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users= require("./user.model.js")(sequelize, Sequelize);
db.specialtys = require("./specialty.model.js")(sequelize, Sequelize);
db.doctors = require("./doctor.model.js")(sequelize, Sequelize);
db.doctor_specialty = require("./doctor_specialty.model.js")(sequelize, Sequelize);

module.exports = db;