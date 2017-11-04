'use strict'
// 1. Object Properties
var cab = {
    name:"ola",
    type:"sedan"
} 
cab['driver name'] = "Manoj Chaurasiya"
console.log(cab.name);
console.log(cab['type']); // Bracket notation
console.log(cab['driver name']); // dot notation is fail

// Object way to get the property.
console.log(Object.getOwnPropertyDescriptor(cab,'name'));
console.log(Object.getOwnPropertyDescriptor(cab,'driver name'));
//1. writable property example
// change the Object Property
Object.defineProperty(cab,'type',{writable:false});
//cab.type = "Micro"; // this will if 'use strict' in the top of file.

cab.desc = {loc:"marathalli",distance:"5km"};
Object.defineProperty(cab,'desc',{writable:false});
Object.freeze(cab.desc); 
//  can not change the object property using freeze.
//cab.desc.loc = "sarjapur";
console.log(cab.desc);

//2. Enumerable Property
Object.defineProperty(cab,'desc',{enumerable:false});
for(var prop in cab){
    console.log(prop +" == "+cab[prop] +" - "+ typeof cab[prop]);
}

console.log(Object.keys(cab));
console.log(JSON.stringify(cab));
console.log(cab.desc);

//3. Configurable Property
// can not change the enumerable or configurable property
// writable property can be change 
// Can not delete the property
Object.defineProperty(cab,'desc',{configurable:false});
//Object.defineProperty(cab,'desc',{enumerable:false});
//delete cab.desc.loc;
console.log(cab);

//4. Getters & Setters
cab.detail = {fname:"manoj",lname:"chaurasiya"};

Object.defineProperty(cab,'fullName',{
    get:function(){
        return this.detail.fname+' '+ this.detail.lname;
    },
    set:function(value){
        var parts = value.split(' ')
        this.detail.fname = parts[0]
        this.detail.lname = parts[1]
    }
})
console.log(cab.fullName);
cab.fullName = "Mann Chaurasiya Janvi";
console.log(cab.fullName);

