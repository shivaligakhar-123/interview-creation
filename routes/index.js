const express = require('express');

const router = express.Router();

console.log("Router has been Loaded");
const homeController = require('../controller/home_controller');

// Router for Home Page
router.get('/', homeController.home );

// Routers for creatign and deleting a task
router.post('/create-list',homeController.createList);
// router.get('/', function(req, res) {
//     res.render('/', { message: req.flash('success','Interview Scheduled Successfully') });
//   });
  
router.post('/delete-task',homeController.DeleteList);
// router.post('/sendemail',function(req,res,next){

// });

module.exports = router;