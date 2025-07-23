function Addition() {                                                           // Declares a function Addition  
    var addition = 7 + 5;                                                       // Declares a variable addition and assigns it the sum of 7 and 5
    document.getElementById("Button_1").innerHTML = "7 + 5 = " + addition;       // Changes the text of the HTML element with the id "Addition_1" to display the result of the addition
}

function Subtraction() {                                                        // Declares a function Subtraction   
    var subtraction = 7 - 5;                                                    // Declares a variable subtraction and assigns it the difference of 7 and 5
    document.getElementById("Button_2").innerHTML = "7 - 5 = " + subtraction;   // Changes the text of the HTML element with the id "Subtraction_1" to display the result of the subtraction
}
function Multiplication() {                                                     // Declares a function Multiplication
    var multiplication = 7 * 5;                                                 // Declares a variable multiplication and assigns it the product of 7 and 5
    document.getElementById("Button_3").innerHTML = "7 * 5 = " + multiplication; // Changes the text of the HTML element with the id "Multiplication_1" to display the result of the multiplication
}
function Division() {                                                           // Declares a function Division
    var division = 7 / 5;                                                       // Declares a variable division and assigns it the quotient of 7 and 5
    document.getElementById("Button_4").innerHTML = "7 / 5 = " + division;      // Changes the text of the HTML element with the id "Division_1" to display the result of the division
}           
function Multi_Math() {                                                         // Declares a function Multi_Math   
    var multi_math = (7 + 5) * (7 - 5) / (7 / 5);                               // Declares a variable multi_math and assigns it the result of a complex mathematical expression
    document.getElementById("Button_5").innerHTML = "Seven plus 5, multiplied by 7 minus 5, divided by 7 divided by 5, (7 + 5) * (7 - 5) / (7 / 5) = " + multi_math; // Changes the text of the HTML element with the id "Button_5" to display the result of the multi_math operation
}
function Modulus() {                                                            // Declares a function Modulus
    var modulus = 72 % 5;                                                       // Declares a variable modulus and assigns it the remainder of 72 divided by 5
    document.getElementById("Button_6").innerHTML = "When you divide 72 by 5 you have a remander of " + modulus;     // Changes the text of the HTML element with the id "Button_6" to display the result of the modulus operation
}
function Unary() {                                                              // Declares a function Unary
    var x = 10;                                                                 // Declares a variable x and assigns it the value 10   
    document.getElementById("Button_7").innerHTML = "The unary operator changes the sign of a number, so 10 becomes " + -x; // Changes the text of the HTML element with the id "Button_7" to display the result of applying the unary operator to x
}
function Increment() {                                                          // Declares a function Increment
    var y = 5;                                                                  // Declares a variable y and assigns it the value 5                                      
    y++;                                                                        // Increments the value of y by 1
    document.getElementById("Button_8").innerHTML = "The increment operator adds 1 to a number, so 5 becomes " + y; // Changes the text of the HTML element with the id "Button_8" to display the result of applying the increment operator to x
}
function Decrement() {                                                          // Declares a function Decrement  
    var z = 5;                                                                  // Declares a variable z and assigns it the value 5  
    z--;                                                                        // Decrements the value of z by 1
    document.getElementById("Button_9").innerHTML = "The decrement operator subtracts 1 from a number, so 5 becomes " + z; // Changes the text of the HTML element with the id "Button_9" to display the result of applying the decrement operator to x
}
function Random() {                                                             // Declares a function Random
    document.getElementById("Button_10").innerHTML =                            // Changes the text of the HTML element with the id "Button_10" to display a random number
"<p>Math.random:</p>" + Math.random() * 56;                                     // Displays a random number between 0 and 56 in an alert box
}

function DisplayPI() {                                                          // Declares a function DisplayPI
    document.getElementById("Button_11").innerHTML =                            // Changes the text of the HTML element with the id "Button_11" to display various mathematical constants   
"<p><b>Math.E:</b> " + Math.E + "</p>" +                                        // Displays the value of Euler's number
"<p><b>Math.PI:</b> " + Math.PI + "</p>" +                                      // Displays the value of PI    
"<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +                                // Displays the square root of 2
"<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +                            // Displays the square root of 1/2
"<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +                                    // Displays the natural logarithm of 2
"<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +                                  // Displays the natural logarithm of 10
"<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +                                // Displays the base-2 logarithm of E
"<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>";                               // Changes the text of the HTML element with the id "Button_10" to display the value of PI
}