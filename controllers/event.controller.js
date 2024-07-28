
import eventModel from '../models/eventModel.js';
//import cloudinary from '../utils/cloudinary.js';
//import  upload  from '../Middlewares/multer.js';
//import  body  from 'express-validator';
import { validationResult } from 'express-validator';
import  asyncWrapper  from '../Middlewares/async.js';

// Define your validation middleware separately
// import eventValidationMiddleware from '../Middlewares/eventValidationMiddleware.js';

//export const test = asyncWrapper(async (req, res, next) => {
  //console.log(req.body);
  //console.log(req.files);
  //console.log(req.file);
  
  //next();
//});

export const createEvent = asyncWrapper(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array()[0].msg });
  }

  try {
    //const result = await cloudinary.uploader.upload(req.file.path,function(err,result){
      //if (err) {
        //return res.status(500).json({ msg: err.message });
      //}
    //});
    
    const newEvent = await eventModel.create({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      location: req.body.location,
      image: req.body.image
    });

    res.status(201).json({ task: newEvent });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

export const getEventById = asyncWrapper(async (req, res) => {
  try {
    const foundedEvent = await eventModel.findById(req.params.id);
    if (!foundedEvent) {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(200).json(foundedEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server Error' });
  }
});

export const getAllEvents = asyncWrapper(async (req, res) => {
  try {
    const getAll = await eventModel.find();
    res.status(200).json({ task: getAll });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

export const updateEvent = asyncWrapper(async (req, res) => {
  try {
    const eventUpdate = await eventModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!eventUpdate) {
      return res.status(404).json({ msg: 'No event with this ID' });
    }
    res.status(200).json({ task: eventUpdate });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

export const deleteEvent = asyncWrapper(async (req, res) => {
  try {
    const eventDel = await eventModel.findByIdAndDelete(req.params.id);
    if (!eventDel) {
      return res.status(404).json({ msg: 'No event with this ID' });
    }
    res.status(200).json({ task: eventDel });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Server Error' });
  }
})



