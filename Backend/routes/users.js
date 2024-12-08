const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean();
    return res.status(200).json({ message: "All Users", users });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id); /* Find user with id "mongodb" */
    return res.status(200).json({ message: `user with id : ${id}`, user });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
