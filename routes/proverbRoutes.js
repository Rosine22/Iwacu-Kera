import express from 'express';
import { Router } from 'express';
import { getProverbs, createProverb, deleteProverb, updateProverb, getProverbsById } from '../controllers/proverbController.js';

const proverbRoutes = Router();

proverbRoutes.get('/list', getProverbs);
proverbRoutes.get('/:id', getProverbsById);
proverbRoutes.post('/create', createProverb);
proverbRoutes.put('/update/:id', updateProverb);
proverbRoutes.delete('/delete/:id', deleteProverb);

export default proverbRoutes;
