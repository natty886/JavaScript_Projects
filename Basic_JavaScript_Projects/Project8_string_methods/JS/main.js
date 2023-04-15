//CONCAT() Method
function full_Sentence() {
    var part_1 = "Wayne's ";
    var part_2 = "World! ";
    var part_3 = "Party Time! ";
    var part_4 = "Excellent!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//SLICE() Method
function slice_Method() {
    var Sentence = "Everybodys working for the weekend.";
    var Section = Sentence.slice(23,34);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase() Method
function upper_Method() {
    var Text1 = "change to caps!";
    var Text2 = Text1.toUpperCase();
    document.getElementById("upper_Case").innerHTML = Text2;
}

//search() Method
function search_Method() {
    var TextA = "Find the specific position of a word in this sentence."
    var Where = TextA.search("word");
    document.getElementById("search").innerHTML = Where;
}

//toString() Method
function string_Method() {
    var X = 222;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision() Method
function precision_Method() {
    var Jenny = 867.530919811982;
    document.getElementById("Precision").innerHTML = Jenny.toPrecision(7);
}

//toFixed() Method
function fixed_Method() {
    var Num = 77.808;
    document.getElementById("Fixed").innerHTML = 
        Num.toFixed(0) + "<br>" +
        Num.toFixed(2) + "<br>" +
        Num.toFixed(4) + "<br>" +
        Num.toFixed(6);
}

//valueOf() Method
function valueof_Method() {
    var Y = 123;
    document.getElementById("Value_of").innerHTML = 
        Y.valueOf() + "<br>" +
        (123).valueOf() + "<br>" +
        (100 + 23).valueOf();
}