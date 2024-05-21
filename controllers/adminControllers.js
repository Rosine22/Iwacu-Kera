// controllers/adminController.js

const User = require('../models/adminModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.find({ username });
    if (!user) return res.status(400).json({ message: 'Invalid username or password' });
    else {
      return res.status(200).json({ message:'Login sucessfully' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });
    

    const token = jwt.sign({ id: user._id, role: user.role }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {register,login}