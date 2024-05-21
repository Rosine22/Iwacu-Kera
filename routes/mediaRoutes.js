
const express = require('express');
const mediaRoutes = express.Router();
const {getMedias, getMediaById, createMedia, updateMedia,deleteMedia} = require('../controllers/mediaControllers.js')

mediaRoutes.get('/list', getMedias);
mediaRoutes.get('/:id', getMediaById);
mediaRoutes.post('/create', createMedia);
mediaRoutes.put('/update/upd/:id', updateMedia);
mediaRoutes.delete('/delete/del/:id', deleteMedia);

module.exports = {mediaRoutes};
