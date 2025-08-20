var x = 10;                                         // Global variable
function Add_Numbers_1() {                          // Function to add numbers
    document.writeln(20 + x + "<br>");              // Accessing global variable x
}
function Add_Numbers_2() {                          // Function to add numbers    
    document.writeln(x + 100);                      // Accessing global variable x
}
Add_Numbers_1();                                    // Calling the first function   
Add_Numbers_2();                                    // Calling the second function




function Add_Numbers_3() {                          // Function to add numbers 
    var y = 20;                                     // Local variable                                       
    document.writeln(20 + y + "<br>");              // Accessing local variable y
}
function Add_Numbers_4() {                          // Function to add numbers
    var p = 30;                                     // Local variable
    document.writeln(p + 100);                      // Accessing local variable y
}
Add_Numbers_3();                                    // Calling the first function
Add_Numbers_4();                                    // Calling the second function  



var z = 10;                                         // Global variable
function Add_Numbers_5() {                          // Function to add numbers
    document.writeln(15 + z + "<br>");              // Accessing local variable z
}
function Add_Numbers_6() {                          // Function to add numbers
    document.writeln(z + 100);                      // Accessing local variable z
}
Add_Numbers_5();                                    // Calling the first function        
Add_Numbers_6();                                    // Calling the second function  

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    else {
        document.getElementById("Greeting").innerHTML = "Good evening!";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;     // Get the value from the input field
    if (Age >= 18) {                                // Check if age is 18 or older
        Vote = "You are old enough to vote!";       // Set the message for eligible voters
    } 
    else {                                          // If age is less than 18
        Vote = "You are not old enough to vote!";   // Set the message for ineligible voters  
    }

    document.getElementById("How_Old_Are_You?").innerHTML = Vote; // Display the message
}

function Time_Function() {
    var Time = new Date().getHours();               // Get the current time in hours
    var Reply;                                      // Variable to hold the reply
    if (Time < 12 == Time > 0) {                    // Check if time is between 0 and 12
        Reply = "It is morning time.";              // Set the reply for morning time
    } 
    else if (Time >= 12 == Time < 18) {             // Check if time is between 12 and 18
        Reply = "It is afternoon.";                 // Set the reply for afternoon time
    }
    else {                                          // If time is not in the above ranges  
        Reply = "It is night time.";                // Set the reply for night time
    }

    document.getElementById("Time_of_Day").innerHTML = Reply; // Display the reply
}

