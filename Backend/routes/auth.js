const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const User = require("../models/User");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(201).json({ message: "ALL users", users });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const users = await User.find();
    // Check Exist!!
    const userNameExist = users.find((user) => user.username === username);
    if (!userNameExist) {
      const emailExist = users.find((user) => user.email === email);
      if (!emailExist) {
        if (password === confirmPassword) {
          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = new User({
            username,
            email,
            password: hashedPassword,
          });
          await newUser.save();
          return res.status(201).json({
            registerd: true,
            message: "register success !",
            user: {
              id: newUser.id,
              username,
              email,
            },
          });
        }
        return res
          .status(200)
          .json({ registerd: false, message: "Password Don't Match !" });
      }
      return res
        .status(200)
        .json({ registerd: false, message: "Invalid Email !" });
    }
    return res
      .status(200)
      .json({ registerd: false, message: "username is taken !" });
  } catch (err) {
    return res.status(500).json({ error: err.message, registerd: false });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // check username exist!
    const users = await User.find();
    const user = users.find((user) => user.username === username);
    if (user) {
      // User exist
      // Chek Password
      const passwordHasCompare = await bcrypt.compare(password, user.password);
      if (passwordHasCompare)
        return res.status(201).json({
          message: "Login success !",
          loggedIn: true,
          user: {
            id: user._id,
            username,
            email: user.email,
          },
        });
      return res.status(200).json({
        loggedIn: false,
        message: "Invalid Username or password ! P",
      });
    }
    return res.status(200).json({
      loggedIn: false,
      message: "Invalid Username or password ! U",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
