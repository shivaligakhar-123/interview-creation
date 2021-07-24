// This Script has been added so that I can calculate Today's date (the day this app is used)
// And disable all the previous dates so that user cannot input a date which is in the past
// console.log("script Loaded");
var date = new Date();
// console.log(date.getDate(), date.getMonth() + 1, date.getFullYear());

if (date.getDate() < 10 && date.getMonth() + 1 < 10) {
    var today = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-0' + date.getDate();
} else if ((date.getMonth() + 1) < 10 && date.getDate() > 10) {
    var today = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + date.getDate();
} else if ((date.getMonth() + 1) > 10 && date.getDate() < 10) {
    var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-0' + date.getDate();
} else {
    var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

// console.log(document.getElementById("datepicker").min);
document.getElementById("datepicker").setAttribute('min', today);
// console.log(document.getElementById("datepicker").min);


function fn1(){

    var ele = document.getElementById("strike");
    var ele2 = document.getElementById("strike2");
    var ele3 = document.getElementById("shift");
    // console.log(ele.style);
    if(ele.style.textDecoration == "line-through")
    {
        ele.style.textDecoration = "none";
        ele2.style.textDecoration = "none";
        ele3.innerHTML = "Mark Done";
        ele3.style.backgroundColor="#a50000";
        
    }
    else
    {
        ele.style.textDecoration = "line-through";
        ele2.style.textDecoration = "line-through";
        ele3.innerHTML = "Mark Undone";
        ele3.style.backgroundColor="#004900";
    }

}

