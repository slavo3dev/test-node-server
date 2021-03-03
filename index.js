const express = require("express");
const app = express();
const port = 3002;
const bodyParser = require("body-parser");
const multer = require("multer");
const multipart = multer();
const APP = "Slavo3";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const userInfoF = async (req, res) => {
  const userInfo = req.body;
  console.log();
  console.log("--- Normal Payload ---");
  console.log(JSON.stringify(userInfo));
  console.log("--- ---");
  res.send().status(200);
};
app.post("/api/v1/test/results", userInfoF);
app.post("/api/v2/test/results", multipart.array(), function (req, res) {
  console.log();
  console.log("--- Multi-Part Payload ---");
  console.log(req.body);
  console.log("--- ---");
  res.send(req.body);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
