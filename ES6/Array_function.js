/**
 * ES6 : Array Function
 */
var arr = [1,2,3,4,5,6,7,8];
// Searching function
var f = arr.find(x => x > 3) // 4
var ind = arr.findIndex(x => x > 3) // 2
console.log(f);
console.log(ind);

// Arrow Functions
var plus = arr.map(v => v+1);
console.log(plus);
// Statement bodies 
var plus1 = arr.map((v) =>{
    return v+2;
});
console.log(plus1);
// Array Matching

var list = [1,2,3];
var [a,b,c] = list;

console.log(a,b,c);
