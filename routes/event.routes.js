const express = require ('express');
// import eventController from '../controllers/event.controller.js';
const eventRoutes = express.Router();
const {getEventById,deleteEvent,updateEvent,  createEvent} = require('../controllers/event.controller')

eventRoutes.post('/create', createEvent);
eventRoutes.get('/:id', getEventById);
eventRoutes.put('/update/:id', updateEvent);
eventRoutes.delete('/delete/:id', deleteEvent);

module.exports = {eventRoutes};
