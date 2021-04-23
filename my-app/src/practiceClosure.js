// function showName(firstName,lastName){
//   let yourName = "Your name is "
//   function makeName(){
//       return yourName+firstName+ lastName;
//   } 
//   return makeName();
// }


// console.log(showName("Souvik"," Bhowmik"))

//-----------------------------------------------------------

// function celebrityName (firstName) {
//     var nameIntro = "This celebrity is ";
//        function lastName (theLastName) {
//         return nameIntro + firstName + " " + theLastName;
//     }
//     return lastName;
// }

// let mjName = celebrityName ("Michael");
// console.log(mjName("Jackson"));

//-------------------------------------------------------------

// function celebrityID(){
//     let celebrityID = 99;
//     return {
//         getID:function(){
//             return celebrityID;
//         },
//         setID:function(theNewID){
//             celebrityID=theNewID;
//         }
//     }
// }

// let mjID = celebrityID();
// mjID.setID(67);
// console.log(mjID.getID());

//-------------------------------------------------------------------------------

// let theCelebrity = [{name:"Souvik",id:00},{name:"Ajay",id:1},{name:"Gaurav",id:4}];
// function celebrityIDCreator(theCelebrity){
//     let i,uniqueID = 100;
//     for(i=0;i<theCelebrity.length;i++){
//         theCelebrity[i]["id"]= function (j){

//             return function(){
//                 return uniqueID+j;
//             }();
//         }(i);
//     }
//     return theCelebrity;
// }

//-----------------------------------------------------------------------------------------------

// let theCelebrity = [{name:"Souvik",id:00},{name:"Ajay",id:1},{name:"Gaurav",id:4}];
// function celebrityIDCreator(theCelebrity){
//     let i,uniqueID = 100;
//     for(i=0;i<theCelebrity.length;i++){
//         theCelebrity[i].id = uniqueID+i;
//       }
//     return theCelebrity;
// }

// let creteIDForActionCeleb = celebrityIDCreator(theCelebrity);
// console.log(creteIDForActionCeleb[1]);

//------------------------------------------------------------------------------------

