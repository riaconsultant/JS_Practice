
// Apply take arguments in Array Format.
// Call takes arguments as a comma seperated Argument
// Bind takes argument as a comma seperated but return the function to use later.
// hold the this reference.holds arguments in future use.
var Animal = function(name,type){
    this.name=name;
    this.type=type;
}

function getMaxAge(age,game,cast,rate){
    console.log("Name "+this.name+" Type "+this.type+" My Max Age is "+age);
    console.log(arguments);
}
var obj=Object.create(Animal.prototype,{name:{value:"asd"},type:{value:"ete"}});
console.log(obj);
console.log(Animal.prototype);
var ani = new Animal('manoj','man');
console.log(ani);
getMaxAge.call(ani,34);

getMaxAge.apply(ani,[39,"safasf"]);

getMaxAge.bind(ani,50,53)(); // return function -() means self excution

getMaxAge.call(obj,99);
