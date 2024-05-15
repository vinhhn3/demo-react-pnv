// routes/user.js
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  try {
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error registering user", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ message: "Invalid username or password" });
    }
    res.cookie("userId", user.id);
    res.status(200).send({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error logging in", error: error.message });
  }
});

module.exports = router;
