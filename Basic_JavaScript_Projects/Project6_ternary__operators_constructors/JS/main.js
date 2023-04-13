//Ternary operation
//Should display site entry allowed to 21+
function Age_Function() {
    var Age, Can_enter;
    Age = document.getElementById("Age").value;
    Can_enter = (Age < 21) ? "You are too young":"You are old enough";
    document.getElementById("Verify_age").innerHTML = Can_enter + " to enter.";
}

//Constructor function
//This keyword
function Animal(Species, Breed, Qty) {
    this.Animal_Species = Species;
    this.Animal_Breed = Breed;
    this.Animal_Qty = Qty;
}
//New keyword
var East = new Animal("Dogs", "Yorkie", 2);
var West = new Animal("Cats", "Tabby", 5);
function shelter_Function() {
    document.getElementById("Animal_shelter").innerHTML =
    "West shelter has " + West.Animal_Qty + " "+ West.Animal_Species +
    " that are " + West.Animal_Breed;
}

//Nested function
//Should return result 8
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 6;
        function Plus_two() {Starting_point += 2;}
        Plus_two();
        return Starting_point;
    }
}