//pure function vs impure function

//---------------------------------------------------------------------------

// This is impure function

// function changedAge(person){
//     person.age = 28;
//     return person;
// }

// const Alex = {
//     name : "Souvik",
//     age : 25
// }

// const alexDetails = changedAge(Alex);

// console.log(alexDetails);
// console.log(Alex);

//--------------------------------------------------------------------------------------

// This is a pure function

// const alex = {
//     name : "Alex",
//     age : 25
// }

// function changedAge(person){
//     const newObj = JSON.parse(JSON.stringify(person));
//     newObj.age = 28;
//     return newObj;
// }

// const alexDetails = changedAge(alex);
// console.log(alexDetails);
// console.log(alex);

let mAgera = {
    name : "Agetra",
    manufacturer : {
        name : "xyz",
        location : "Sweden"
    },
    topSpeed : 429,
    color : "Black",
    spolier : false,
    applyBrakes : function(){
        setTimeout(function(){
            console.log("car stopped");
        },2000)
    }

}

console.log(mAgera.name);
console.log(mAgera.manufacturer.name);
console.log(mAgera.applyBrakes());



