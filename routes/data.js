let Data = require("../models/dataModel");
let express = require("express");
let router = express.Router();

//get all data (everything in database)
router.get("/data", (req, res) => {
  Data.find()
    .then((doc) => {
      return res.status(200).send(doc);
    })
    .catch((err) => {
      return res.status(404).send(err);
    });
});

// get recent 10 data (for charts)
router.get("/data10", (req, res) => {
  Data.find()
    .sort({ timestamp: -1 })
    .limit(10)
    .exec((err, doc) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(doc);
    });
});

// post data
router.post("/data", (req, res) => {
  const data = new Data({
    timestamp: Date.now(),
    temp: req.body.temp,
    pH: req.body.pH,
    cond: req.body.cond,
  });
  data
    .save()
    .then((doc) => {
      return res.status(200).send({ message: "OK", data: doc });
    })
    .catch((err) => {
      return res.status(404).send({ message: "Error", data: err });
    });
});

module.exports = router;
