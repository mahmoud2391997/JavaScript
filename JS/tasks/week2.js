// Add Variables Here
var numOne= 10;
var numTwo = 20;

// Ouput
console.log("" +numOne + numTwo); // Normal Concatenate => 1020
console.log(typeof("" +numOne + numTwo)); // Normal Concatenate => String
console.log(`${numOne}${numTwo}`); // Template Literals Way => 1020
console.log(typeof(`${numOne}${numTwo}`)); // Template Literals Way => String

console.log(numTwo +"\n"+numOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numTwo}
${numOne}`);
/*
  Template Literals Way
  20
  10
*/
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
console.log("\`I'm In\n\\\\\nLove\\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`\`")
let a = 21;
let b = 20;
let c = 2021;
console.log(`_${`${a}_${b}`.repeat(4)}_`); // _21_2021_2021_2021_20_