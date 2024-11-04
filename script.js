//var vs let vs const
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