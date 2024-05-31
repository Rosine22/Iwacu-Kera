import Media from '../models/mediaModel.js';

export const getMedias = async (req, res) => {
  try {
    const medias = await Media.find().sort({ createdAt: -1 });
    res.json(medias);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(_id= req.params.id);
    if (!media) return res.status(404).send('No media found');
    res.send(media);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const createMedia = async (req, res) => {
  const error = req.body.error; // Assuming you have a validation function
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

export const updateMedia = async (req, res) => {
  try {
    const media = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!media) {
      return res.status(404).json({ msg: `No media found` });
    }
    res.status(200).send(media);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error'); // Consider sending a more specific error message
  }
};

export const deleteMedia = async (req, res) => {
  try {
    const media = await Media.findByIdAndDelete(req.params.id);
    if (!media) return res.status(404).send('No media found');
    res.send(media);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};


