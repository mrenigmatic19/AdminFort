const express = require('express');
const { getControl, postControl } = require('../controller/controller');

const router = express.Router();

router.get('/', getControl);
router.post('/', postControl);

module.exports=router;