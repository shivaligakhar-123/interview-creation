const Item = require("../models/newitem");

console.log("Controller is Working")


// Controller for Home...Display
module.exports.home= function (req, res) {
  Item.find({}, function (err, toDoList) {


    if (err) { console.log('List Cannot be Printed'); 
    return;     
  }
    // console.log(toDoList);
    return res.render('home', {
      list: toDoList,
    });
  }
  )
}

// Controller for Creating Task
module.exports.createList = function (req, res) {
  Item.create({
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    description: req.body.description,
    name_interviewer: req.body.name_interviewer,
    name_student: req.body.name_student,
    mailid_interviewer: req.body.mailid_interviewer,
    mailid_student: req.body.mailid_student,

    flag: true
  }, function (err, newContact) {

    if (err) {
      console.log('List cannot be Created');
      return;
    }

    return res.redirect('back');
  }
  )
  // return res.end("<h1>Hello There</h1>")
}

// Controller for Deleting Task
module.exports.DeleteList = function (req, res) {
  console.log(req.body);
  for(let i in req.body){
    console.log(i);
     Item.findByIdAndDelete(req.body[i], function (err) {
      if (err) {
        console.log('Error in Deleting the item'); 
        return;
      }

    })
  }
  return res.redirect('back');
}