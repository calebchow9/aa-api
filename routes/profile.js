let Profile = require("../models/profileModel");
let express = require("express");
let router = express.Router();

//get all profiles
router.get("/profile", (req, res) => {
  Profile.find()
    .then((doc) => {
      return res.status(200).send(doc);
    })
    .catch((err) => {
      res.status(404).send({ message: "Error", data: err });
    });
});

//get specific profile
router.get("/profile/:id", (req, res) => {
  Profile.findById(req.params.id)
    .then((doc) => {
      return res.status(200).send(doc);
    })
    .catch((err) => {
      res.status(404).send({ message: "Error", data: err });
    });
});

// create profile
router.post("/profile", (req, res) => {
  const profile = new Profile({
    name: req.body.name,
    tempLow: req.body.tempLow,
    tempHigh: req.body.tempHigh,
    phLow: req.body.phLow,
    phHigh: req.body.phHigh,
    condLow: req.body.condLow,
    condHigh: req.body.condHigh,
  });
  profile
    .save()
    .then((doc) => {
      res.status(200).send({ message: "OK", data: doc });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send({ message: "Error", data: err });
    });
});

module.exports = router;
