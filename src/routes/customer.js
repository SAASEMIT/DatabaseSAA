const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
router.get('/', customerController.list );
router.post('/add', customerController.save);
router.get('/delete/:com_id', customerController.delete);

router.get('/update/:com_id', customerController.edit);
router.post('/update/:com_id', customerController.update);
module.exports = router;
