const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  const user = {
    name: req.body.name,
    username: req.body.username,
    admin: req.body.admin,
    password: req.body.password,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

exports.findOne = (req, res) => {
  const login = User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
      admin: req.body.admin,
    },
  })
    .then((data) => {
      if (data !== null) {
        res.send({
          data: data,
          status: 200,
        });
      } else {
        res.send({
          data: data,
          status: 400,
        });
      }
    })
    .catch((err) => {
      res.send({
        message: err.message || "Some error occurred while doing login.",
        status: 500,
      });
    });
};

