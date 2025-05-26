const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Auth = require('../modles/AuthModel.js');
const SECRET_KEY = "authentication";
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { uname, email, password } = req.body;

  // Basic validation
  if (!uname || !email || !password) {
  return res.status(400).json({ error: "All fields are required" });
}

  // Check if user already exists
  const existingUser = await Auth.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "Email already registered" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Auth({ uname, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const user = await Auth.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

module.exports = router;