import express from 'express';
import { Router } from 'express';
import  contactController  from '../controllers/contact.controller.js';
// import contactModel from '../models/contact.models.js'; // Uncomment and use if needed

const router = Router();

router.post('/create', contactController.createContact);
router.get('/lists', contactController.getAllContact);
router.get('/:id', contactController.getContactById);
router.put('/update/:id', contactController.updateContact);
router.delete('/delete/:id', contactController.deleteContact);

export default router;
