// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100 * 1000); // 100000
console.log("100"+"000"); // 100000
console.log(1_00_000); // 100000
console.log(1_0_0000); // 100000
console.log(1_0_0_0_0_0); // 100000
console.log(1_0_0_0_00); // 100000
console.log(1_00_00_0); // 100000
console.log(1_00_0_00); // 100000
console.log(1_0_00_00); // 100000
console.log(10_00_00); // 100000
console.log(Math.abs(Number.MIN_SAFE_INTEGER.valueOf())); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER.toString().length);
let myVar = "100.56789 Views";

console.log(parseInt(myVar.slice(0,3))); // 100
console.log(parseFloat(parseFloat((myVar.slice(0,7))).toFixed(2))); // 100.57
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
let flt = 10.4;

console.log(flt.toFixed(0)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(flt.toString().slice(0,2)); // 10
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.slice(-6,-5).toLowerCase().repeat(3)); // eee
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True