// Majar Exercise for the prototype and Inheritance
//1. Prototypal Inheritance
'use strict'
var arr = ['red','green','blue'];

var last = arr[arr.length-1];
//var last = arr.last;
console.log(arr);
console.log(last);

Object.defineProperty(Array.prototype /*arr*/,'last',{
    get:function(){
        return this[this.length-1];
    }
});

console.log(arr.last);

var arr2 = ['one','two','three'];
console.log(arr2.last);

// Prototype

var myFunc = function(){}
console.log(myFunc.prototype);
var myObj = {name:'abcd'}
console.log(myObj.prototype);
console.log(myObj.__proto__);

// __proto__ check

function cat(name){
    this.name = name;
}
cat.prototype.age = 5;
var puff = new cat("Cat1212");
console.log(cat.prototype);
console.log(puff.__proto__);
console.log(cat.prototype === puff.__proto__);

var muff = new cat("Mat12121");
console.log(muff.__proto__);

//2. Instance vs Prototype Properties
muff.age = 10;
console.log(muff);
console.log(muff.__proto__.age);
console.log(muff.age);

// changing a function's prototype
cat.prototype = {age:20};
// Little trick here 
var snowbell = new cat("snowbell");
console.log(puff.age);//5
console.log(muff.age);//10
console.log(cat.prototype.age);//20
console.log(snowbell.age); // 20

//3. Multiple Level of inheritance
console.log(muff.__proto__);
console.log(muff.__proto__.__proto__);
console.log(muff.__proto__.__proto__.__proto__);

//4. Create Prototypal inheritance chains
// 4.1 prototype ways
console.log("----------------");
function Animal(voice){
    //this.voice = voice;
    //console.log(this.voice);
}
Animal.prototype.speak = function(){
    //this.voice = arg;
    return "Huuuhhh";
}
var cow = function(name,color){
    //Animal.call(this);
    this.name=name
    this.color=color
}

cow.prototype = Object.create(Animal.prototype);
cow.prototype.constructor = cow; 
var abc = new cow("asd","red");
console.log(abc.speak());

console.log(abc);
console.log(abc.__proto__);
console.log(abc.__proto__.__proto__);
console.log(abc.__proto__.__proto__.__proto__);

//4.2 Create prototypes with classes like structure
// es6 class style 
class Ani{
    constructor(voice){
        this.voice = voice;
    }
    speak(){
        return this.voice;
    }
}

class Rat extends Ani{
    constructor(name,col){
        super('chiichiii');
        this.name = name;
        this.col = col;
    }
}
var ra = new Rat("raw","yellow");
console.log(ra.constructor);
console.log(Object.keys(ra.__proto__));




