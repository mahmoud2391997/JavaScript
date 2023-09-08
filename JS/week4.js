/*
number
-Double Precision
-Syntactic suger"_"
-e
-**
-with decimal
-number + BigInt
-number Min value
-number max value
*/
// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(1000000.0);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
/*
two dots to call a methods
toString()
toFixed()
paresInt()
paresFloat()
isInteger() [ES6]
isNaN() [ES6]

*/
// console.log((100).toString())
// console.log(100.1.toString())
// console.log(100.555555555.toFixed(5))
// console.log(parseInt("100"))
// console.log(parseInt("100.555s"))
// console.log(parseFloat("100.5000"))
// console.log(Number.isInteger("100"))
// console.log(Number.isInteger(100.500))
// console.log(Number.isInteger(100))
// console.log(Number.isNaN("osama" / 20))

/*
round()
ceil()
floor()
min()
max()
pow()
random()
trunc() [ES6]
*/

// console.log(Math.round(99.3))
// console.log(Math.round(99.5))
// console.log(Math.ceil(99.1))
// console.log(Math.floor(99.9))
// console.log(Math.min(10, 20, 30, 40))
// console.log(Math.max(10, 20, 30, 40))
// console.log(Math.pow(2, 4))
// console.log(Math.random())
// console.log(Math.trunc(99.5))

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;
// // find smallest number in all variables
// // use variable a + d one time to get the needed output
// // get integer "2" from d variable with 4 methods
// // use variables b +d to get this values
// console.log((Math.floor(b)/Math.ceil(d)).toFixed(2));
// console.log(Math.ceil(b)/Math.ceil(d));
// //66.67
// //66 =>number
// console.log(Math.min(a, b, c, d));
// console.log((a**Math.trunc(d)));
// console.log((Math.trunc(d)));
// console.log((Math.floor(d)));
// console.log((Math.round(d)));
// console.log(d.toFixed(0));
/*
String methods 
access with index
access with charAt()
length
trim()
toUpperCase()
toLowerCase()
Chain methods
*/
// let theName = "  ahmed  ";
// let theList= [1, 2, 3, 4, 5]
// console.log(theName[1])
// console.log(theName[5])
// console.log(theName.charAt(1))
// console.log(theName.charAt(5))
// console.log(theName.length)
// console.log(theName.trim())
// console.log(theName.toUpperCase())
// console.log(theName.toLowerCase())
/*
string methods
-indexOf(value[mand],start[opt]0)
-lastIndexOf(Value[Mand], Start[Opt]lenght)
-slice(Start [Mand],End [Opt]Not Include End)
-repeat(times) [ES6]
-split(separator[opt],limit[opt])
*/
// let a ="elzero web school"

// console.log(a.indexOf("web"))
// console.log(a.indexOf("web",8))
// console.log(a.indexOf("o"))
// console.log(a.lastIndexOf("o"))
// console.log(a.slice(7,8))
// console.log(a.slice(-5))
// console.log(a.repeat(2))
// console.log(a.split(" ",3))
/*
string methods
 */
// let a ="elzero web school"
// console.log(a.substring(2,6))
// console.log(a.substring(6,2))
// console.log(a.substring(-10,6))
// console.log(a.substring(a.length - 1))
// console.log(a.substring(a.length - 5,a.length - 3))
// console.log(a.length)
// console.log(a.includes("web"))
// console.log(a.includes("web",8))
// console.log(a.startsWith("w",7))
// console.log(a.endsWith("l"))
// console.log(a.endsWith("o",6))
let a ="elzero web school"
console.log(a.charAt(2).toUpperCase() + a.slice(3,7))
console.log(a.charAt(13).toUpperCase().repeat(8))
console.log(a.split(" ",1))
console.log(a.charAt(0)+a.slice(1,a.length-1).toUpperCase()+a.charAt(a.length-1))





