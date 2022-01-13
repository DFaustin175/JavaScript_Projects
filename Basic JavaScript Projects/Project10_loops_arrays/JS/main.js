function Call_Loop() {
    var X = 1;
    var digit = " ";
    while(X < 11) {
        digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = digit;
}



function getLength() {
    var test = "Hello world!"
    var length = test.length;
    document.getElementById("textlength").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var cars = [];
    cars[0] = "Ford";
    cars[1] = "Toyota";
    cars[2] = "Hyundai";
    cars[3] = "Jeep";
    document.getElementById("Array").innerHTML = "This is a " + cars[2] + "."
}


//Constant Example
function constant_function() {
    const D = "This is constant string";
    var E = " that cannot be changed";
    document.getElementById("Constant").innerHTML = D + E;
}

//Let variable on effective in blocks
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

var F = myFunction(4, 8);
document.write("<br>" + F);

function myFunction(a, b) {
    return a + b;
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.write("<br>" + car.description());

let text = " ";
for (let i = 0; i < 10; i++) {
    if (i === 3) {break}
    text += "The number is " + i + "<br>";
}
document.write("<br>" + text);