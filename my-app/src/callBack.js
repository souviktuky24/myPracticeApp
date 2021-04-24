function greeting(name){
    console.log("Hello "+ name);
}

function callBackExample(abc){
    let name = "Souvik";
    abc(name);
}

callBackExample(greeting);

//A reference to executable code, or a piece of executable code, 
//that is passed as an argument to other code.

//From the above definition, the callback function is a function passed into 
//another function as an argument, which is then invoked inside the outer function 
//to complete some kind of routine or action.