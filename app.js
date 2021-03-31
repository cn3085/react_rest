var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

var ParkingRouter = require("./router/parking_router");
var SMSRouter = require("./router/sms_router");
var MobisRouter = require("./router/mobis_router");

app.use("/guidance/get", ParkingRouter);
app.use("/sms", SMSRouter);
app.use("/mobis", MobisRouter);

app.listen(3000);

module.exports = app;
