const Item = require("../models/newitem");
const taskMailer = require("../mailers/sendmail")
console.log("Controller is Working")

function toDate(dStr) { // 2:40
	var now = new Date();
  if(dStr[0] == '0') dStr[0] = '';
  now.setHours(dStr.substr(0,dStr.indexOf(":")));
  now.setMinutes(dStr.substr(dStr.indexOf(":")+1));
  now.setSeconds(0);
 	return now;
}

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
    try{
      console.log(req.body);
      Item.find({}, async function (err, toDoList) {
        if (err) { 
          console.log('List Cannot be Printed'); 
            return;     
        }
        var flag = true;
        for (let i in toDoList)
        {
          var d = new Date(req.body.startDate);
            if( toDoList[i].mailid_interviewer== req.body.mailid_interviewer || toDoList[i].mailid_student== req.body.mailid_student || toDoList[i].mailid_interviewer== req.body.mailid_student || toDoList[i].mailid_student== req.body.mailid_interviewer){
              if(toDoList[i].startDate.getDate() == d.getDate()){
                var startTime = toDate(req.body.startTime);
                var endTime = toDate(req.body.endTime);
                var currStartTime = toDate(toDoList[i].startTime);
                var currEndTime = toDate(toDoList[i].endTime);
                if(
                  (startTime.getTime() >= currStartTime.getTime() && startTime.getTime() <= currEndTime.getTime())
                  || (endTime.getTime() >= currStartTime.getTime() && endTime.getTime() <= currEndTime.getTime())
                  ) {
                  flag = false;
                  console.log("nahi hoga interview");
                }
                
              }
              
            }
            console.log("Interview can't be scheduled");
        }
        console.log(flag);
        if (flag==true)
        {
          const response = await Item.create({
            startDate: req.body.startDate,
            startTime: req.body.startTime,
            endTime : req.body.endTime,
            description: req.body.description,
            name_interviewer: req.body.name_interviewer,
            name_student: req.body.name_student,
            mailid_interviewer: req.body.mailid_interviewer,
            mailid_student: req.body.mailid_student,
          });
          console.log("response of creation", response);
          taskMailer.newTask(req.body,response._id); 
          return res.redirect('back');
        }

      });    

    
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
    taskMailer.newTask(req.body);
  
  return res.redirect('back');
}
module.exports.Showlist= function(req,res){

  Item.find({}, function (err, toDoList) {


    if (err) { console.log('List Cannot be Printed'); 
    return;     
  }

      const id = req.params['id'];
      var document;
      for (let i in toDoList){
        if (toDoList[i]._id == id)
        {
          document = toDoList[i];
        }
      }
      return res.render('specfic_data_page', {
        document: document,
      });

  }
  )
      
}