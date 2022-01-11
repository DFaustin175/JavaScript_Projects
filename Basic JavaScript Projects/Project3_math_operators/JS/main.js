//adds 2 numbers
function mathOp(n1, n2) {
    x = n1 + n2;
    document.getElementById("math").innerHTML = x;
}


//Subtracts 2 numbers
function subtract(s1, s2) {
    s = s1 - s2;
    document.getElementById("subtract").innerHTML = s;
}

//multiplies and divides 2 numbers
function multanddiv(m1, m2, d1, d2) {
    mult = m1 * m2;
    div = d1 / d2;
    document.getElementById("multiply").innerHTML = mult;
    document.getElementById("division").innerHTML = div;
}

//returns the remainder of 2 numbers
function remainder(r1, r2) {
    remain = r1 % r2;
    document.getElementById("remainder").innerHTML = remain;
}

//returns the negative of a number
function howmanymore() {
    c = 20;
    document.getElementById("math").innerHTML = -c;
}

//returns the increment of 20
I = 20;
I++;
document.write(I);

//returns the decrement of 20
D = 20;
D--;
document.write(D);

//shows a randopm number between 0 and 100 in a alert window
window.alert(Math.random() * 100);

//writes out PI
document.write(Math.PI);