const mongoose = require('mongoose');

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

module.exports = mongoose.model('Proverb', ProverbSchema);
