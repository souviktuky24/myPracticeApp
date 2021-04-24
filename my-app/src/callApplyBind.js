obj = {
    num : 10,
    num1 : 20
}

let add = function(num2,num3,num4){
    return this.num+num2+num3+num4;
}

let arr  = [5,6,7];


console.log(add.call(obj,2,3,4));
console.log(add.apply(obj,arr));

let bound = add.bind(obj);
console.log(bound(9,8,7));

//1.Call method:

//consider above code, obj have the property of num, using call method 
//we can bound obj to add function.

//2.Apply method:

//The same way the Apply method also works but the only difference is using the apply method 
//the passing arguments could be an array, refer below code.

//3.Bind Method:

//bind method returns a method instance instead of result value, after that need to execute 
//a bound method with arguments.