const nodeMailer = require('../config/nodemailer');


// this is another way of exporting a method
exports.newTask = (task,id) => {
    console.log('inside newTask mailer', task);
    
    nodeMailer.transporter.sendMail({
       from: 'shivali123409gakhar@gmail.com',
       to: task.mailid_interviewer,
       subject: "Interview Scheduled!",
       html: '<h1>Yup, your interview is scheduled</h1> <a href="http://localhost:8003/show/'+id+'">Link </a>'

                     
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }

        console.log('Message sent', info);
        return;
    });
}