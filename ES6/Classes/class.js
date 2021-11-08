class Human{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.sayHello(); 
    }
    sayHello(){
        return "Hello "+this.fname +" "+this.lname+ " !!!";
    }

}