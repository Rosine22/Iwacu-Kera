// routes/adminRoutes.js
const express = require('express');
// import adminController from '../controllers/adminController.js';
const adminRoutes = express.Router();
const {register,login} = require('../controllers/adminControllers.js');

adminRoutes.post('/register', register);
adminRoutes.post('/login', login);

module.exports =  {adminRoutes};
