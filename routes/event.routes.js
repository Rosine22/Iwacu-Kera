const express = require ('express');
// import eventController from '../controllers/event.controller.js';
const eventRoutes = express.Router();
const {eventController} = require('../controllers/event.controller.js')

eventRoutes.post('/create', eventController.createEvent);
eventRoutes.get('/:id', eventController.getEventById);
eventRoutes.get('/list', eventController.getAllEvent);
eventRoutes.put('/update/:id', eventController.updateEvent);
eventRoutes.delete('/delete/:id', eventController.deleteEvent);

module.exports = {eventRoutes};
