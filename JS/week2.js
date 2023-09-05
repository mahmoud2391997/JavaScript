// Data types intro
// String
// number 
//array=> object
//object
//boolean

// console.log('mahmoud mohamed')
// console.log(typeof 5000.99)
// console.log(typeof 5000)
// console.log(typeof true)
// console.log(typeof false)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof 5000)
// console.log(typeof{name: 'mahmoud mohamed',age:"17",country:"Eg" })
// console.log(typeof[10, 15, 14])
// console.log(typeof['mohamed', 'mahmoud', 'ahmed'])

/*
Variables intro
-What is variables?
-Why to use variables?
-Declare a variable and use
-Syntax( Keyword | variable name | assignment operator | variable value)
-Variable without Var 
-Mulitple variable in the same line
-Id and Global Variable
-Loosely typed vs Strongly Typed
*/

// var user = "mahmoud";
// var age = "26";
// console.log(user);
// console.log(age);
// console.log(hello);
// hello.innerHTML='Option';
/*
Identifiers
-Name convrntion and rules
-Reversed words
 */
/*
var
-Redclare (yes)
-Access before declare (undefined)
-variable scope Drama [Added to window]{}
-block or fuction scope
let
- Redclare(No => error)
-Access before declare (error)
-variable scope Drama [Added to window]{}
-block or fuction scope
Const
- Redclare(No => error)
-Access before declare (error)
-variable scope Drama [Added to window]{}
-block or fuction scope
 */
/*
String syntax + character escape sequences
\Escape + line continue
\n
*/
// console.log("\"\"\\")
// console.log("mahmoud\nmohamed\nelsayed")
// // concatenation
// console.log("mahmoud\nmohamed\nelsayed")
// let a = "mahmoud"
// let b = "mohamed"
// document.write(a+" "+b)
// Template literals (Template strings)
// let a = "we love";
// let b = "JavaScript";
// let c = "and";
// let d = "Programming";
// console.log(a+" "+b+" "+c+" "+d);
// console.log(`${a} "" ${b} ${c} ${d}`);
// let markUp= `
// <div class="card">
//  <div class="child">
//   <h2>Title</h2>
//   <p>Paragraph</p>
//   </div>
//   </div>

// `;
// document.write(markUp);
// let Title='mahmoud';
/*
[1] create 3 variables [Title ,description,date]
--All in one statment
--variables namemust be two words
--description content is"Elzero web school"
--date content is "25/10"
[2]create variable contains div and this div contains
--h3 for title
--p for paragraph
--span for time
[3]add this card to page five times
[4]use template literals fo concatenate
*/
var theTitle = "elzero"
var theDescription = "Elzero web school"
var theDate = "25/10"
var display =`<div class="card"> 
<h3>Hello ${theTitle}</h3>
<p>${theDescription}</p>
<span>${theDate}</span>

</div>
`;
document.write(display)
document.write(display)
document.write(display)
document.write(display)
document.write(display)
