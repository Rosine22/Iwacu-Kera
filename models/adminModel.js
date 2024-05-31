import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: false },
  password: { type: String, required: false },
  role: { type: String, default: 'admin' }, // 'admin' for admin users
});

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
  next();
});

export default mongoose.model('User', UserSchema);
