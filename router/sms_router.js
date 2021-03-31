var express = require("express");
var moment = require("moment");
var tz = require("moment-timezone");
var router = express.Router();

router.post("/send", (req, res) => {
  moment.tz.setDefault("Asia/Seoul");
  console.log("-----------------------SMS Send-------------------------");
  console.log(moment().format("YYYY-MM-DD HH:mm:ss"));

  var auth = req.headers.authorization;
  var sms = JSON.stringify(req.body);

  console.log(`auth key : ${auth}`);
  console.log(sms);
  console.log(req.headers);
  res.status(500);
  res.json(send_success);
  return;
});

router.get("/test", (req, res) => {
  moment.tz.setDefault("Asia/Seoul");
  console.log(req);
  console.log(req.params);
  console.log("-----------------------SMS Send-------------------------");
  console.log(moment().format("YYYY-MM-DD HH:mm:ss"));

  var auth = req.headers.authorization;
  var sms = JSON.stringify(req.body);

  console.log(`auth key : ${auth}`);
  console.log(sms);
  console.log(req.headers);
  res.status(500);
  res.json(send_success);
  return;
});

router.post("/token", (req, res) => {
  moment.tz.setDefault("Asia/Seoul");
  console.log("-----------------------Get Token-------------------------");
  console.log(moment().format("YYYY-MM-DD HH:mm:ss"));

  var clientId = req.headers["X-IB-Client-Id"];
  var clientPwd = req.headers["X-IB-Client-Passwd"];

  console.log(`clientId : ${clientId}     clientPwd : ${clientPwd}`);
  res.json(token_success);

  return;
});

module.exports = router;

let send_success = {
  groupId: "20170101A0001103437883143398",
  toCount: "1",
  destinations: [
    {
      messageId: "20170101A0001103437883143398-0",
      to: "+821012341234",
      status: "A110",
      errorText: "",
    },
  ],
  status: "A110", //test
  ref: "ref1",
};

let token_success = {
  accessToken:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODI4OTkxODksImF1ZCI6InJlc3R0ZXN0MSIsIm1tcyI6Ik4iLCJzbXMiOiJZIiwicmVwIjoiTiJ9.LEo0A411Yi0T7YDV7V8FGaD6DXzdlJ5TeVf_8d2h3JQ",
  schema: "Basic",
  expired: "20161228132629",
};
