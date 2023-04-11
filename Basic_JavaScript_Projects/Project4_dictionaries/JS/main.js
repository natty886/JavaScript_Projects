//Dictionary "Vehicle" with 5 key-value pair function
function Dictionary() {
    var Vehicle = {
        Type:"Truck",
        Color:"Green",
        Make:"Toyota",
        Year: 2005,
        Model:"Tacoma"
    };
    //Deletes "Year: 2005" key before display
    delete Vehicle.Year;
    //Vehicle Make output should be "Toyota" and Vechicle Year should display "undefined"
    document.getElementById("Dictionary").innerHTML = "Vehicle Make: " + Vehicle.Make + ", Vehicle Year: " + Vehicle.Year;
}