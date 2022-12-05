const db = require("../models");
const Specialty = db.specialtys;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  Specialty.findAll()
    .then(data => { 
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while finding specialtys."
      });
    });
};


