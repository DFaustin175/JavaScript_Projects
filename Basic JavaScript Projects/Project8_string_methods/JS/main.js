function full_sentence() {
    var part_1 = "Javascript";
    var part_2 = " is driving me crazy"
    var whole_sent = part_1.concat(part_2);
    document.getElementById("Concat").innerHTML = whole_sent;
}

function slice() {
    var sentence = "When will the JavaScript end?"
    var sliced = sentence.slice(14, 24);
    document.getElementById("word").innerHTML = sliced;
}

function upperCase() {
    var sentence = "When will the JavaScript end?"
    var uppersentence = sentence.toUpperCase();
    document.getElementById("allCaps").innerHTML = uppersentence;
}

function searchfor() {
    var sentence = "Oh god more Javascript!?";
    var searched = sentence.search("Javascript");
    document.getElementById("found").innerHTML = searched;
}

function makeString() {
    var X = 190;
    var toString = X.toString();
    document.getElementById("stringNum").innerHTML = toString;
}

function getPrecise() {
    var X = 12.991264981823907;
    var precise = X.toPrecision(5);
    document.getElementById("precision").innerHTML = precise;
}

function getFixed() {
    var X = 2.91789136;
    var fixed = X.toFixed(3);
    document.getElementById("fixed").innerHTML = fixed;
}

function resultfound() {
    var X = "Hello World!";
    var result = X.valueOf();
    document.getElementById("result").innerHTML = result;
}