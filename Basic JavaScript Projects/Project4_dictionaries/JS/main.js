//Dictionary Function
function firstDictionary() {
    var Ryan = { //Sets KVPs for the variable "Ryan"
        Species: "Human?",
        Hair_Color: "Brown",
        Age: 19,
        favorite_super: "Daredevil"
    };
    delete Ryan.Species; //Deletes the Species value
    document.getElementById("Dictionary").innerHTML = Ryan.Species; //Attempts to return Species value but will return "undefined"
}