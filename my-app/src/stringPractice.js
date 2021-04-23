let exampleString = "This is JavaScript Tutorial"

let firstName = "JavaScript";
let lastname = "Playground";

//console.clear();

console.log(exampleString.toLocaleUpperCase());
console.log(exampleString.toLocaleLowerCase());

console.log(firstName.concat(lastname));
console.log(firstName.concat(lastname,exampleString))
console.log(firstName.concat(" ",lastname," ",exampleString))

let extraSpaceString = "   myString   ";
let extraSpaceString1 = "   my  String   "

console.log(extraSpaceString1.trim());

console.log(firstName.charAt(2));

console.log(exampleString.split(" "))

console.log(exampleString.length);

console.log(exampleString.indexOf("Javascript"))
console.log(exampleString.indexOf("JavaScript"))

console.log(exampleString.slice(0,4));
console.log(exampleString.slice(-10));
console.log(exampleString.slice(5));

console.log(exampleString.substr(0,4));
console.log(exampleString.substr(0));