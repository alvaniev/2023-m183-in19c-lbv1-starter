// moudule providing objects and functions for routing
const express = require('express');

// import controller functions
const userCtrl = require('../controllers/user');
const mainCtrl = require('../controllers/main');

const router = express.Router();


router.get('/hw', mainCtrl.getHelloWorld);
router.post('/pm', mainCtrl.postMessage);



module.exports = router;