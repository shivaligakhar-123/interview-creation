const Item = require("../models/newitem");
const taskMailer = require("../mailers/sendmail")
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
module.exports.createList = async function (req, res) {
    try{
      await Item.create({
        startDate: req.body.startDate,
        startTime: req.body.startTime,
        endTime : req.body.endTime,
        description: req.body.description,
        name_interviewer: req.body.name_interviewer,
        name_student: req.body.name_student,
        mailid_interviewer: req.body.mailid_interviewer,
        mailid_student: req.body.mailid_student,
    
        flag: true
      });
      taskMailer.newTask(req.body);


  
  return res.redirect('back');
      

    
    }
    catch(err){
        console.log('Error',err);
        return;
    }
    
  }

//   module.exports.createSession = function(req, res){
//     req.flash('success', 'Task created successfully');
//     return res.redirect('/',{flash:{success:"Task created successfully"}});
// }

// Controller for Deleting Task
module.exports.DeleteList = function (req, res) {
  console.log(req.body);
  for(let i in req.body){
      console.log(i);
      if (i.startsWith('check'))
      {
        Item.findByIdAndDelete(req.body[i], function (err) {
          if (err) {
            console.log('Error in Deleting the item'); 
            return;
          }    
        })
      }
  }
  return res.redirect('back');
}

// Controller to edit things
module.exports.EditList = function (req, res) {
      console.log(req.body);
      Item.findByIdAndUpdate(req.body['edit_id'], {
        startDate: req.body.startDate_c,
        startTime: req.body.startTime_c,
        endTime : req.body.endTime_c,
        description: req.body.description_c
    },function (err) {
      if (err) {
        console.log('Error in Editing the item'); 
        return;
      }

    })
  
  return res.redirect('back');
}