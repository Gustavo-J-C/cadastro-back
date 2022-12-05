module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "cadastro",
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 50000,
      idle: 30000
    }
  };