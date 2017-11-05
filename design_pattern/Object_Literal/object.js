'use strict'
// 1. Object Literal way to create Object
var obj = {
    name:'manoj',
    color:'red'
}
obj.age = 3;
obj.speak = function(){
    return "Hello";
}
console.log(obj.name);
console.log(obj.speak());

// 2. Constructor function same like class like static language

function Cal(){
    this.name="manoj"
    this.color="green"
}
function Cal(name,color){
    this.name = name
    this.color = color
}
// Object creation using new keyword as a constructor 
var c =  new Cal();
var ca = new Cal('Manoj','Red');
console.log(c);
console.log(ca);

// 3. Object.create a way to create object

var obj1 = Object.create(Object.prototype,{
    name:{
        value : "manoj",
        writable:true,
        enumerable:true,
        configurable:true
    }
})

console.log(obj1);

// 4. ES6 Classes way to create a object

class abc{
    constructor(name,color){
        this.name = name
        this.color = color
    }
    speak(){
        return "hello world !!"+this.name;
    }
}
var abc1 = new abc("manoj","adsd");
console.log(abc1);
console.log(abc1.speak())
/* When ever try to access the value of any property of a object.
 * 1. check the current object property 
 * 2. if not there goes to their prototype object and try to find property
 * 3. if still not find again goes to parent prototype.
 */