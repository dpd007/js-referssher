//1. var vs let vs const
//Scope
// ------------------
// var a = 5; //global scope
// {
//     let a = 5; //block scope
// }
// console.log(a); //can be accessed anywhere

// Varible shadowing
// ------------------
// function test(){
//     let a = 'hello';
//     if(true){
//         let a = 'hello1';
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

//declaration without initialisation
// ------------------
// let a; //works
// var b; //works
// const c; //Uncaught Syntax Error

// Hoisting
// ------------------

// console.log(a); //undefined
// var a=3;

// console.log(a); //undefined
// let a=3;
// var a2=4;
// example of Temporal Dead Zone
// function abc(){
//     console.log(a,b,c);
//     const c=30;
//     let b=20;
//     var a=10;
// }
// abc();

// 2. map, filter, reduce
const nums = [1, 2, 3, 4];
// const multiplyThree = nums.map((num, idx, arr) => {
//     return num*3;
// });
// console.log(multiplyThree);

// const moreThanTwo = nums.filter((num)=>{
//     return num > 2;
// });
// console.log(moreThanTwo);

// const sum = nums.reduce((acc, curr)=>{
//     return acc + curr;
// }, 0)
// console.log(sum);

// HOW TO PRODUCE THESE FUNCTIONS FROM SCARTCH?
// 2.1 Polyfill for map()
// Array.map((num, idx, arr)=> { })
// Array.prototype.myMap = function (cb) {
//     let temp=[];
//     for(let i=0; i<this.length; i++){
//         temp.push(cb(this[i], i, this))
//     }
//     return temp;
// }
// const multiplyThree = nums.myMap((num, idx)=>{
//     return num*3;
// })
// console.log(multiplyThree);

// 2.2 Polyfill for filter()
// Array.prototype.myFilter = function (cb){
//     let temp = [];
//     for(let i=0; i<this.length;i++){
//         if(cb(this[i], i, this)){
//             temp.push(this[i])
//         }
//     }
//     return temp;
// }
// const moreThanTwo = nums.myFilter((num)=>{
//     return num > 2;
// })
// console.log(moreThanTwo);

// 2.3 Polyfil for reduce()
// Array.reduce((acc, curr, idx, arr)=>{}, initialValue);
// Array.prototype.myReduce = function (cb, initialValue){
//     var accuumulator = initialValue;
//     for (let i=0; i<this.length;i++){
//         accuumulator = accuumulator ? cb(accuumulator, this[i], i, this) : this[i];
//     }
//     return accuumulator;
// }
// const sum = nums.myReduce((acc, curr)=>{
//     return acc + curr;
// }, 0);
// console.log(sum);

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

// const details = students.filter((stu)=> stu.marks > 60 && stu.rollNumber > 15);
// const sumMarks = students.reduce((acc, curr)=> acc + curr.marks, 0);
// console.log(sumMarks);

// console.log(details);
// const details2 = students.filter((stu)=> stu.marks > 60).map((stu)=> stu.name);
// console.log(details2);

// Question 6 - Return total marks for students with marks greater than 60
// after 20 marks have been added to those who scored less than 60

const sumMarks = students.map(stu => {
  if(stu.marks < 60){
    stu.marks += 20;
  }
  return stu;
}).filter(stu=>stu.marks > 60).reduce((acc, curr)=> acc+curr.marks, 0);
console.log(sumMarks);
