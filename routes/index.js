const express = require('express');

const router = express.Router();

console.log("Router has been Loaded");
const homeController = require('../controller/home_controller');

// Router for Home Page
router.get('/', homeController.home );

// Routers for creatign and deleting a task
router.post('/create-list',homeController.createList);
router.post('/delete-task',homeController.DeleteList);
router.post('/sendemail',function(req,res,next){
    "use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "shivali123409gakhar@gmail.com", // generated ethereal user
      pass: "mqluvlhhkfwfdowt", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Scaler Academy 👻" <shivali123409gakhar@gmail.com>', // sender address
    to: Item.mailid_interviewer, // list of receivers
    subject: "Interview Scheduled", // Subject line
    html: "<b>Hey Your interview has been scheduled for today!</b>", // html body
  });
  if(info.messageId){
    res.send("email sent");
  }else{
      res.send("email not sent");
  }
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
    
});

module.exports = router;