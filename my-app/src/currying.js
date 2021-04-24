//Currying is a technique of evaluating the function with multiple arguments, 
//into a sequence of function with a single argument.

//In other words, when a function, instead of taking all arguments at one time,
// takes the first one and return a new function that takes the second one and returns
//a new function which takes the third one, and so forth until all arguments have been fulfilled.


//Why Useful Currying?

//Mainly It helps to create a higher-order function. It is extremely helpful in event handling.

//How to convert an existing function to a curried version?

//The curry function does not exist in native JavaScript. But a library like lodash 
//makes it easier to convert a function to a curried one.

let add = function(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

console.log(add(10)(5)(1));