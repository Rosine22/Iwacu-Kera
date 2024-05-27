const express = require('express');
const proverbRoutes = express.Router();
const {getProverbs,createProverb,deleteProverb,updateProverb, getProverbsById} = require('../controllers/proverbController.js');

proverbRoutes.get('/list', getProverbs);
proverbRoutes.get('/:id', getProverbsById);
proverbRoutes.post('/create', createProverb);
proverbRoutes.put('/update/:id', updateProverb);
proverbRoutes.delete('/delete/:id', deleteProverb);

module.exports = {proverbRoutes};
