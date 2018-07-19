function hello(name){

    function speak (lastName){
        console.log(name,lastName);
    }

    function firstName(){
        return name;
    }

    return{
        say:speak,
        firstName:firstName
    };
}

var o = hello('Manoj')