const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const APP = "app3";

// JotForm is sending enctype="multipart/form-data"
const multer = require("multer");
const multipart = multer();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const createTicketPayload = async (req, res) => {
  const jotFromPayload = req.body;
console.log("--- ---");
  console.log("--- Normal Payload ---");
  console.log(JSON.stringify(jotFromPayload));
  console.log("--- ---");

  console.log("------ Raw Data --------")
  console.log("Row Data: ",jotFromPayload.rawRequest)
  console.log("--- ---");
  res.send().status(200);
};
app.post("/create-ticket",multipart.array(),createTicketPayload);

// app.post("/create-ticket", multipart.array(), function (req, res) {
//   const parseJotForm = JSON.parse(req.body.rawRequest);

//   console.log("--- Multi-Part Payload ---");
//   console.log("Req Body: ", req.body);
//   console.log("Row Data: ", req.body.rawRequest);
//   console.log("--- ---");
//   res.send(req.body);
// });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
