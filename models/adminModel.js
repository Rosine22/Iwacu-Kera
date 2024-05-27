// models/user.js
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: false},
  password: { type: String, required: false },
  role: { type: String, default: 'admin' }, // 'admin' for admin users
});

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('User', UserSchema);
