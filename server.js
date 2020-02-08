require("dotenv").config({ silent: true });

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const api = require("./api");

if (process.env.NODE_ENV === "production") {
  app.use("/dist", express.static(path.join(__dirname, "dist")));
}

app.get("/api", function(req, res) {
  api.getData(function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(data);
    }
  });
});

let offlineData = JSON.parse(
  fs.readFileSync(path.resolve("./api_offline.json"), "utf-8")
);
app.get("/offline_api", function(req, res) {
  let data = offlineData.find(item => item.imdbID === req.query.i);
  if (!data) {
    data = { Response: "False", Error: `IMDb ID ${req.query.i} not found.` };
  }
  res.json(data);
});

const port = process.env.SERVER_PORT;

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
