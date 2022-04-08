var express = require("express");
var http = require("http");
var app = express();
var profileRoute = require("./routes/profile");
var dataRoute = require("./routes/data");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:autoaquarium@data.3v9bu.mongodb.net/data?retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
};
app.use(allowCrossDomain);

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`);
  next();
});

app.use(profileRoute);
app.use(dataRoute);

const PORT = process.env.PORT || 4000;
//app.listen(PORT, () => console.info(`Server has started on ${PORT}`))
const server = http.createServer(app);
server.listen(PORT);
