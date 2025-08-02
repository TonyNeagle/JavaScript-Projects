
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;                        // This will return NaN (Not a Number) because dividing zero by zero is undefined.
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN("This is a string"); // This will return true because the string is not a number, hence it is NaN.
}
function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN("007");              // This will return false because "007" is a number 7, so it is not NaN.
}
function my_Function4() {
document.getElementById("Test4").innerHTML = (2E310);                        // This will return Infinity because 2e310 is a number larger than the maximum value JavaScript can represent, which results in Infinity.
}
function my_Function5() {
    document.getElementById("Test5").innerHTML = (-3E310);                       // This will return -Infinity because -3e310 is a number smaller than the minimum value JavaScript can represent, which results in -Infinity.
}
function my_Function6() {
    document.getElementById("Test6").innerHTML = (10>2);                     // This will return true because 10 is greater than 2.
}
function my_Function7() {
    document.getElementById("Test7").innerHTML = (10<2);                     // This will return false because 10 is not less than 2.
}

console.log(2+2);                                                      // This will log 4 to the console because 2 plus 2 equals 4.

console.log(2>3);

console.log(22==22);                                                    // This will log true to the console because 22 is equal to 22.

console.log(22==23);                                                  // This will log true to the console because 22 is strictly equal to 22 (same type and value).               

A = 19; // This is a date in the format DD,MM,YYYY.
A1 = 19; // This is a date in the format DD,MM,YYYY.
console.log(A===A1);                                            

B = "19"; // This is a string representation of a number.
B1 = 21;                                                        
console.log(B===B1); // This will log false to the console because B is a string and B1 is a number, so they are not strictly equal (different types).

C = "19"; // This is a string representation of a number.
C1 = 19; // This is a number.
console.log(C===C1); // This will log false to the console because C is a string and C1 is a number, so they are not strictly equal (different types).

D = 19; // This is a number.
D1 = "Nineteen"; // This is a string representation of the number 19.
console.log(D===D1); // This will log false to the console because D is a number and D1 is a string, so they are not strictly equal (different types).

function my_Function8() {
    document.getElementById("Test8").innerHTML = (120>44 && 44>12); // This will return true because both conditions are true: 120 is greater than 44 and 44 is greater than 12.
}
function my_Function9() {
    document.getElementById("Test9").innerHTML = (120>44 || 44<12); // This will return true because at least one condition is true: 120 is greater than 44.
}
function my_Function10() {
    document.getElementById("Test10").innerHTML = !(120>44); // This will return false because the condition 120>44 is true, and the NOT operator negates it.
}
function my_Function11() {
    document.getElementById("Test11").innerHTML = !(120<44); // This will return true because the condition 120<44 is false, and the NOT operator negates it.
}