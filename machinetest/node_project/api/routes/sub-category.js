const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
router.post('/add', categoryController.add);
router.put('/edit/:id', categoryController.edit);
router.delete('/delete/:id', categoryController.delete);
router.get('/sublist', categoryController.sublist);
module.exports = router;