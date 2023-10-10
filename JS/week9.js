/*
function
-anonymous function
-calling named function vs anonymous function
-argument to other function 
-task without name
-set timeout 
*/

console.log(calc(10,20));

function calc(num1, num2) {
    return num1 + num2
}
let calculator = function (num1, num2) {
    return num1 + num2
}
console.log(calculator(10,20));
document.getElementById("show").onclick = function () {
    console.log("Show");
}
setTimeout(
    function () {
        console.log("good");
    }, 2000
)
function sayHello() {
    console.log("hello");
}
document.getElementById("show").onclick = sayHello;
/*
function
-function inside function
-return function
*/
// function sayMessage(fName ,lName) {
//     let message = "hello";
//     function concatMsg() {
//         message = `${message} ${fName} ${lName}`
//     }
//     concatMsg();
//     return message;
// }
// console.log(sayMessage("mahmoud", "mohamed"));
// function sayMessage(fName ,lName) {
//     let message = "hello";
//     function concatMsg() {
//         return `${message} ${fName} ${lName}`
//     }
//     return concatMsg();
// }
// console.log(sayMessage("mahmoud", "mohamed"));
function sayMessage(fName ,lName) {
    let message = "hello";
    function concatMsg() {
        function getFullName() {
            return `${fName} ${lName}`;
        }
        return `${message} ${getFullName()}`
    }
    return concatMsg();
}
console.log(sayMessage("mahmoud", "mohamed"));
/*
function
-Arrow function
-Regular vs Arrow [param + no param]
-multiple lines
*/
// let print = function () {
    //     return 10;
    
    // }
    // let print =  _ => 10;
    // let print = function (num) {
    //     return num;
        
    // }
    // let print =  num => num;
    
    // let print = function (num1, num2) {
    //     return num1 + num2;
        
    // }
    let print =  (num1, num2) => num1 + num2;
    console.log(print(100,50));
    /*
    scope
    -global and local scope
    */
var a = 1;   
let b = 2;
function showText() {
    var a = 1;   
    let b = 2;
    console.log(`func - from global ${a}`);
    console.log(`func - from global ${b}`);
   
}
console.log(`from global ${a}`);
console.log(`from global ${b}`);
showText();
/*
scope
-block scope [if, switch ,for]
*/
var x  = 10;
if (true) {
    let x = 50;
    console.log(x);
}
console.log(x);
/*
scope
-lexical scope
search
-execution context
-lexical environment
*/

function parent() {
    let A = 30;
    
    function child() {
        
        let B = 30;
        console.log(A);
        console.log(`from child ${B}`);
        function grand () {
            let B = 100;
            console.log(`from grand ${A}`);
            console.log(`from grand ${B}`);

        }
        grand(); 
    }
    child();
}
parent();
/*
1- one statment in function
2- convert to arrow function 
3- print the output [arguments may change]
*/
let names = (...namess) => `String [${namess.join("], [")}] => Done`;
console.log(names("mahmoud","mahmoud","mahmoud","mahmoud"));
let myNumbers = [20, 50, 10 ,60];
let calcu = (one, two, ...nums) => one + two + nums[-(false)];
console.log(calcu(20, 50, 10 ,60));