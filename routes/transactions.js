const express = require('express');
const router = express.Router();
const controller = require('../controllers/transactionController');

router.get('/', controller.getAll);
router.post('/', controller.add);
router.delete('/:id', controller.delete);
router.get('/summary', controller.getSummary);

module.exports = router;