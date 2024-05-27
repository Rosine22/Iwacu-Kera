// controllers/adminController.js

const User = require('../models/adminModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
  const { username, password,role } = req.body;
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Attempt to find the user by username
    const user = await User.findOne({ username });

    // If no user is found, respond with an error
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Verify the password against the stored hashed password
    const isMatch = bcryptjs.compare(password, user.password);

    // If the passwords do not match, respond with an error
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // If the user is found and the password matches, generate a JWT token
    const token = jwt.sign({ id: user._id, role: user.role },"SECRET", { expiresIn: '1h' });

    // Respond with the token
    res.json({ token: token, message: 'Login successful' });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ message: 'Internal server error' }); // Send a generic error message to the client
  }
};


module.exports = { register, login };
