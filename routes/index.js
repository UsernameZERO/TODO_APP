const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router is loaded...');

router.get('/',homeController.home);

router.post('/createTasks',homeController.tasks);

router.get('/deleteTaks',homeController.delete);

module.exports = router;