document.write(typeof "cheese");

document.write(isNaN("Cheese fries"));
document.write(isNaN(27));


function showInfin(a) {
    var x = a;
    document.getElementById("Infinity").innerHTML = x;
}

function showNInfin(b) {
    var n = b;
    document.getElementById("NInfinity").innerHTML = n;
}

document.write("<br>");
document.write(10 > 2);
document.write("<br>");
document.write(10 < 2);

console.log(2+2);
console.log(10 < 2);

document.write("<br>");
document.write(10 == 10);
document.write("<br>");
document.write(10 == 3);
document.write("<br>");
document.write("<br>");

X = 10;
Y = 10;
document.write(X === Y);
document.write("<br>");
A = 10;
B = "22";
document.write(A === B);
document.write("<br>");
C = 10;
D = "10";
document.write(C === D);
document.write("<br>");
E = 10;
F = 11;
document.write(E === F);
document.write("<br>");


document.write("<br>");
document.write(11 > 2 && 20 > 3);
document.write("<br>");
document.write(11 > 33 && 11 > 2);

document.write("<br>");
document.write(11 > 4 || 23 < 9);
document.write("<br>");
document.write(11 < 0 || 12 < 2);

document.write("<br>");
function notEqual(g, h) {
    document.getElementById("Not").innerHTML = !(g > h);
}

function notEqual2(g, h) {
    document.getElementById("Not2").innerHTML = !(g > h);
}