function my_Dictionary() {                                              // Function to create a dictionary and display its properties
    var Person = {                                                      // Creating a dictionary object named Person
        First_Name: "Tony",
        Last_Name: "Neagle",
        Gender: "Male",
        Age: 63,
        Eye_Color: "Blue",
        Hair_Color: "White",
        Height: "5' 10\"",
        Weight: "215 lbs",
        Occupation: "Retired",
        Hobbies: "Fishing, Hunting, Camping, Hiking, Biking, Reading, Writing, Programming",
        Favorite_Color: "Blue",
        Favorite_Food: "Pizza",
        Favorite_Music: "etc",
    };
    document.getElementById("Dictionary").innerHTML =                           // Displaying the dictionary properties in the HTML element with id "Dictionary"
        "My Dictionary: " 
        + Person.First_Name + " " + Person.Last_Name + ", " +                   // Concatenating the properties of the Person dictionary to create a string
        Person.Occupation + ", " + Person.Age + " " + " years old";             
        delete Person.First_Name;                                               // Deletes the First_Name property from the dictionary before it is displayed giving the result of "undefined" in the output                
    document.getElementById("Dictionary") .innerHTML =Person.First_Name;        // Displaying the updated dictionary property in the HTML element with id "Dictionary"       
}


