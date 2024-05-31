import express from 'express';
import { Router } from 'express';
import {register,login} from '../controllers/adminControllers.js';

const adminRoutes = Router();

adminRoutes.post('/register', register);
adminRoutes.post('/login', login);

export default adminRoutes;
