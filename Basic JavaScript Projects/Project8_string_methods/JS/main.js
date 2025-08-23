function Put_Together() {                                               // function name          
    var part1 = "This is ";                                             // variable declaration   
    var part2 = "a concatenated ";                                      // variable declaration
    var part3 = "string.";                                              // variable declaration    
    var whole = part1.concat(part2, part3);                             // concatenate variables 
    document.getElementById("Concatenate").innerHTML = whole;           // display result in HTML element
}

function Slice_Method() {                                                   // function name
    var sentence = "All work and no play makes Johnny a dull cracker.";     // variable declaration
    var section = sentence.slice(27, 48);                                   // selects part of the string
    document.getElementById("Slice").innerHTML = section;                   // display result in HTML element
}

function Upper_and_Lower_Method() {                                                                                                                                                                      // function name    
    var text = "Hello World!";                                                                                  // variable declaration  
    var upper = text.toUpperCase();                                                                             // change to uppercase  
    var lower = text.toLowerCase();                                                                             // change to lowercase
    document.getElementById("Upper_and_Lower").innerHTML = "Uppercase: " + upper + "<br>Lowercase: " + lower;   // display result in HTML element
}

function Numbers_to_String_Method() {                                       // function name        
    var x = 182;                                                            // variable declaration of number type
    document.getElementById("Numbers_to_String").innerHTML = x.toString();  // convert number to string and display in HTML element
}

function Precision_Method() {                                               // function name    
    var x = 12938.3012987376112;                                            // variable declaration of number type
    document.getElementById("Precision").innerHTML = x.toPrecision(10);     // display number with specified precision in HTML element
}

function Fixed_Method() {                                                   // function name    
    var num = 5.56789;                                                      // variable declaration of a decimal number  
    var n = num.toFixed(2);                                                 // format number to 2 decimal places
    document.getElementById("Fixed").innerHTML = n;                         // display result in HTML element    
}