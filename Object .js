// function Object(){

// person={
//     name:"jomy"
// }
// person.agr=19;
// return person;

// }
// Object()

//  <------------------------------------------------- Using new keyword ------------------------------------------------------------>

// const person= new Object();
// person.name = "jomy";
// person.Age =19;
// person.color = "Black";

// console.log(person);

// // <-----------------------------------------------------Object.keys()-------------------------------------------->

// let person={
//     name:'jomy',
//     age:19,
//     place:'ktr'
//   }
  
//   const keys = Object.keys(person);
//   keys.forEach(key => {
//     console.log(key + ": " + person[key]);
//   });
//


  

//   let person={
//     name:'jomy',
//     age:19,
//     place:'ktr'
//   }
//   "use strict";
//   Object.freeze(person);
//   person.gender='male';
//   console.log(person);
'use srict';
function show() {
    console.log(this);
  }
  
  show();