// Describe the String Class with Examples
var str="Hello World";
str += " length: "+str.length;

var s = new String();
s = "1000";
Object.defineProperty(String.prototype,'sal',{
    get:function(){
        return "Manoj";
    }
});

str += " new String Object :"+s+" access custom property"+s.sal;

str += " \n CharAt: "+str.charAt(0) +" CharcodeAt: "+str.charCodeAt(1);

var str1 = "Mann";
var str2 = " Chaurasiya";
str += " \n Concat : "+str1.concat(str2) +" \n endWith: "+str1.endsWith('n');

str += "\n Include : "+str.includes('Mann');

str += "\n IndexOf : "+str.indexOf('o');

str += "\n LastIndexOf : "+str.lastIndexOf('Hello');

//str += "\n Repeat : "+str.repeat(1);

//str += "\n Replace : "+str.replace('World',"My World ");

str += "\n Search : "+str.search('World');

str += "\n Slice : "+str.slice(0,6);

var arr1=str.split("o");
str += "\n Split : "+arr1[0];

str += "\n startsWith() : "+str.startsWith("H");

str += "\n substr() + lowercase: "+str.substr(0,16).toLowerCase();

str += "\n substring() + uppercase: "+str.substring(0,16).toUpperCase();

//str += "\n trim" + str.trim();

//str += "\n valueOf" + str.valueOf();

document.getElementById('str').innerText= str ;

/**
 * ES 6 String Functions
 */
// Repeat 
"Manoj".repeat(4);
" a ".repeat(4 * 5);
