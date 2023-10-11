/*
higher order functions
-is a function that accepts function as a parameter and/or return a function
Map
-method
*/
let myNums = [1,2,3,4,5,6];
let newArray = [];
for (let index = 0; index < myNums.length; index++) {
    newArray.push(myNums[index] + myNums[index]);
}
// let addSelf = myNums.map(function (element, index, arr) {
//     return element + element;
// }

// )
let addSelf = myNums.map( (element) => element + element);


console.log(addSelf);
function addition(element) {
    return element + element;
}
let add = myNums.map(addition);
console.log(add);
/*
map
-swap cases
-inverted numbers
-ignore boolean value
*/
let swappingCases = "elZERo";
let invertedNumbers = [1,-10,-20,15,100,-30];
let ignoreNumber = "Elz123er4o";
let sw = swappingCases.split("").map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join("");
console.log(sw);
let inv = invertedNumbers.map(function (ele){
    return -ele;
})
console.log(inv);
let ign = ignoreNumber.split("").map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
    }).join("");
    console.log(ign);

    /*
filter
-method creates a new array
-with all elements that pass the test 
    */
   let numbers = [11,20,2,5,17,10];
// let addMap = numbers.map(function (el) {
//     return el + el
// })
// console.log(addMap);
// let addFilter = numbers.filter(function (el) {
//     return el + el
// })
// console.log(addFilter);
let friends = ["ahmed","mohamed","ali"]
let filteredFriends = friends.filter(function (el) {
    return el.startsWith("a") ? true : false;
})
console.log(filteredFriends);
let evenNumbers = numbers.filter(function (el) {
    return el % 2 === 0;
})
console.log(evenNumbers);
let sentence = "I Love Foood Code Too Playing Much";
let smallWords = sentence.split(" ").filter(function (ele) {
    return ele.length <= 4;
}).join("");
console.log(smallWords);
let mix = "A13BS2ZX";
let onlyNums = mix.split("").filter(function (ele) {
    return !isNaN(parseInt(ele));
}).map(function (ele) {
    return ele * ele;
}).join("");
console.log(onlyNums);
/*
reduce
-method executes a reducer function on each element of the array
-resulting in a single output value
syntax
-reduce
*/
let nums = [10,20,15,30];
let adding = nums.reduce(function (acc, current, index, arr) {
    console.log(`acc => ${acc}`);
    console.log(`current => ${current}`);
    console.log(`index => ${index}`);
    console.log(`array => ${arr}`);
    return acc + current;
},5)
console.log(adding);
let theBiggest = ["Bla", "Propaganda","Other", "AAA","Battery","Test"]
let check = theBiggest.reduce(function (acc, current) {
    console.log(`acc => ${acc}`);
    console.log(`current => ${current}`);
    
    return acc.length > current.length ? acc : current;
    })
    console.log(check);
    let removeChars = ["E", "@", "@", "L", "Z","@","@","E","R","@","O"];
    let finalString = removeChars.filter(function (ele) {
        return !ele.startsWith("@")
    }).reduce(function (acc,current) {
        return acc + current
        
    });
    console.log(finalString);
/*
forEach
-method executes a provided function once for each array element
syntax forEach(callBack )
*/
let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");
allLis.forEach(function (ele) {
    ele.onclick = function () {
        allLis.forEach(function (ele) {
            ele.classList.remove("active");
        })
        this.classList.add("active");
        allDivs.forEach(function (ele) {
            ele.style.display = "none";
        })
    }
})

/*
you can use 
- ,
- _
- Space
-True => 1 => One time Only in the code
-you cannot use numbers or letters
-you must use [filter + Map + Reduce + your Knowledge]
-order is not important
-all in one chain
*/
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString.split(",").map(function (ele) { 
    return isNaN(parseInt(ele)) ? ele : "";
}).map(function (ele) {
    return ele === "_" ? " " : ele;
}).map(function (ele) {
    return ele.length != [ele.length-ele.length] ? ele[+false] : ele;
}).filter(function (ele) {
    return ele !== myString[myString.length - +true] ;
}).reduce(function (acc, current, index) {
    return acc+ current
});
console.log(solution);





