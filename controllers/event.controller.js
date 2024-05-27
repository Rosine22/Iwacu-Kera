const mongoose = require('mongoose') // Contact controllers here
const eventModel = require( "../models/eventModel.js");

const eventController = {
     createEvent : async (req, res) => {
        try {
          const newEvent = await eventModel.create(req.body)
          res.status(201).json({
            task: newEvent
          })
        }
        catch (err) {
          console.log(err.message)
        }
      },
      getEventById: async (req, res, next) => {
        try{
            const foundedEvent = await eventModel.findById(req.params.id)
            if (!foundedEvent) {
                return next(new NotFoundError(`Contact not found`))
            }
            
              return  res.status(200).json(foundedEvent)
            }
        catch (error) {
            next(error);
            
          }
    }, 
      getA: async (req, res) => {
        try {
          const getAll = await eventModel.find();
          res.status(200).json({ // Added missing closing parenthesis
            task: getAll
          });
        } catch (err) {
          console.log(err);
          res.status(500).json({ msg: 'Server Error' }); // Send a response in case of an error
        }
      },
     updateEvent: async(req, res) => {
        const eventUpdate = await eventModel.findByIdAndUpdate(req.params.id, req.body,{set:true}) 
        try {
          if(!eventUpdate) {
            return res.status(400).json({msg:`No event with this id`})
          }
          res.status(200).json({
            task: eventUpdate
          })
        }
        catch(err) {
          console.log(err)
        }
      },
      deleteEvent: async(req, res) => {
        const id = req.params.id
        const Eventdel = await eventModel.findByIdAndDelete(id)
        try{
          if(!Eventdel) {
            return res.status(404).json({msg:`No task with this id`})
          }
          res.status(200).json({
            task: Eventdel
          })
        }
        catch(err) {
          console.log(err)
        }
      }
    }
// export default contactController
module.exports = {eventController}

