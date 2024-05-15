// routes/user.js
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.send({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).send({ message: "Invalid username or password" });
  }
  res.cookie("userId", user.id);
  res.send({ message: "Logged in successfully" });
});

module.exports = router;
