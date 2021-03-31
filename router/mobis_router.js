var express = require("express");
var moment = require("moment");
var tz = require("moment-timezone");
var router = express.Router();

router.post("/mobis", (req, res) => {
  console.log(req.body["xmlStr"]);
  if (req.body["ownerID"] === "602") {
    res.sendFile("D:/01_WORK/rest_server_node/data/data.xml");
  } else if (req.body["ownerID"] === "605") {
    res.sendFile("D:/01_WORK/rest_server_node/data/data2.xml");
  } else {
    res.sendFile("D:/01_WORK/rest_server_node/data/data3.xml");
  }
});

module.exports = router;
