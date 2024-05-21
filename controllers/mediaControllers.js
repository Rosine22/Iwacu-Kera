const Media = require("../models/mediaModel.js");

const getMedias = async (req, res) => {
  try {
    const medias = await Media.find().sort({ createdAt: -1 });
    res.json(medias);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).send('No media found');
    res.send(media);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createMedia = async (req, res) => {
  const { error } = req.body; // Assuming you have a validation function
  if (error) return res.status(400).send(error.details[0].message);

  const media = new Media({
    title: req.body.title,
    link: req.body.link,
    description: req.body.description,
    type: req.body.type,
    tags: req.body.tags,
    owner: req.body.owner 
  });

  try {
    const newMedia = await media.save();
    res.send(newMedia);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateMedia = async (req, res) => {
  try {
    const media = await Media.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!media) return res.status(404).send('No media found');
    res.send(media);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteMedia = async (req, res) => {
  try {
    const media = await Media.findByIdAndDelete(req.params.id);
    if (!media) return res.status(404).send('No media found');
    res.send(media);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = {getMedias, getMediaById, createMedia, updateMedia,deleteMedia}