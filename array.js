// let number=[23,18,2,10]
//  number.forEach(num=>{console.log(num/2);
//  })


// forEach
//  let fruits = ["apple", "banana", "cherry"];

// fruits.forEach((fruit, index, array) => {
//     console.log(`Index ${index}: ${fruit}, Total elements: ${array.length}`);
// });


// let frnds=[pookie,uncle,kotttayamjerin,sajoottan];
// frnds.forEach((frnds,index,array)=>{console.log()
// })

// let numbers=[1,2,3,4,5];
// numbers.some(num=>{
//     if(num%2===0)
// console.log(num);

// })
// let num= [ "mango","Apt","gang","ngauuuu"]
//  let copy=num.includes("Apt")
//  let copy=num.findIndex(st=>st.length==8); 
//    console.log(copy);
        
// let user = { name: "John", age: 30, city: "New York" };

// for (let x in user) {
//     console.log();
// }

// let team=[{name:`Redbull`,num:33},
//     {name:`Ferrari`,num:16},
//     {name:`Williams`,num:44},
//     {name:`Mercedece`,num:44}
// ];

// team.sort((a,b)=> a.name.localeCompare(b.name))
// console.log(team);

// every()

// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(num=>num>0);
// console.log(allOver18);


// some()

// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.some(num=>num>0);
// console.log(allOver18);

// const arr = Array.from({ length: 5 }, (_, i) => i*i);
// console.log(arr);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// for (let x of keys) {
//   text += x + "<br>";
// }
// console.log();

// const arr = new Array(3); 
// const keys = arr.keys();

// for (let key of keys) {
//   console.log(key);
// }
// with()...replacing last number
// let num=[12,23,34,45,56]
// let Newnum1=num.with(3,44)
// let Newnum =num.with(num.length-1,55);
// console.log(Newnum1,Newnum);
// (function() {
//     console.log("I run immediately!");
// })();

// callback()function
// function greet(name,callback){
//     console.log("hello"+name);
//     callback()
// }
// function saygoodbye(){
//     console.log("Goodbye");
    
// }
//  greet('Alice',saygoodbye);

// callback function in asynchronus 

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = "Some data from the server";
//         callback(data);
//     }, 2000); // Simulate a 2-second delay
// }
// // 
// function processData(data) {
//     console.log("Processing:", data);
// }

// fetchData(processData);


// Array.keys()
// let arr=["a","b","c","d"]
// const iterator=Array.from(arr.keys());

// console.log(iterator);

// let months=["jan","Feb","mar"]
    
// let mymonths= months.with(months.length-1,"sep")
// console.log(mymonths);


// person={
//     name:"jomy",
//     age:19
// }
// console.log(person.name);

// String ..

// function emptyValue(str){
//  return str.length === 0;
// }
// console.log(emptyValue("helo"));

// function isEmpty(str) {
//     return str.length === 0;
//   }
  
//   console.log(isEmpty("")); // true
//   console.log(isEmpty("Hello")); // 

// var returnToBoundaryCount = function(nums) {
    
//     let count=0;
//     let str=0
//     for(let i=0;i<nums.length;i++){
//         str+=nums[i];
//         if(str==0){
//             count++;
//         }
//     }
//     return count;
//   };
//   console.log(returnToBoundaryCount([2,3,-5]));
  

// var returnToBoundaryCount = function(nums) {
    
//     let count=0;
//      let str=0;
//      for(i=0;i<nums.length;i++){
//          str+=nums[i];
//          if(str==0){
//              count++;
//          }
//          return count;
//      }
//     }
//      console.log(returnToBoundaryCount([-2,4,5]));

var tolowerCase = function(s) {
    let lowc=s.toLowerCase()
    return lowc;
};
console.log(tolowerCase("JOMY"));    