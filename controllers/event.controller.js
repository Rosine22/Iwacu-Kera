// import Event from '../models/eventModel.js';
const Event = require('../models/eventModel')

const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).send('No media found');
    res.send(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createEvent = async (req, res) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {getEventById,deleteEvent,updateEvent,  createEvent}
