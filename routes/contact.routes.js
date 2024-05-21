// Contact routes here
const express = require(  'express')
const router = express.Router()
const  {contactController} = require( '../controllers/contact.controller.js')
// const  contactModel = require( '../models/contact.models.js')

router.post('/create', contactController.createContact)
router.get('/lists', contactController.getAllContact)
router.get('/:id' , contactController.getContact)
router.put('/update/:id' , contactController.updateContact)
router.delete('/delete/:id', contactController.deleteContact)

module.exports = {router}