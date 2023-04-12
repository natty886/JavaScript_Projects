
//document.write Method and Typeof Operator
//Should return "number" 
document.write(typeof 8);

//Type Coercion
//Should return "708"
function coercion_Function() {
    document.getElementById("Coercion").innerHTML = ("70" + 8);
}

//Boolean True
function booleant_Function() {
    document.getElementById("T_boolean").innerHTML = (55 > 6);
}

//Boolean False
function booleanf_Function() {
    document.getElementById("F_boolean").innerHTML = (205 < 25);
}

//Console.log
//Should return "false"
//console.log(35 < 10);

//Double Equal
//Should return "true"
function twoequal_Function() {
    document.getElementById("Dbl_equal").innerHTML = (8 == 8);
}

//Triple Equal
//Should return "false"
function triequal_Function() {
A = 88;
B = "88";
document.getElementById("Tri_equal").innerHTML = (A === B);
}

//AND Operator
//Should return "true"
function And_Function() {
    document.getElementById("operator1").innerHTML = (5 > 2 && 10 > 4);
}
//OR Operator
//Should return "false"
function Or_Function() {
    document.getElementById("operator2").innerHTML = (55 > 386 || 65 > 272);
}

//NOT Operator
//This false statement should return "true"
function Not_Function() {
    document.getElementById("operator3").innerHTML = !(20 > 100);
}
