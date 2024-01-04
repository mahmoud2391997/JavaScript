// let setOfNUmbers = new Set([10]);
// setOfNUmbers.add(20).add(setOfNUmbers.size);
// console.log(setOfNUmbers.forEach( (e) => e === 2 ? console.log(e) : null));
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log(new Set(myFriends.copyWithin(0,1,2).copyWithin(1,4)));
// // Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
//   };

//   let myMap = new Map(Object.entries(myInfo));
//   console.log(myMap);
//   console.log(myMap.size);
//   console.log(myMap.has("role"));
// let theNumber = 100020003000;
// console.log(+[...new Set([...`${theNumber}`].sort())].join(""));
// console.log(+[...new Set([...`${theNumber}`].sort())].join(""));
// // Needed Output
// 123

// let theName = "Elzero";

// console.log([...theName]);
// console.log(theName.split(""));
// console.log([...new Set(theName)]);
// console.log(Array.from(theName));
// console.log(Object.assign([], theName));
// // Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// func = function (arr) {
//    numCount = arr.filter(Number).length;
//    const charsOnly = arr.filter((char) => typeof char === "string");
//    const replaced = [
//     ...charsOnly.slice(0, numCount),
//     ...charsOnly.slice(0, arr.length)
//     ];
//     return replaced
// }
// console.log(func(chars));
// // Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne,...numsTwo])
console.log(numsOne.concat(numsTwo))
console.log(numsOne.push(...numsTwo))
// Needed Output
[1, 2, 3, 4, 5, 6]