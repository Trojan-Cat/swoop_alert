const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./DB");
const markerRouter = require("./routes/marker-router");

const app = express();
const apiPort = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello sadsadWorld!");
});

app.use("/api", markerRouter);
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
