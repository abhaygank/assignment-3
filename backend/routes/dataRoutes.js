const express = require('express');
const { getAllData, createData, updateData, deleteData } = require('../controllers/dataController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getAllData).post(protect, createData);
router.route('/:id').put(protect, updateData).delete(protect, deleteData);

module.exports = router;
