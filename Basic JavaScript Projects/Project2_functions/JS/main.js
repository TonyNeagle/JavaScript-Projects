function My_First_Function() {                                          // Declares a function
    var str = "This is the button text!", p = "This is a paragraph!";   // Declares two variables str and p
    
    document.getElementById("Button_Text").innerHTML = str;             // Changes the text of the button to the value of str   
    document.getElementById("Text").innerHTML = p;                      // Changes the text of the paragraph to the value of p  
}
function My_Second_Function() {                                         // Declares a function  
    var sentence = "I am learning";                                     // Declares a variable sentence and assigns it a string value
    sentence += " a lot from this book!";                               // Declares a second variable for sentence and uses the += operator to concatenate a string to the existing value of sentence
    document.getElementById("Concatenate").innerHTML = sentence;        // Concatenates the string and assigns it to the HTML element with the id "Concatenate"
}

function Addition() {
    var addition = 5 + 5;                                              // Declares a variable addition and assigns it the sum of 5 and 5
    document.getElementById("Addition_1").innerHTML = "5 + 5 = " + addition; // Changes the text of the HTML element with the id "Addition_1" to display the result of the addition
}


