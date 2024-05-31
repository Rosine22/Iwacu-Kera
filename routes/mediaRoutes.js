import express from 'express';
import { Router } from 'express';
import { getMedias, getMediaById, createMedia, updateMedia, deleteMedia} from '../controllers/mediaControllers.js';

const mediaRoutes = Router();

mediaRoutes.get('/list', getMedias);
mediaRoutes.get('/:id', getMediaById);
mediaRoutes.post('/create', createMedia);
mediaRoutes.put('/update/:id', updateMedia);
mediaRoutes.delete('/delete/:id', deleteMedia);

export default mediaRoutes;
