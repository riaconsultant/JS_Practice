/**
 * String Functions
 */

 var str = "Hello ";
 // String Repeat
 console.log(str.repeat(5));
 console.log(str.repeat(2*3));
 // String Search

 console.log(str.startsWith("H"));

 console.log(str.endsWith("o "));

 console.log(str.includes("H"));

 console.log(str.includes("e",1));
// Template String
console.log(`${str} World !!`);