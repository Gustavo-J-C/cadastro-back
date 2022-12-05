const db = require("../models");
const Doctor = db.doctors;
const Doctor_specialty = db.doctor_specialty;
const Op = db.Sequelize.Op;
const { QueryTypes } = require("sequelize");

// Create and Save a new Doctor
exports.create = async (req, res) => {
  const doctor = {
    name: req.body.name,
    CRM: req.body.CRM,
    phone: req.body.phone,
    CPF: req.body.CPF,
    RG: req.body.RG,
    specialtys: req.body.specialtys,
  };

  try {
    const doctor_resp = await Doctor.create(doctor);
    if (doctor_resp) {
      for (var i = 0; i <= req.body.specialtys.length - 1; i++) {
        await Doctor_specialty.create({
          doctor_id: doctor_resp.id,
          specialty_id: req.body.specialtys[i],
        });
      }
    }

    res.send(doctor_resp);
  } catch (error) {
    console.error(error);
  }

};

exports.findAll = (req, res) => {
  Doctor.findAll()
    .then((data) => {
      if (data !== null) {
        res.send(data);
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

exports.findOne = (req, res) => {
  const login = Doctor.findOne({
    where: {
      CRM: req.body.CRM
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

exports.get_doctors_and_specialtys = async (req, res) => {
  console.log(req.body);
  const resp = await db.sequelize.query(
    `Select * from doctors join doctors_specialty on doctors.id = doctors_specialty.doctor_id where doctors.id = ${req.body.id}`,
    { type: QueryTypes.SELECT }
  );

  res.send(resp);
};

exports.get_doctors_specialtys = async (req, res) => {
  console.log(req.body);
  const resp = await db.sequelize.query(
    `Select name from specialty join doctors_specialty on doctors_specialty.specialty_id = specialty.id where doctors_specialty.doctor_id = ${req.body.id}`,
    { type: QueryTypes.SELECT }
  );

  res.send(resp);
};

exports.delete = async (req, res) => {
  const delete_specialty = await Doctor_specialty.destroy({
    where: {
      doctor_id: req.body.id,
    },
  });

  console.log(delete_specialty);
  Doctor.destroy({
    where: {
      id: req.body.id,
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
        message: err.message || "Some error occurred while doing destroy.",
        status: 500,
      });
    });

};

exports.update = async (req, res) => {
  const doctor = {
    name: req.body.name,
    CRM: req.body.CRM,
    phone: req.body.phone,
    CPF: req.body.CPF,
    RG: req.body.RG,
    id: req.body.id,
  };

  console.log(req.body)

  const doctor_resp = await Doctor.update(doctor, {
    where: {
      id: doctor.id,
    },
  });

  const delete_specialty = await Doctor_specialty.destroy({
    where: {
      doctor_id: req.body.id,
    },
  });

  for (var i = 0; i <= req.body.specialty.length - 1; i++) {
    await Doctor_specialty.create({
      doctor_id: req.body.id,
      specialty_id: req.body.specialty[i]
    });
  }

  res.send(doctor_resp)
};
