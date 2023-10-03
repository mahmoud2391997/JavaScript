/*
Arrays
-create arrays [two methods] new array + []
-access array elements
-nested arrays
-change arrays elements
-check for array array.isarray(arr);
 */
let friends = ["ahmed","mohamed","sayed",["marawan","ali"]];
console.log(`hello ${friends[0]}`);
console.log(`hello ${friends[2]}`);
console.log(`${friends[1][3]}`);
console.log(`${friends[3][1][2]}`);
console.log(friends);
friends[1] = "gamal";
console.log(friends);
friends[3] = "sameh";
console.log(friends);
friends[3] = ["sameh","ameer"];
console.log(friends);
let str = "osama"
console.log(Array.isArray(str));
/*
array methods
-lenght
*/
//index starts from zero
console.log(friends.length);
friends[friends.length] = "gamal";
console.log(friends);
friends.length = 3
console.log(friends);
/*
arrays methods [adding and removing]
-unshift("","") add elements to the first
-push("","") add elements to the end
-shift("","") remove first element  from the array
-pop("","") remove last element from the array
*/
let myFriends = ["ahmed","mohamed","sayed","ali"];
console.log(myFriends);
myFriends.unshift("osama","nabil");
console.log(myFriends);
myFriends.push("osama","nabil");
console.log(myFriends);
myFriends.shift();
console.log(myFriends);
let first = myFriends.shift();
console.log(first);
console.log(myFriends);
let last = myFriends.pop();
console.log(myFriends);
console.log(last);
/*
arrays methods[search]
-indexOf(search element,from index [opt])
-lastIndexOf(search element ,from index[opt])
-includes(valueToFind,fromm index[opt])[ES7]
*/
myFriends = ["ahmed","mohamed","sayed","ali","ahmed"];
console.log(myFriends.indexOf("ahmed",0));
console.log(myFriends.lastIndexOf("ahmed",-2));
console.log(myFriends.includes("ahmed"));
/*
Array Methods [sort]
-sort (function [opt])
-reverse
*/
myFriends = ["10","ahmed","mohamed","90",1000,100,20,"10",-20,-10];
console.log(myFriends);
console.log(myFriends.sort());
console.log(myFriends.reverse());
/*
Array Methods [slicing]
-slice(start[opt],end [opt] not including the end)
-slice()=>All Array
-if start is undefined => 0
-negative count from the end
-

*/
myFriends = ["ahmed","mohamed","sayed","ali","osama","gamal","ameer"];
console.log(myFriends);
console.log(myFriends.slice(1));
console.log(myFriends.slice(1,3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1,-2));
console.log(myFriends.slice(-4,-2));
console.log(myFriends);
myFriends.splice(1,1,"samir")
console.log(myFriends);
myFriends = ["ahmed","mohamed","sayed","ali","osama","gamal","ameer"];
let myNewFriends = ["samir","sameh"];
let schoolFriends = ["Haythem","shady"];
let allFriends = myFriends.concat(myNewFriends, schoolFriends,"gamil",[1,2])
console.log(allFriends);
console.log(allFriends.join("|"));
let zero = 0;
let counter = 3;

myFriends = ["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];
// console.log(myFriends.splice(zero,++counter).reverse());
// console.log(myFriends.slice(++zero,counter).reverse());
console.log(myFriends[myFriends.indexOf("Elham")][zero] + myFriends[myFriends.indexOf("Elham")][++zero] +  myFriends[myFriends.indexOf("Mazero")][--counter] +  myFriends[myFriends.indexOf("Mazero")][++counter] + myFriends[myFriends.indexOf("Mazero")][++counter] + myFriends[myFriends.indexOf("Mazero")][counter++ + zero++])
console.log(counter)
console.log(zero)
console.log( myFriends[myFriends.indexOf("Mazero")][--counter] + myFriends[myFriends.indexOf("Mazero")][counter++ + --zero].toUpperCase())







