const express = require("express");
const app = express();
const port = 3002;
const bodyParser = require("body-parser");
const APP = "app3";

// JotForm is sending enctype="multipart/form-data"
const multer = require("multer");
const multipart = multer();

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
app.post("/api/v1//vl2/ratings", userInfoF);
app.post("/api/v1/vl2/ratings", multipart.array(), function (req, res) {
  const parseJotForm = JSON.parse(req.body.rawRequest);
  console.log();
  console.log("--- Multi-Part Payload ---");
  console.log("Req Body: ", req.body);
  console.log("Row Data: ", req.body.rawRequest);
  console.log("SessionId: ", parseJotForm);
  console.log("SessionId: ", parseJotForm.q5_howWould);
  console.log("Results: ", parseJotForm.q6_comments);
  console.log("--- ---");
  res.send(req.body);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
