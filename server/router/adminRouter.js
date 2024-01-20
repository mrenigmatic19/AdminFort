const express = require('express');
const { getAdmin, postAdmin } = require('../controller/adminController');

const router = express.Router();

router.get('/', getAdmin);
router.post('/', postAdmin);

module.exports=router;