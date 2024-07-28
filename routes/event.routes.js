import express from 'express';
import { Router } from 'express';
import {createEvent,getEventById,getAllEvents,updateEvent,deleteEvent} from '../controllers/event.controller.js';
// import { eventValidationMiddleware } from '../utils/validation.js'; // Uncomment if needed
//import  upload  from '../Middlewares/multer.js'; // Assuming upload is a middleware for file uploads
//import upload from '../Middlewares/multer.js'; //
const eventRoutes = Router();

eventRoutes.post('/create',createEvent);
eventRoutes.get('/list/:id', getEventById);
eventRoutes.get('/listevents', getAllEvents);
eventRoutes.put('/update/:id', updateEvent);
eventRoutes.delete('/delete/:id', deleteEvent);

export default eventRoutes;
