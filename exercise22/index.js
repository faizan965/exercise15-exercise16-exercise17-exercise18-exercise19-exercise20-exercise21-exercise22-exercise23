"use strict";
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const colors = ["Red", "Green", "Blue"];
// Accessing an element at an invalid index
const invalidIndex = colors[3]; // This will result in an index error
// Correcting the error by checking the length of the array
if (colors.length > 3) {
    console.log("Invalid index error is avoided.");
}
else {
    console.log("All is well.");
}
