//While Loop
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//Length Property
var Sentence = "The length property sets or returns the number of elements in an array.";
var length = Sentence.length;
function the_Length() {
document.getElementById("length_prop").innerHTML = length;
}

//For Loop
var Pets = ["Leia", "Sweetpea", "Chavito", "Rosie"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Pets.length; Y++) {
        Content += Pets[Y] + "<br>";
    }
    document.getElementById("List_of_Pets").innerHTML = Content;
}

//Array
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    Cat_Picture[4] = "destroying";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[4] + " something.";
}

//Object using let
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
        }
}
document.getElementById("Car_Object").innerHTML = car.description();
