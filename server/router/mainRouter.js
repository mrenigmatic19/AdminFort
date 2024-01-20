const express = require('express');
const { getMain, postMain } = require('../controller/mainController');

const router = express.Router();

router.get('/', getMain);
router.post('/', postMain);

module.exports=router;