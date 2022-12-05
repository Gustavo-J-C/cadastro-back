module.exports = app => {
    const doctor = require("../controllers/doctor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create_doctor", doctor.create);
    router.post("/find_doctor", doctor.findOne);
    router.get("/find_doctors", doctor.findAll);
    router.post("/doctors_specialtys", doctor.get_doctors_and_specialtys);
    router.post("/doctor_specialtys", doctor.get_doctors_specialtys);
    router.post("/delete_doctor", doctor.delete);
    router.post("/update_doctor", doctor.update); 

  
    app.use('/doctor', router);
  };