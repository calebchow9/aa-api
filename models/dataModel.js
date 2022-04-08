var mongoose = require("mongoose");

var DataSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
  },
  temp: {
    type: Number,
    required: true,
  },
  pH: {
    type: Number,
    required: true,
  },
  cond: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Data", DataSchema);
