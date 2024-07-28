import Proverb from '../models/proverbModel.js';

// Get all proverbs
export const getProverbs = async (req, res) => {
  try {
    const proverbs = await Proverb.find();
    res.json(proverbs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProverbsById = async (req, res, next) => {
  try {
    const foundedProverb = await Proverb.findById(req.params.id);
    if (!foundedProverb) {
      return next(new Error(`Proverb not found`)); // Assuming NotFoundError is defined elsewhere
    }
    return res.status(200).json(foundedProverb);
  } catch (error) {
    next(error);
  }
};

// Create a new proverb
export const createProverb = async (req, res) => {
  const newProverb = new Proverb({
    title: req.body.title,
    content: req.body.content,
    origin: req.body.origin,
  });

  try {
    const savedProverb = await newProverb.save();
    res.status(201).json(savedProverb);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing proverb
export const updateProverb = async (req, res) => {
  try {
    const updatedProverb = await Proverb.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!updatedProverb) return res.status(404).json({ message: 'Proverb not found' });
    res.json(updatedProverb);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a proverb
export const deleteProverb = async (req, res) => {
  try {
    const deletedProverb = await Proverb.findOneAndDelete({ _id: req.params.id });
    if (!deletedProverb) return res.status(404).json({ message: 'Proverb not found' });
    res.json({ message: 'Proverb deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


