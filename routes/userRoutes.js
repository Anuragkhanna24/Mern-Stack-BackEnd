// console.log("ram");

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const uploadFileMiddleware = require('../middleware/upload');


router.post('/users', uploadFileMiddleware, userController.createUser);

module.exports = router;