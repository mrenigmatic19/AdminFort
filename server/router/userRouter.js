const express = require('express');
const { getUser, postUser } = require('../controller/userController');

const router = express.Router();

router.get('/', getUser);
router.post('/', postUser);

module.exports=router;