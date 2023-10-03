let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
console.log(myFriends.length)
// Method 1
console.log(myFriends.slice(myFriends.length - ++num,--num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(myFriends.length - ++num,--num)); // ["Ahmed", "Elham", "Osama"];
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.splice(1,2)); // ["Eman", "Osama"]
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse()
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length,words[website.length][0].length).toUpperCase()); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
console.log(haystack.slice(1,2))
// Write 3 Solutions
if(haystack.includes(needle) === true && haystack[1] === needle && haystack.slice(1,2)[0] === needle  ){
    console.log("found")
}
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
// Your Code Here
allArrs =arr2.pop().concat(arr2.pop().concat(arr1.pop())).toLowerCase().split("").sort().join("")
console.log(allArrs); // fxy