module.exports = app => {
    const specialty = require("../controllers/specialty.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.get("/get_specialtys", specialty.findAll);

    app.use('/specialty', router);
  };