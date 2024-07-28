// Assuming this is in a file named contactController.js

import contactModel from '../models/contact.models.js';

const contactController = {
  createContact: async (req, res) => {
    try {
      const newCont = await contactModel.create(req.body);
      res.status(201).json({
        task: newCont
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ msg: 'Server Error' });
    }
  },
  getContactById: async (req, res, next) => {
    try {
      const foundedContact = await contactModel.findById(req.params.id);
      if (!foundedContact) {
        return next(new Error(`Contact not found`)); // Assuming NotFoundError is defined elsewhere
      }
      
      return res.status(200).json(foundedContact);
    } catch (error) {
      next(error);
    }
  },
  getAllContact: async (req, res) => {
    try {
      const getAll = await contactModel.find();
      res.status(200).json({
        tasks: getAll // Assuming you meant 'tasks' instead of 'task'
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  },
  updateContact: async (req, res) => {
    try {
      const contactUpdate = await contactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!contactUpdate) {
        return res.status(400).json({ msg: `No task with this id` });
      }
      res.status(200).json({
        task: contactUpdate
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  },
  deleteContact: async (req, res) => {
    try {
      const contactDel = await contactModel.findByIdAndDelete(req.params.id);
      if (!contactDel) {
        return res.status(404).json({ msg: `No task with this id` });
      }
      res.status(200).json({
        task: contactDel
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  }
};

export default contactController;
