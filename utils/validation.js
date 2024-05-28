const body = require ('express validator');

const createEvent = [
    body('title').not().isEmpty().withMessage('Title is required'),
  body('description').not().isEmpty().withMessage('Description is required'),
];