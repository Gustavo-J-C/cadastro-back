module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create_user", user.create);
    router.post("/find_user", user.findOne);

  
    app.use('/user', router);
  };