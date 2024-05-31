import mongoose from 'mongoose';

const ProverbSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Proverb', ProverbSchema);
