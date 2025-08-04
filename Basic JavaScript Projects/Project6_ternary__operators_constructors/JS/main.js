function Vote_Function() {                                                          // This function checks if a person is old enough to vote based on their age input.
    var Age, Can_vote;                                                               // Declare variables for age and voting eligibility.    
    Age = document.getElementById("Age").value;                                      // Get the age input from the user.    
    Can_vote = (Age < 18) ? "You are too young " : "You are old enough ";           // Use a ternary operator to determine if the user is old enough to vote.
    document.getElementById("Election").innerHTML = Can_vote + " to vote!.";        // Display the result in the HTML element with id "Election".

}

function Vehicle(Make, Model, Year, Color) {                                        // Constructor function to create a Vehicle object.
    this.Vehicle_Make = Make;                                                        // Assign the Make parameter to the Vehicle_Make property.
    this.Vehicle_Model = Model;                                                      // Assign the Model parameter to the Vehicle_Model property.
    this.Vehicle_Year = Year;                                                       // Assign the Year parameter to the Vehicle_Year property.
    this.Vehicle_Color = Color;                                                     // Assign the Color parameter to the Vehicle_Color property.
}

function myFunction() {                                                                 // This function creates instances of the Vehicle object and displays their properties.
    var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");                              // Create a new Vehicle object for Jack.                
    var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");              // Create a new Vehicle object for Emily.
    var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard Yellow");                    // Create a new Vehicle object for Erik.   
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + ", " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year + ".";                                   // Display Erik's vehicle details in the HTML element with id "Keywords_and_Constructors".

}

function myFunction2() {                                                                    // This function creates another instance of the Vehicle object and displays its properties.
    var Pete = new Vehicle("Chevrolet", "Corvette", 2021, "Blue");                          // Create a new Vehicle object for Pete.
    document.getElementById("New_and_This").innerHTML =
        "Pete drives a " + Pete.Vehicle_Color + "-colored " + Pete.Vehicle_Make + ", " + Pete.Vehicle_Model +
        " manufactured in " + Pete.Vehicle_Year + ".";                                      // Display Pete's vehicle details in the HTML element with id "New_and_This".   
}

function myFunction3() {                                                                    // This function creates another instance of the Vehicle object and displays its properties. 
    var John = new Vehicle("Tesla", "Model S", 2022, "Black");                              // Create a new Vehicle object for John.
    document.getElementById("Keyword_as_Variable").innerHTML =
        "John drives a " + John.Vehicle_Color + "-colored, " + John.Vehicle_Make + ", " + John.Vehicle_Model +
        ", manufactured in " + John.Vehicle_Year + ".";                                     // Display John's vehicle details in the HTML element with id "Keyword_as_Variable".  
}

function Count_Function() {                                                                 // This function demonstrates a nested function that increments a starting point and returns it.
    document.getElementById("Nested_Function").innerHTML = count();                         // Call the count function and display its result in the HTML element with id "Nested_Function".
    function count() {                                                                      // Nested function to increment a starting point.
        var starting_point = 9;                                                             // Initialize a variable starting_point to 9.
        function plus_one() { starting_point += 1; }                                        // Nested function to increment starting_point by 1.
        plus_one();                                                                         // Call the plus_one function to increment starting_point.
        return starting_point;                                                              // Return the incremented value of starting_point.
    }
}