require("dotenv").config({ silent: true });

const express = require("express");
const app = express();
const path = require("path");
const apiData = require("./apiData");

if (process.env.NODE_ENV === "production") {
  app.use("/dist", express.static(path.join(__dirname, "dist")));
}

app.get("/api", (req, res) => res.json(apiData()));

const port = process.env.SERVER_PORT;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
