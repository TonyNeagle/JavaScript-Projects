function Call_Loop() {                                                                  //While Loop
    var Digit = "";                                                                     //Variable
    var X = 1;                                                                          //Variable
    while (X < 11) {                                                                    //While Loop
        Digit += "<br>" + X;                                                            //String Concatenation
        X++;                                                                            //Increment
    }
    document.getElementById("Loop").innerHTML = Digit;                                  //Element ID

}

let text = "Hello World!";                                                              //String Length
let length = text.length;                                                               //String Length

document.getElementById("demo").innerHTML = length;                                     //Element ID displays the string length



var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];   //Array
var Content = "";                                                                       //Variable
var Y;
function for_Loop() {                                                                   //loop function
    for (Y = 0; Y < Instruments.length; Y++) {                                          //For Loop
        Content += Instruments[Y] + "<br>";                                             //String Concatenation 
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;                 //displays the array elements
}

function array_Function() {                                                                                 //Array function       
    var Dog_Picture = [];                                                                                   //Variable
    Dog_Picture[0] = "sleeping";                                                                            //Array elements    
    Dog_Picture[1] = "playing";                                                                             //Array elements
    Dog_Picture[2] = "eating";                                                                              //Array elements     
    Dog_Picture[3] = "purring";                                                                             //Array elements 
    document.getElementById("Array").innerHTML = "In this picture, the dog is " + Dog_Picture[0] + ".";     //displays the selected array element
}

function constant_function() {                                                                                  //Constant function     
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black", model: "Stratocaster" };      //Constant Object
    Musical_Instrument.color = "blue";                                                                          //Changes the color property of the object 
    Musical_Instrument.price = "$900";                                                                          //Adds a price property to the object
   

    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.brand + " " + Musical_Instrument.model + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;    //displays the selected object properties    
}

function let_function() {                                                           //Let Function  
var Z = 82;                                                                         //Variable  
document.writeln(Z);                                                                //Displays the global variable
{
    let Z = 33;                                                                     //Block scope variable
    document.writeln("<br>" + Z);                                                   //Displays the local variable
}
document.writeln("<br>" + Z);                                                       //Displays the global variable again
}

function return_function() {                                                        //Return Function 
    return Math.PI;                                                                 //Returns the value of Pi

    }
    document.getElementById("Return").innerHTML = return_function();                //Displays the value of Pi



    let car = {                                                                         //Object
        make: "Dodge ",                                                                 //Object Property
        model: "Viper ",                                                                //Object Property
        year: "2021 ",                                                                  //Object Property 
        color: "red ",                                                                  //Object Property
        description : function() {                                                      //Object Method    
            return "The car is a " + this.year + this.color + this.make + this.model;   //Uses the 'this' keyword to return a description of the car
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();                //Displays the description of the car object



    let text1 = "";                                                                 //Variable
    let i = 0;                                                                      //Variable 
    for (i = 0; i < 10; i++) {                                                      //For Loop
        if (i === 3) {break; }                                                      //Break Statement      
        text1 += "The number is " + i + "<br>";                                     //String Concatenation
    }
    document.getElementById("Break").innerHTML = text1;                             //Displays the numbers until the break statement is reached

    let text2 = "";                                                                 //Variable   
    let j = 0;                                                                      //Variable
    for (j = 0; j < 10; j++) {                                                      //For Loop
        if (j === 3) {continue; }                                                   //Continue Statement
        text2 += "The number is " + j + "<br>";                                     //String Concatenation
    }
    document.getElementById("Continue").innerHTML = text2;                          //Displays the numbers, skipping the number 3 and continuing with the rest


    

