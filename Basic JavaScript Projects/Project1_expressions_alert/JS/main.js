document.write("Hello World");
document.write("<br>");


var A = "This is a string";

var string = "This is an alert";
window.alert(string);

var joke = "And then I said \"Lawnmower I hardly know her!\"";
var B = joke + A;
document.write(B);

var food = "the foods", best = "Pizza", prettygood = "Pasta", awful = "Kale";
//Changing Font Color
var food = food.fontcolor("blue");
var best = best.fontcolor("blue");
var prettygood = prettygood.fontcolor("blue");
var awful = awful.fontcolor("blue");
//Changing Font Color
document.write(food, best, prettygood, awful);

document.write(8+8);

function changeColor(newColor) {
    var elem = document.getElementById("para")
    elem.style.color = newColor;
}