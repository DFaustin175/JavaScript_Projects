var Globe = 20;

function add1(a) {
    var a = a + Globe;
    document.getElementById("firstFunction").innerHTML = a;
}

function sub1(a) {
    var Local = 10;
    var a = a - Local;
    document.getElementById("secFunction").innerHTML = a;
}

function error(a) {
    var a = a - Local;
    document.getElementById("wontwork").innerHTML = a;
}

function displayDate() {
    if(new Date().getHours() < 18) {
        document.getElementById("todaysDate").innerHTML = "How are you today?";
    }
}

function checkVal() {
    var num;
    num = document.getElementById("num").value;
    if(num > 50) {
        document.getElementById("check").innerHTML = "The number is greater than 50";
    }
}

//utilizes the if else method
function checkAge() {
    var age;
    age = document.getElementById("age").value;
    if(age > 18)
    {
        document.getElementById("Vote").innerHTML = "You are old enough to vote";
    }
    else
    {
        document.getElementById("Vote").innerHTML = "You are not old enough to vote";
    }
}

//Utilizes the else if method
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time"
    }
    else if(Time >= 12 == Time < 18) {
        Reply = "It is the afternoon"
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}