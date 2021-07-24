const express = require('express');

const router = express.Router();

console.log("Router has been Loaded");
const homeController = require('../controller/home_controller');

// Router for Home Page
router.get('/', homeController.home );

// Routers for creatign and deleting a task
router.post('/create-list',homeController.createList);
router.post('/delete-task',homeController.DeleteList);

module.exports = router;