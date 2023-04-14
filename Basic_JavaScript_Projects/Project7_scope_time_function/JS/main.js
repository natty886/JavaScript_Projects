//Global Variable
let petName = "Princess Leia";

//If Statement
//Using global variable petName
//After 5pm, result should be "See you tomorrow"
function get_Time() {
    if (new Date().getHours() < 17) {
        Alert = "How is " + petName + ", today?";
    }
    else {
        Alert = "See you tomorrow!";
    }
    document.getElementById("Alert").innerHTML = Alert;
}

//Else Statement
//Local variable
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Time Function and Else If Statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

//Error
//Console displays that the variable catName needs to be defined with "Sweetpea"
function feeding_Time() {
    console.log("catName = Sweetpea");   
    document.getElementById("Error").innerHTML = "Time to feed the cat, " + catName; 
}
    