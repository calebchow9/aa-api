let Profile = require("../models/profileModel");
let express = require("express");
let router = express.Router();

//get all profiles
router.get("/profile", (req, res) => {
  Profile.find()
    .then((doc) => {
      doc.splice(
        doc.findIndex((obj) => {
          obj.name == "current";
        }),
        1
      );
      return res.status(200).send(doc);
    })
    .catch((err) => {
      res.status(404).send({ message: "Error", data: err });
    });
});

// get current profile
router.get("/profile/current", (req, res) => {
  Profile.findOne({ name: "current" })
    .then((doc) => {
      return res.status(200).send(doc);
    })
    .catch((err) => {
      res.status(404).send({ message: "Error", data: err });
    });
});

// update current profile
router.put("/profile/current", (req, res) => {
  Profile.findOneAndUpdate(
    { name: "current" },
    {
      tempLow: req.body.tempLow,
      tempHigh: req.body.tempHigh,
      phLow: req.body.phLow,
      phHigh: req.body.phHigh,
      condLow: req.body.condLow,
      condHigh: req.body.condHigh,
    }
  )
    .then((doc) => {
      return res.status(200).send(doc);
    })
    .catch((err) => {
      return res.status(404).send(err);
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
    .save(
    .then((doc) => {
      res.status(200).send({ message: "OK", data: doc });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send({ message: "Error", data: err });
    });
});

module.exports = router;
