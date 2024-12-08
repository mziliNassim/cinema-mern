const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const db = require("../config/db");

// App
const app = express();
app.use(express.json());
app.use(cors());

db();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Home" });
});

// Routes
const auth = require("../routes/auth");
app.use("/auth", auth);

// Routes
const users = require("../routes/users");
app.use("/users", users);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// Listening
module.exports.handler = serverless(app);
