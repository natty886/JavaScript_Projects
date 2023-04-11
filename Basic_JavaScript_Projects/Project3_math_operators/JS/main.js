//Addition and display the result
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

//Subtraction and display the result
function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
}

//Multiplication and display the result
function multiplication() {
    var simple_Math1 = 6 * 6;
    document.getElementById("Math3").innerHTML = "6 x 6 = " + simple_Math1;
}

//Division and display the result
function division() {
    var simple_Math2 = 36 / 6;
    document.getElementById("Math4").innerHTML = "36 / 6 = " + simple_Math2;
}

//Multiply, subtract, add and divide all at once
function more_Math() {
    var simple_Math3 = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math3;
}

//Modulus display result
function modulus_Operator() {
    var simple_Math4 = 25 % 6;
    document.getElementById("Math6").innerHTML = "When dividing 25 by 6 you have a remainder of: " + simple_Math4;
}

//Unary display result
function negation_Operator() {
    var simple_Math5 = 10;
    document.getElementById("Math7").innerHTML = -simple_Math5;
}

//Increment
function increment_Function() {
    var incrementation = 5;
    incrementation++;
    document.getElementById("Math8").innerHTML = incrementation;
}

//Decrement
function decrement_Function() {
    var decrementation = 5.25;
    decrementation--;
    document.getElementById("Math9").innerHTML = decrementation;
}

//Random
function math_Random() {
    document.getElementById("Math10").innerHTML = "Math.random() displays random number between 1 and 10: " + Math.random() * 10;
}

//Rounding Up
function math_Round() {
    document.getElementById("Math11").innerHTML = "Math.round() rounds 5.25 to nearest integer " + Math.round(5.25);
}
