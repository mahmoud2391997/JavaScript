let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
newMix = mix.map(function (ele) {
   return isNaN(parseInt(ele)) ? ele : "" }).reduce(function (acc,current) {
    return acc + current;
   });
   console.log(newMix);
// Elzero
let myString = "EElllzzzzzzzeroo";
newString = myString.split("").filter(function (ele, index) {
    
    return myString.indexOf(ele) === index;
}).reduce(function (acc,current) {
    return acc + current;
   });
   console.log(newString);
   
   // Elzero
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray.reduce(function (acc, account) {
    return acc + account;
}).split("").filter(function (ele) {
    return ele !== ",";
}).reduce(function (acc, account) {
    return acc + account;})
    // Elzero
    console.log(newArray);
    let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
    let negativeNums = numsAndStrings.filter(function (ele) {
        return isNaN(parseInt(ele)) ? "" : ele;
    }).map(function (ele) {
        return -ele;
    })
    console.log(negativeNums);
// [-1, -10, 10, 20, -5, -3]
let nums = [2, 12, 11, 5, 10, 1, 99];
let numss = nums.reduce(function (acc,cur) {
    if (cur % 2 === 0) {
       return acc * cur;
    } else {
       return acc + cur;
    }
},1)
console.log(numss);
// 500